import React from 'react';

export const RoomsDispatch = React.createContext(null);

function roomsReducer(state, action) {
    switch (action.type) {
        case 'add-room':
            return { rooms: [...state.rooms, action.room] }
        case 'remove-room':
            return { rooms: [...state.rooms].splice(state.rooms.indexOf(state.room), 1) }
        case 'join-room':
            return { ...state, showRoom: true, room: action.room }
        case 'leave-room':
            return { ...state, showRoom: false}
        default:
            return new Error('No action:' + action.type);
    }
}

export default roomsReducer