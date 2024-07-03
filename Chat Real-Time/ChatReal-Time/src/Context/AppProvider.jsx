import React from "react";
import useFireStore from "../hooks/useFireStore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider ({ children }) {
  const { user } = React.useContext(AuthContext);
  const { uid } = user;

  const roomsConditions  = React.useMemo(() => ({
    fieldName: 'members',
    operator: 'array-contains',
    compareValue: uid
  }), [uid]);
   
  const rooms = useFireStore('rooms', roomsConditions);


   return(
    <AppContext.Provider value={{ rooms }} >
        {children}
    </AppContext.Provider>
   )
}
