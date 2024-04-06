import { createContext, useState } from "react";


 const Store = createContext()

 export const StoreProvider = ({children})=>{

    const [data, setData] = useState('')

    
    return(
        <Store.Provider value={{data, setData}}>
            {children}
        </Store.Provider>
    )
 }
export default Store