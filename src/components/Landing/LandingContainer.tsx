import {Landing} from "./Landing"
import {useAppSelector} from "../../hooks/Hooks";

export const LandingContainer = () => {
    const {dataBlock} = useAppSelector(state => state.main)
    return (
        <>
            {dataBlock.map((el) => <Landing key={el.id} data={el.dataBoard}/>)}
        </>

    )
}

