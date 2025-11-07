import Boton from "./Boton";

function Pet_Card({ img_path, nombre, edad, raza }) {
    return (
        <div className="pet_card">
            <img src={`${import.meta.env.BASE_URL}${img_path}`} alt={nombre} />
            <h2>{nombre}</h2>
            <p>Edad: {edad}</p>
            <p>Raza: {raza}</p>
            <Boton 
                texto="Adoptar"
                className="btn btn-primary"
                onClick={() => alert("¡Gracias por elegir adoptar a " + nombre + "! Nos pondremos en contacto contigo pronto.")}
            />
        </div>
    );
}

export default Pet_Card;