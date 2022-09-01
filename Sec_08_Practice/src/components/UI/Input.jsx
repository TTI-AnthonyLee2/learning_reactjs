const Input = ({type, title, id}) => {
    return (
        <>
            <label htmlFor={id}>{title}</label>
            <br />
            <input type={type} id={id} />
            <br />
        </>
    );
}

export default Input;