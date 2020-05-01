import React, { useState, useEffect, useRef, useContext } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import { RoomsDispatch } from '../chat/reducer';

function RoomModal(props) {
    const dispatch = useContext(RoomsDispatch);
    const [messages, setMessages] = useState([]);

    const chatBodyEl = useRef(null);
    const handleAddToChatBody = () => {
        setMessages(oldMessages => [...oldMessages, chatBodyEl.current.value])
        chatBodyEl.current.focus();
    }

    const chatMessages = messages.map((msg, index) =>
        <div key={"msg" + index}>{msg}</div>
    );

    useEffect(() => {
        setMessages([]);
    }, [props.room]);

    return (
        <Modal show={props.showRoom} onHide={() => dispatch({ type: 'leave-room' })}>
            <Modal.Header closeButton>
                <Modal.Title>Welcome to {props.room}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <div id="chat-body" className="chat-body">
                    {chatMessages}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <InputGroup>
                    <FormControl aria-describedby="basic-addon1" ref={chatBodyEl} />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={handleAddToChatBody}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    )
}

export default RoomModal;
