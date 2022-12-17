import {InferActionTypes} from "../Store";
import {IBlock, IBoard} from "../../Types/Types";
import iphone from "../../assets/img/iPhone.png"
import macbook from "../../assets/img/macbook.png"

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof action>


const initialState = {
    isLoading: true,
    block: {
        id: 0,
        dataBoard: [
            {
                upperTitle: "Discover our history",
                button: "btnArrow",
                downTitle: "About us",
                colorScheme: "Purple",
                id: 1,
                nameBoard: "miniBoard"
            },
            {
                upperTitle: "Have some questions?",
                button: "btnArrow",
                downTitle: "Contact us",
                colorScheme: "Green",
                id: 2,
                nameBoard: "miniBoard"
            },
            {
                upperTitle: "There is something else for you",
                id: 3,
                nameBoard: "superBoard",
                img: iphone,
            },
        ] as Array<IBoard>
    }as IBlock,
    dataBlock: [
        {
            id: 1,
            dataBoard: [
                {
                    upperTitle: "Discover our history",
                    button: "btnArrow",
                    downTitle: "About us",
                    colorScheme: "Purple",
                    id: 1,
                    nameBoard: "miniBoard"
                },
                {
                    upperTitle: "Have some questions?",
                    button: "btnArrow",
                    downTitle: "Contact us",
                    colorScheme: "Green",
                    id: 2,
                    nameBoard: "miniBoard"
                },
                {
                    upperTitle: "There is something else for you",
                    id: 3,
                    nameBoard: "superBoard",
                    img: iphone,
                },
            ],
        },
        {
            id: 2,
            dataBoard: [
                {
                    upperTitle: "Im so Good",
                    button: "btnArrow",
                    downTitle: "Hello",
                    colorScheme: "Green",
                    id: 1,
                    nameBoard: "miniBoard"
                },
                {
                    upperTitle: "We are champions",
                    button: "btnArrow",
                    downTitle: "Check it",
                    colorScheme: "Purple",
                    id: 2,
                    nameBoard: "miniBoard"
                },
                {
                    upperTitle: "You want to buy mac with sell?",
                    id: 3,
                    nameBoard: "superBoard",
                    img: macbook,
                },
            ],
        }
    ] as Array<IBlock>,
    idCounterSuperBoard: 1,
    idCounterBoard: 0,
    idCounterMiniBoard: 1,
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