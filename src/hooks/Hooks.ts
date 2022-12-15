import {useDispatch, useSelector} from "react-redux";
import {AppDispatchType, RootState} from "../Redux/Store";

export const useAppDispatch = () => useDispatch<AppDispatchType>()

export const useAppSelector = <Return>(callback: (state: RootState) => Return) => {
    return useSelector((state: RootState) => callback(state));
}