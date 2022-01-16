import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config";
import { motion } from "framer-motion";

const Grid = ({email}) => {
    const [docs, setDocs] = useState([]);
    const q = query(collection(db, "user-dashboard"), where("email", "==", email));

    getDocs(q)
        .then(querySnapshot => {
            let documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        })

    return(
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{opacity: 1}}
                >
                    <motion.img src={doc.imgURL} alt="not-rendered"
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default Grid;