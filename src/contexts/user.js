import { createContext, useState } from 'react';


export const userContext = createContext();
export const userContextProvider = (props) => {

     const [user, setUser] = useState(null);

     return (
         <userContext.Provider value={{user : [user, setUser]}}>
             {props.children}
         </userContext.Provider>
     )
}