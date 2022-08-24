export const TodoEdit = ({
  saveEdit,
  setEditable,
  currentTodo,
  setCurrentTodo,
}: any) => {
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentTodo((event.target as HTMLInputElement).value);
  };

  const submitEdit = (event: React.FormEvent) => {
    event.preventDefault();
    saveEdit();
    setEditable(false);
  };

  return (
    <>
      <form className="editContainer">
        <input
          className="inputTodo"
          type="text"
          placeholder="Update todo"
          name="description"
          value={currentTodo}
          onChange={onInputChange}
        />
        <button
          className="onEditButton"
          onClick={(e: React.FormEvent) => submitEdit(e)}
        >
          aceptar
        </button>
      </form>
    </>
  );
};
