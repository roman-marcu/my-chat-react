import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { RoomsDispatch } from '../chat/reducer';

function RoomCardInfo(props) {
    const dispatch = useContext(RoomsDispatch);

    return (
        <div className="card card-width">
            <Card.Body>
                {props.room}
            </Card.Body>
            <Card.Footer><Button block="true" onClick={() => dispatch({ type: 'join-room', room: props.room })}>Join</Button></Card.Footer>
        </div>
    )
}

export default RoomCardInfo;