import createReducer from 'lib/createReducer';
import * as types from 'store/actions/types';
import { IBookState } from 'app/models/reducers/fetchBooks';
import { IBookResponse,IBookRequest,IFetchBooksLoading,IFetchBooksLoadingStop } from './../../models/actions/fetchBooks'
import BookDetail from 'app/screens/BookDetail';


const initialState: IBookState = {
isFetching: true,
detail: [],
favorite: [],
bookDetail:[]
};

export const bookFetchReducer = createReducer(initialState, {
    [types.FETCH_BOOKLIST_REQUEST](state: IBookState, action: IBookRequest) {
      return {
        ...state,
      };
    },
    [types.FETCH_BOOKLIST_RESPONSE](state: IBookState, action: IBookResponse) {
      return {
        ...state,
        detail : action.response,
       
      };
    },
    [types.FETCH_LOADING](state: IBookState, action: IFetchBooksLoading) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [types.FETCH_STOPLOADING](state: IBookState, action: IFetchBooksLoadingStop) {
      return {
        ...state,
        isFetching: false,
      };
    },
    
    [types.FETCH_FAVORITE_BOOKLIST_REQUEST](state: IBookState, action: IBookRequest) {
      return {
        ...state,
      };
    },
    [types.FETCH_FAVORITE_BOOKLIST_RESPONSE](state: IBookState, action: IBookResponse) {
      return {
        ...state,
        favorite : action.payload,
       
      };
    },
    [types.FETCH_FAVORITE_BOOKDETAIL_REQUEST](state: IBookState, action: IBookRequest) {
      return {
        ...state,
      };
    },
    [types.FETCH_FAVORITE_BOOKDETAIL_RESPONSE](state: IBookState, action: IBookResponse) {
      return {
        ...state,
        bookDetail : action.payload,
       
      };
    },

});

