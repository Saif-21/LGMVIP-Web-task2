import UserDataContext from "./UserDataContext"
import { useState } from "react"

const UserDataState = (props) => {
    const [data, setData] = useState([]);


    const fetchData = async (page) => {
        const responce = await fetch(`https://reqres.in/api/users?page=${page}`);
        const result = await responce.json();
        // console.log(result)

        await setData(result.data);

    }


    return (
        <>
            <UserDataContext.Provider value={{ data, fetchData }}>
                {props.children}
            </UserDataContext.Provider>
        </>
    )
}

export default UserDataState