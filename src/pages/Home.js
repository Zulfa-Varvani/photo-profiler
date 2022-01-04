import React, { useState } from "react";
import { projectFireStore} from "../firebase/config";
import Profile from "../comps/Profile";

const Home = () => {
    const [user, setUser] = useState([]);

    window.addEventListener("load", () => {
        Fetchdata();
    });

    const Fetchdata = () => {
        projectFireStore.collection("users").doc("VuOhkQXfLt0GlGPBs8uu").get().then(documentSnapshot => {
            var data = documentSnapshot.data();
            setUser(arr => [...arr, data]);
        });
    }

    return (
        <div className="title">
            {
                user.map((data) => (
                    <Profile name={data.name}
                            email={data.email}
                            url={data.url}/>
                ))
            }
        </div>
    );
}

export default Home;