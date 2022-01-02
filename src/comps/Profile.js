import React from "react";

const Profile = ({name, email, url}) => {
    return (
        <div className="title">
            <h1>Profiler</h1>
            <h2>{name}</h2>
            <img src={url} className="proPic" alt="userpfp"/>
        </div>
    );
}

export default Profile;