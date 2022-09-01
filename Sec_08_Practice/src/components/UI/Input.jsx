const Input = ({type, title, id, value, onChanged}) => {
    return (
        <>
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} value={value} onChange={onChanged} autoComplete="off" />
        </>
    );
}

export default Input;