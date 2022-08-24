import { TodoItem } from "./TodoItem";

import { TodoItem as ITodoItem } from "./types";

export const TodoList = ({
  todos = [],
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
    <ul className="listcontainer">
      {todos.map((todo: ITodoItem, index: number) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          activeEdit={activeEdit}
          editable={editable}
          setEditable={setEditable}
          editableIndex={editableIndex}
          currentTodo={currentTodo}
          saveEdit={saveEdit}
          setCurrentTodo={setCurrentTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};
