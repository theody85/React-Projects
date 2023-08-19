import styles from "../style.module.css";
import shortid from "shortid";

const Form = ({todo, setTodo, todoList, setTodoList }) => {

    const handleChange = (event) => {
        setTodo(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id:shortid.generate()}]);
        setTodo("");
    };
    return (
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}> 
                <input 
                value={todo}
                onChange= {handleChange}
                placeholder="Add Todo Item" 
                className={styles.todoinput}>
                </input>
                <button 
                    type="submit"
                    className={styles.todobutton}>
                    Add
                </button>
            </form>
        </div>
    )
}

export default Form;