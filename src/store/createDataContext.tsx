import { createContext, useReducer, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;  
}

export default (reducer:any , actions:any , initialState:any) => {
    const Context = createContext({})
    const Provider = ({ children }: ButtonProps) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundActions = {}
        for (const key in actions) {
            (boundActions as any)[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider}
}