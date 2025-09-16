import { createContext } from "react";

export type contexCartCountType = {
    contextCartCount: number;
    setContextCartCount: (contextCartCount : number) => void;
 }

 export const ContextCartCount = createContext<contexCartCountType>({
    contextCartCount: 0,
    setContextCartCount: () => {}

 })