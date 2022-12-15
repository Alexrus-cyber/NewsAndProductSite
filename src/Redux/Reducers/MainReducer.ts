import {InferActionTypes} from "../Store";

type NewsType = {
    upperTitle: string
    downTitle?: string
    img: string
    button: "btnArrow" | "btnBuy" | null
    status: "MiniBoard" | "Board" | "SuperBoard"
}
type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof action>
const initialState = {
    isLoading: true,
    news:[
        {upperTitle: "World of Hearing Technology" , img: "", status: "Board", button: "btnArrow", downTitle:"View our blog"}
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