/*
 * Reducer actions related with login
 */
import * as types from './types';

export function getBookRequest(keyword: string) {
    return {
        type: types.GET_BOOK_REQUEST,
        keyword,
    };
}

export function getBookResponse(payload: string | undefined) {
    return {
        type: types.GET_BOOK_RESPONSE,
        payload,
    };
}

export function getFavoriteBookRequest() {
    return {
        type: types.GET_FAVORITE_BOOK_LIST_REQUEST,
    };
}

export function getFavoriteBookResponse(payload: string | undefined): {
    type: string;
    payload: string | undefined;
} {
    return {
        type: types.GET_FAVORITE_BOOK_LIST_RESPONSE,
        payload,
    };
}

export function getBookDetailRequest(id: number) {
    return {
        type: types.GET_BOOKDETAIL_REQUEST,
        id,
    };
}

export function getBookDetailResponse(payload: string | undefined): {
    type: string;
    payload: string | undefined;
} {
    return {
        type: types.GET_BOOKDETAIL_RESPONSE,
        payload,
    };
}
export function addBookToFavoriteRequest(id: number) {
    return {
        type: types.ADD_TO_FAVORITE_REQUEST,
        id,
    };
}

export function removeBookToFavoriteRequest(id: number) {
    return {
        type: types.REMOVE_FROM_FAVORITE_REQUEST,
        id,
    };
}

export function setNewFavorites(payload: []) {
    return {
        type: types.SET_NEW_FAVORITE_BOOKS,
        payload,
    };
}
