import { useState } from "react";
import "./style.css"


export default function Calculator() {
    const [data, updateData] = useState("");
    function handleClick(value) {
        if (value !== "=") {
            if (value === "C") {
                updateData("")
                // console.log("c")
            }
            else {
                updateData(data + value)

            }

        }
        else {
            
                try {
                    updateData(eval(data));
                }
                catch (error) {
                    updateData("Error")
                    setTimeout(() => {
                        updateData("");
                    }, 1500)
                }
            

        }
    }
    return (
        <div className="container">
            <div className="display">{data}</div>
            <div className="buttons">
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick("=")}>=</button>
                <div></div>
                <button id="clear-btn" onClick={() => handleClick("C")}>C</button>
                <div></div>
            </div>
        </div>
    )

}