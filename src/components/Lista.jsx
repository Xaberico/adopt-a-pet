function Lista({ lista, renderItem, classNameUl, classNameLi }) {
    return (
        <ul className={classNameUl}>
            {lista.map((item, index) => (
                <li key={index} className={classNameLi}>
                    {renderItem ? renderItem(item, index) : item}
                </li>
            ))}
        </ul>
    );
}

export default Lista;
