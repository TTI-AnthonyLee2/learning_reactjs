const FlatButton = ({ children , onClick }) => {
  return (
    <>
      <div className="centered">
        <button onClick={onClick} className="btn--flat">{children}</button>
      </div>
    </>
  );
};

export default FlatButton;