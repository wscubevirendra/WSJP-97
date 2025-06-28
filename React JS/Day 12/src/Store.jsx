import React, { createContext, useContext, useState } from 'react'
const MainContext = createContext()
function Store(props) {
    const [count, setCount] = useState(0);
    return (
        <MainContext.Provider value={{ count, setCount }}>
            {props.children}
        </MainContext.Provider>
    )
}



export default Store;
export { MainContext };