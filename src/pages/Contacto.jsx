import Article from "../components/Article";
import Lista from "../components/Lista";

function Contacto() {
    return (
        <div>
            <Article
                titulo={"¡Estamos aquí para ayudarte!"}
                contenido={
                    "Si tienes alguna pregunta, inquietud o simplemente quieres saber más sobre cómo puedes ayudar a los animales necesitados, no dudes en contactarnos. Estamos comprometidos a brindarte toda la información y el apoyo que necesites para que juntos podamos hacer una diferencia en la vida de estos maravillosos seres."
                }
            />
            <div className="contacto-lista">
                <h3>Contacto</h3>
                <Lista
                    classNameUl="list-group"
                    classNameLi="list-group-item"
                    lista={[
                        "Teléfono: +54 9 11 1234 5678",
                        "Email: contacto@adopta.com",
                        "Dirección: Calle Falsa 123, Santa Fe, Argentina"
                    ]} 
                />
            </div>
        </div>
    );
}

export default Contacto;