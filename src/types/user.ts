
export interface UserState {
    users: any[]
    loading: boolean
    error: null | string
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
}

export interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}

export interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}


export type UserAction = FetchUserAction | FetchUsersSuccessAction | FetchUsersErrorAction