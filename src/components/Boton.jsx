function Boton({
    texto = "Botón",
    tipo = "button",
    onClick,
    className = "btn btn-primary",
    disabled = false,
}) {
    return (
        <button
            type={tipo}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {texto} 
        </button>
    );
}

export default Boton;
