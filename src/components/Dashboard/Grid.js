import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config";

const Grid = ({name}) => {
    const [docs, setDocs] = useState([]);
    const q = query(collection(db, "user-dashboard"), where("name", "==", name));

    getDocs(q)
        .then(querySnapshot => {
            let documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        })

    return(
        <div>
            {docs && docs.map(doc => (
                <div key={doc.id}>
                    <img src={doc.imgURL} alt="fail"/>
                </div>
            ))}
        </div>
    )
}

export default Grid;