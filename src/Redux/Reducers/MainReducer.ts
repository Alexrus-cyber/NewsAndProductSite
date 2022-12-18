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
        dataBoard: [] as Array<IBoard>
    } as IBlock,
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
                    id: 4,
                    nameBoard: "miniBoard"
                },
                {
                    upperTitle: "We are champions",
                    button: "btnArrow",
                    downTitle: "Check it",
                    colorScheme: "Purple",
                    id: 5,
                    nameBoard: "miniBoard"
                },
                {
                    upperTitle: "You want to buy mac with sell?",
                    id: 6,
                    nameBoard: "superBoard",
                    img: macbook,
                },
            ],
        }
    ] as Array<IBlock>,
    idBoards: 6,
    idBlocks: 2,
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
                idBoards: action.countID,
            }
        }
        case "CounterIdBlock": {
            return {
                ...state,
                idBlocks: action.countIdBlock
            }
        }
        case "AddBoard":{
            let newBoard = {
                id: action.id,
                upperTitle: action.upperTitle,
                nameBoard: action.nameBoard,
                downTitle: action.downTitle,
                img: action.img,
                button: action.button,
                colorScheme: action.colorScheme,
            }
            let newBlock = {
                id: action.id,
                dataBoard: [newBoard]
            }
            console.log(newBlock);
            return {
                ...state,
                dataBlock: [...state.dataBlock.filter((el) => el.id !== action.id), newBlock]
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
    },
    CounterIdBlock: (countIdBlock: number) => {
        return {
            type: "CounterIdBlock",
            countIdBlock
        } as const
    },
    AddBoard: (id: number, upperTitle: string, nameBoard: "superBoard" | "board" | "miniBoard", downTitle: string, img: string, button: "btnArrow" | "btnBuy" | null, colorScheme: "Green" | "Purple" | null) => {
        return {
            type: "AddBoard",
            id,
            upperTitle,
            nameBoard,
            downTitle,
            img,
            button,
            colorScheme,
        } as const
    },
}