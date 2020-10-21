import {LOGIN, REGISTER, REGISTER_SUCCESS} from './actionType';

export const login=payload=>{
    return {
        type: LOGIN,
        payload
    }
}

export const register=payload=>{
    return {
        type: REGISTER,
        payload
    }
}

export const register_success=payload=>{
    return{

        type: REGISTER_SUCCESS,
        payload
    }
}