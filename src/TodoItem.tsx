import { TodoEdit } from "./TodoEdit";

export const TodoItem = ({
  todo,
  index,
  onDeleteTodo,
  activeEdit,
  editable,
  setEditable,
  editableIndex,
  currentTodo,
  saveEdit,
  setCurrentTodo,
  toggleTodo,
}: any) => {
  return (
    <li className={(index%2 === 0) ? "listBackground" : "" }>
      <label className="checkContainer" id="c1">
        <input
          type="checkbox"
          defaultChecked={todo.done}
          onClick={() => toggleTodo(index)}
        />
        <span className="checkmark"></span>
      </label>

      <div className="spanTodo">
        {editable && editableIndex === index ? (
          <TodoEdit
            saveEdit={saveEdit}
            setEditable={setEditable}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
          />
        ) : (
          <span style={{ textDecoration: todo.done ? "line-through" : "" }}>
            {" "}
            {todo.description}{" "}
          </span>
        )}
      </div>

      <button className="editButton" onClick={() => activeEdit(index)}>
        <i className="bi bi-pencil-square"></i>
      </button>

      <button className="deleteButton" onClick={() => onDeleteTodo(index)}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
};
