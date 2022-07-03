import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const UserContext = createContext({});

const initalTodos = [
    {
        id: uuidv4(),
        task: "Learn React",
        complete: true
    },
    {
        id: uuidv4(),
        task: "Learn Firebase",
        complete: true
    },
    {
        id: uuidv4(),
        task: "Learn GraphQL",
        complete: false
    }
];

export const UserProvider = ({ children }) => {

    const [data, setData] = useState(initalTodos);
    const [name, setName] = useState('Thuan');

    return (
        <UserContext.Provider value={{ data, setData, name, setName }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;