import React, {useState} from "react";

// CSS Stylesheets:
import "../styles/Global.css";
import "../styles/ToDoList.css";

//Assets:
import plusIcon from "../assets/plus.png";
import playIcon from "../assets/play.png"


//Components:
import Heading from "./Heading";
import Title from "./Title";
import Item from "./Item";
import Button from "./Button";


function toDoList() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);


    function handleChange(event) {
        const newValue = event.target.value;

        setInputText(newValue);
    }

    function addItem() {
       setItems(prevItems => {
           return [...prevItems, inputText];
       });

       setInputText("");
    }

    return (
        <>
            <div className="container">
                <Heading title="TO-DO LIST" />
                <Title action="Comece adicionando suas tarefas:" /> 


                {items.map(item => (<Item text={item}/>))}

                
                <div className="item">
                    <input className="checkbox" type="checkbox"/>
                    <input 
                        className="item-input" 
                        type="text" 
                        value={inputText}
                        placeholder="Digite aqui..." 
                        onChange={handleChange}
                    />

                    <a onClick={addItem}>
                        <img src={plusIcon}/>
                    </a>
                
                </div>


            <Button action="PRÓXIMO" style="green" icon={playIcon}/>


            
            </div>

        </>
    );
};


export default toDoList;