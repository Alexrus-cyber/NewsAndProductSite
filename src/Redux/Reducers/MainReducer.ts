import {InferActionTypes} from "../Store";

type NewsType = {
    title: string
    img: string
    button: "btnArrow" | "btnBuy"
}
type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof action>
const initialState = {
    isLoading: true,
    news:[
        {title: "Hello world!" , img: ""}
    ] as Array<NewsType>
}


export const mainReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "GetLoad" : {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const action = {
    GetLoad: (isLoading: boolean) => {
        return {
            type: "GetLoad",
            isLoading
        } as const
    }
}