import React, { useRef, useReducer } from 'react';
import { Button, Container, Row, InputGroup, FormControl, CardGroup } from 'react-bootstrap';
import RoomModal from '../rooms/roomModal'
import RoomCardInfo from '../rooms/roomInfo';
import roomsReducer from './reducer';
import { RoomsDispatch } from './reducer';

function Chat() {
    const [state, dispatch] = useReducer(roomsReducer, { rooms: [], room: null });

    const roomNameEl = useRef(null);
    const onAddRoomBtnClick = () => {
        dispatch({ type: 'add-room', room: roomNameEl.current.value });
    };

    const displayRooms = state.rooms.map((room, index) =>
        <RoomCardInfo key={"room-" + index} room={room} />
    );

    return (
        <RoomsDispatch.Provider value={dispatch}>
            <Container>
                <Row>
                    <InputGroup>
                        <FormControl aria-describedby="basic-addon1" ref={roomNameEl} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={onAddRoomBtnClick}>Create</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Row>
                <Row><br /></Row>
                <Row>
                    <CardGroup>
                        {displayRooms}
                    </CardGroup>
                </Row>
                <RoomModal room={state.room} showRoom={state.showRoom}/>
            </Container>
        </RoomsDispatch.Provider>
    )
}

export default Chat;