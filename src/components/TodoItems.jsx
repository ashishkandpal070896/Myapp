import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems =({todoItems, onDeleteClick})=>{
  return <>
  <div className={styles.itemsContainer}>
    {/* <TodoItem todoDate="04/01/2025" todoName="Buy Milk"></TodoItem>
    <TodoItem todoDate="05/01/2025" todoName="Go to College"> */
todoItems.map(item=> <TodoItem  key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}></TodoItem>)

    }
  
    </div>
  </>
};
export default TodoItems;