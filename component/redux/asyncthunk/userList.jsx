import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "./userSlice";


const UserList = () =>{
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state)=> state.users)

    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch]);
    if(loading)return <p>Loading users...</p>
    if(error)return <p style={{color : "red"}}>{error}</p>

    return(
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;