import React from 'react';
import { getNewQuoteApi } from '../api/api';

const SET_QUOTE = "quote_machine/QUOTE/SET_QUOTE";
const TOGGLE_IS_FETCHING = "quote_machine/QUOTE/TOGGLE_IS_FETCHING";

const initialState = {
    quoteData: {},
    colors: [
        '#d0d4c3',
        '#9aa88f',
        '#edead8',
        '#caccb1',
        '#a6b698',
        '#f3f0f0',
        '#e5e5d7',
        '#e3dec9',
        '#a3a36c',
        '#85a28d',
        '#93aa90'
      ],
    toggleIsFetching: false  
    
}

const quoteReducer = (state = initialState, action) =>{
    switch(action.type){
    case SET_QUOTE:
        return {
            ...state,
            quoteData: action.quoteData
        }
    case TOGGLE_IS_FETCHING:
        return {
            ...state,
            toggleIsFetching: action.fetching
        }    

     default:
         return state;   
}
};


export const setQuote =(quoteData)=>({
    type: SET_QUOTE,
    quoteData
});

export const toggleIsFetchingActionCreator = (toggleIsFetching)=>({
    type: TOGGLE_IS_FETCHING,
    toggleIsFetching
});


export const requestNewQuote = () => async (dispatch) =>{
        dispatch(toggleIsFetchingActionCreator(true));
        let responce = await getNewQuoteApi();
        dispatch(setQuote(responce.data));
        dispatch(toggleIsFetchingActionCreator(false));    
}








export default quoteReducer;