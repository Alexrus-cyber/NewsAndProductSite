import {Landing} from "./Landing"
import {useAppSelector} from "../../hooks/Hooks";

export const LandingContainer = () => {
    const {miniBoard} = useAppSelector(state => state.main.news)
    const {data} = useAppSelector(state => state.main)
    return (
        <Landing miniBoard={miniBoard} data={data}/>
    )
}

