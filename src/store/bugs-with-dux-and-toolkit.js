// Using reduxjs/toolkit to remove action types and simplify actions and reducer

import { createAction } from '@reduxjs/toolkit';

// Actions

export const bugAdded = createAction('bugAdded');
export const bugRemoved = createAction('bugRemoved');
export const bugResolved = createAction('bugResolved');

// Reducer

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
          ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ];
    case bugRemoved.type:
      return state.filter(bug => bug.id !== action.payload.id);
    case bugResolved.type:
      return state.map(bug => {
        const tempBug = { ...bug };
        if (tempBug.id === action.payload.id) tempBug.resolved = true
        return tempBug;
      });
  default:
    return state;
  }
}