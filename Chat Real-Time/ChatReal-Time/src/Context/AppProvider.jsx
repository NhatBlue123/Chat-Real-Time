import React from "react";
import useFireStore from "../hooks/useFireStore";
import { AuthContext } from "./AuthProvider";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = React.useState(false);
  const [selectedRoomId, setSelectedRoomId] = React.useState('');

  const { user } = React.useContext(AuthContext);

  // Ensure user is not null
  const uid = user ? user.uid : null;

  const roomsConditions = React.useMemo(() => {
    if (!uid) return null;
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid
    };
  }, [uid]);

  const rooms = useFireStore('rooms', roomsConditions);

  const selectedRoom = React.useMemo(
    () => rooms.find((room) => room.id === selectedRoomId),
    [rooms, selectedRoomId]
  );

  const usersConditions = React.useMemo(() => {
    if (!selectedRoom || !selectedRoom.members) return null;
    return {
      fieldName: 'uid',
      operator: 'in',
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom]);

  const members = useFireStore('users', usersConditions);
  console.log({ members });

  return (
    <AppContext.Provider value={{ rooms, selectedRoom, isAddRoomVisible, setIsAddRoomVisible, selectedRoomId, setSelectedRoomId }}>
      {children}
    </AppContext.Provider>
  );
}
