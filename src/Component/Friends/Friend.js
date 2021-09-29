import React, {useEffect, useState} from 'react';
import Users from "./Users";
import './friend.css';
const Friend = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data));
    },[])
   // console.log(users)
    return (
        <div className="friend">

            {
                users.map(friend=><Users
                    key={friend.key}
                    friend={friend}
                 ></Users>
                )
            }
        </div>
    );
};

export default Friend;