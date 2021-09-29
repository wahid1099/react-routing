import React from 'react';
import {Link} from "react-router-dom";

const Users = (props) => {
    const {name,id,username,email}=props.friend;
    const friendId=`/friend/${id}`;
    return (
        <div className="user">
            <h1>Name : {name}</h1>
            <h2>Email : {email}</h2>
            <h3>UserName : {username}</h3>
            <h4>Email : {email}</h4>
            <Link to={friendId}>Visit</Link>

        </div>
    );
};

export default Users;