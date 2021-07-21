import React from 'react';
import firebase from 'firebase';

const update = ({ doc }) => {
    const [value, setValue] = React.useState(""),
    const db = firebase.firestore();
    const getValue = (event) => {
        setValue(event.target.value);
    };
    const updateValue = () => {
        db.collection("values").doc(doc).update({
            value: value,
        })
        .then(function () {
            console.log("documents successfully update!");
        })
        .catch(function (error) {
            console.error("Error updating document: ", error);
        });
    };

    return (
        <>
            <input onBlur={getValue} type='text' />
            <button onClick={updateValue}>update</button>
        </>
    );
};
 
export default update