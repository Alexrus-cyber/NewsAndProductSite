import {InjectedFormProps, reduxForm} from "redux-form";
import {FC, useState} from "react";
import {FieldCreator, InputLogin} from "../../Common/FormControl/FormControl";
import {IBoard} from "../../Types/Types";

interface ICreateBoard {
    counterId: (id: number) => void
    dataBoard: Array<IBoard>
    idBoards: number,
    addBoard: (id: number, upperTitle: string, nameBoard: "superBoard" | "board" | "miniBoard", downTitle: string, img: string, button: "btnArrow" | "btnBuy" | null, colorScheme: "Green" | "Purple" | null) => void
}


interface IPropsValues {
    upperTitle: string,
    nameBoard: "superBoard" | "board" | "miniBoard",
    downTitle: string,
    img: string,
    button: "btnArrow" | "btnBuy" | null,
    colorScheme: "Green" | "Purple" | null

}
interface IFormOwn {}

export const CreateBoard: FC<ICreateBoard> = (props) => {
    const [idCount, setIdCount] = useState(props.idBoards);
    const onSubmit = (formData: IPropsValues)=> {
        let counts = idCount + 1;
        console.log(formData);
        setIdCount(counts)
        props.counterId(counts)
        props.addBoard(counts, formData.upperTitle,formData.nameBoard,formData.downTitle,formData.img,formData.button,formData.colorScheme);
    }
    return (
        <div style={{marginTop: 200}}>
            <ReduxBoardForm onSubmit = {onSubmit}/>
        </div>
    )
}

const NewBoardForm: FC<InjectedFormProps<IPropsValues,IFormOwn> & IFormOwn> = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div style={{marginTop: 20}}>
                {FieldCreator("upperTitle", "Введите заголовок", [], InputLogin)}
            </div>
            <div style={{marginTop: 20}}>
                {FieldCreator("nameBoard", "superBoard, board, miniBoard", [], InputLogin)}
            </div>
            <div style={{marginTop: 20}}>
                {FieldCreator("downTitle", "Введите нижний загаловок(Поле не обязательно)", [], InputLogin)}
            </div>
            <div style={{marginTop: 20}}>
                {FieldCreator("img", "Вставте ссылку", [], InputLogin)}
            </div>
            <div style={{marginTop: 20}}>
                {FieldCreator("button", "Тип кнопки", [], InputLogin)}
            </div>
            <div style={{marginTop: 20}}>
                {FieldCreator("colorScheme", "Green | Purple", [], InputLogin)}
            </div>
            <div style={{display:"flex", justifyContent:"center", marginTop: 20}}>
                <button>Сохранить</button>
            </div>
        </form>
    )
}

const ReduxBoardForm = reduxForm<IPropsValues, IFormOwn>({form: 'boardCreator'})(NewBoardForm)