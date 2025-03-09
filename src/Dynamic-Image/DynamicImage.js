
import React, { useState } from "react";
import "./DynamicImage.css"

export default function DynamicImage() {
    const [selectFruit, setSelectFruit] = useState("apple");//default selection
    const fruitImage = {
        apple: "./apple.avif",
        banana: "./banana.avif",
        orange: "./orangeOne.jpg",
    };
    const onSetChange = (event) => {
        console.log("onSetChange");
        setSelectFruit(event.target.value)
    };
    return (
        <div>
            <h1>Select Fruit</h1>
            <select className="drop-down" onChange={onSetChange}>
                <option value="apple">Apple</option>
                <option value="banana"> Banana</option>
                <option value="orange">Orange</option>
            </select>
            <h2>You Selected:{selectFruit}</h2>
            <img style={{ width: "30vw", height: "30vh", margin: "50px" }}
                src={fruitImage[selectFruit]}
                alt={selectFruit}></img>

        </div>
    )

}