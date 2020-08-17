import React, { createContext, useContext, useReducer} from 'react';

// This is the DataLayer
export const StateContext = createContext();

// Build a Provider
export const StateProvider = ({ reducer, initialState, children }) => (

<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

// This is how we ue it inside a component
export const useStateValue = () => useContext(StateContext);