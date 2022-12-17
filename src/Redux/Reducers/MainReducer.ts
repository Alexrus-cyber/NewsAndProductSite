import {InferActionTypes} from "../Store";
import {IMiniBoard, INews, ISuperBoard} from "../../Types/Types";
import arrow from "../../assets/img/arrow.png"

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof action>
const initialState = {
    isLoading: true,
    news: {
        superBoard: {} as ISuperBoard,
        board: {} as ISuperBoard,
        miniBoard: {} as IMiniBoard
    } as INews,
    idCounterSuperBoard: 1,
    idCounterBoard: 0,
    idCounterMiniBoard: 1,
    data: [
        {
            upperTitle: "Discover our history",
            img: arrow,
            button: "btnArrow",
            downTitle: "About us",
            colorScheme: "Purple",
            id: 1
        },
        {
            upperTitle: "Have some questions?",
            img: arrow,
            button: "btnArrow",
            downTitle: "Contact us",
            colorScheme: "Green",
            id: 2
        },
    ] as Array<IMiniBoard>
}


export const mainReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "GetLoad" : {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        case "CounterID": {
            return {
                ...state,
                idCounterMiniBoard: action.countID,
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
    },
    CounterID: (countID: number) => {
        return {
            type: "CounterID",
            countID
        } as const
    }
}