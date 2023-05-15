const ResetButton = ({ onClick, checkCount }) => {
  const buttonStyle = { backgroundColor: "lightgreen" };
  return (
    <div>
      {/* Первый вариант записи. Если левый операнд true то логическое &&
      возвращает правый операнд */}
      {/* {checkCount > 0 && (
        <div>
          <button style={buttonStyle} onClick={onClick}>
            Reset
          </button>
        </div>
      )} */}
      {/* Второй вариант записи */}
      {!!checkCount && (
        <div>
          <button style={buttonStyle} onClick={onClick}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ResetButton;
