import Todo from "../components/Todo"

const TodoList = ({todoList, setTodoList}) => {

    return (
        <div>
            {todoList.map((todoItem)=>(
                <Todo 
                    setTodoList={setTodoList} 
                    todoList={todoList} 
                    key={todoItem.id} 
                    todoItem={todoItem}/>
            ))}
        </div>
    )
}

export default TodoList;