import React, { useState } from "react";
import {projectStorage, projectFireStore } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const InputForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [url, setURL] = useState("");
    const im_types = ["image/png", "image/jpeg"];
    let navigate = useNavigate();

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if(selected && im_types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.persist();
        setName(e.target.fullName.value);
        setEmail(e.target.email.value);

        const userRef = projectStorage.ref(file.name);
        const userStoreRef = projectFireStore.collection("users");
        
        userRef.put(file).on("state_changed", (snapShot) => {
            console.log(snapShot);
        }, (err) =>{
            console.log(err);
            setError(err);
        }, async() => {
            const url = await userRef.getDownloadURL();
            userStoreRef.doc(e.target.fullName.value).set({
                name: e.target.fullName.value,
                email: e.target.email.value,
                url,
            }).then(() => {console.log("added!");});
            setURL(url);
        });
        navigate("/profile");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="input-name">
                Name: 
                <input type="text" name="fullName" placeholder="Ex: Bob Doe"/>
            </label>
            <label className="input-email">
                Email:
                <input type="email" name="email" placeholder="Ex: bob.doe@gmail.com"/>
            </label>
            Profile Picture:
            <label className="img-upload">
                <input type="file" name="profilePic" onChange={changeHandler}/>
                <span>+</span>
            </label>
            <div className="ouput">
                {error && <div className="error"> {error} </div>}
            </div>
            <button type="submit">Submit!</button>
        </form>
    )
}

export default InputForm;