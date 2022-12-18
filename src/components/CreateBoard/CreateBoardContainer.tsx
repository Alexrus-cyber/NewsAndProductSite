import {CreateBoard} from "./CreateBoard";
import {useAppDispatch, useAppSelector} from "../../hooks/Hooks";
import {action} from "../../Redux/Reducers/MainReducer";

export const CreateBoardContainer = () => {
    const {idBoards} = useAppSelector(state => state.main)
    const {dataBoard} = useAppSelector(state => state.main.block)
    const dispatch = useAppDispatch();


    const addBoard = (id: number, upperTitle: string, nameBoard: "superBoard" | "board" | "miniBoard", downTitle: string, img: string, button: "btnArrow" | "btnBuy" | null, colorScheme: "Green" | "Purple" | null) => {
        dispatch(action.AddBoard(id,upperTitle,nameBoard,downTitle,img,button,colorScheme))
    }
    const counterId = (id: number) => {
        dispatch(action.CounterIdBlock(id));
        dispatch(action.CounterID(id))
    }
    return (
        <CreateBoard counterId = {counterId} dataBoard = {dataBoard} idBoards = {idBoards} addBoard = {addBoard}/>
    )
}