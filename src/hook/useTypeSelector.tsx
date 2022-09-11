import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../store/rootRedux";


export const useTypeSelector: TypedUseSelectorHook<RootType> = useSelector