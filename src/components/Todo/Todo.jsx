// Styles
import styles from "./Todo.module.css";

import { useState } from "react";


export default function Todo() {

    const [listItems, setListItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleNewItem() {
        if(inputValue !== "") {
            setListItems((prev) => [...prev, {value: inputValue, isCompleted: false}]);
            setInputValue("");
        }
    }

    function handleCompleted(index) {
        setListItems(listItems.map((item, i) =>
            i === index ? { ...item, isCompleted: !item.isCompleted } : item
        ));
    }

    function handleDelete(index) {
        setListItems(listItems.filter((_, i) => i !== index));
    }

    return(
        <>
            <div className={styles.todolist}>
                {
                    !listItems.length && <p>Liste kalbin kadar temiz</p>
                }
                {
                    listItems.map((item, index) => (
                        <div key={ index } className={styles.listItem}>
                            <p onClick={ () => handleCompleted(index) }
                               className={ item.isCompleted ? `${styles.content} ${styles.completed}` : styles.content }>
                                {item.value}
                            </p>
                            <p onClick={ () => handleDelete(index) } className={styles.remove}>
                                Sil
                            </p>
                        </div>
                    ))
                }

                <div className={styles.newItem}>
                    <input
                        type="text"
                        placeholder="Yazınız..."
                        value={ inputValue }
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={ handleNewItem }>Yeni</button>
                </div>
            </div>
        </>
    );
}