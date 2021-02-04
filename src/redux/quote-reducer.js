import React from 'react';
import { getNewQuoteApi } from '../api/api';

const SET_QUOTE = "SET_QUOTE";

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
      ]
    
}

const quoteReducer = (state = initialState, action) =>{
    switch(action.type){
    case SET_QUOTE:
        return {
            ...state,
            quoteData: action.quoteData
        }

     default:
         return state;   
}
};


export const setQuote =(quoteData)=>({
    type: SET_QUOTE,
    quoteData
});


export const requestNewQuote = () =>{
     return (dispatch)=>{
         getNewQuoteApi().then(responce =>{ 
            dispatch(setQuote(responce.data))})

    }
}








export default quoteReducer;