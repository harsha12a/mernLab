import { createContext, useState } from "react";
export const TestContext = createContext()
export default function Test({children}){
    let [count, setCount] = useState(0)
    let toggle = () => setCount(count+1)
    return (
        <TestContext.Provider value={{count, toggle}}>
            {children}
        </TestContext.Provider>
    )
}