import Lista from "./Lista";

function Aside({ titulo, subtitulo, elementos }) {
    return (
        <aside>
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
            <Lista
                lista={elementos}
                classNameUl="list-group"
                classNameLi="list-group-item"
                renderItem={(item) => item}
            />

        </aside>
    );
}

export default Aside;