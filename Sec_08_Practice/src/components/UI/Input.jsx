const Input = ({type, title, id}) => {
    return (
        <>
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} />
        </>
    );
}

export default Input;