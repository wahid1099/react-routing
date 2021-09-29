import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";

const Freidndetails = () => {
    const {friendId}=useParams();
    const history=useHistory();
    const [friend,setFriend]=useState({});
    useState(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
            .then(res=>res.json())
            .then(data=>setFriend(data));
    },[])
 const handleOnclick=()=>{
        history.push('/friend')
 }
    return (
        <div>

            <h1>Details coming soon {friendId}</h1>
            <h1>Name :{friend.name}</h1>
            <h2>Phone :{friend.phone}</h2>
            <h3>Website :{friend.website}</h3>
            <p>Works at: {friend.company?.name}</p>
           <button onClick={handleOnclick}>See all friends</button>

        </div>
    );
};

export default Freidndetails;