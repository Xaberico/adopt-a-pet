import { Link } from "react-router-dom";
import Boton from "./Boton";
import Lista from "./Lista";

function Navbar() {
    const itemsNav = [
        { texto: "Inicio", ruta: "/" },
        { texto: "Adoptá", ruta: "/adoptar" },
        { texto: "Donaciones", ruta: "/donaciones" },
        { texto: "Contacto", ruta: "/contacto" },
    ];

    const onSearch = (e) => {
        e.preventDefault();
        console.log("Buscar clickeado!");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        width="50"
                        alt="logo"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <Lista
                        lista={itemsNav}
                        classNameUl="navbar-nav me-auto"
                        classNameLi="nav-item"
                        renderItem={(item) => (
                            <Link className="nav-link" to={item.ruta}>
                                {item.texto}
                            </Link>
                        )}
                    />

                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar..."
                            aria-label="Buscar"
                        />
                        <Boton
                            texto="Buscar"
                            className="btn btn-outline-success"
                            tipo="submit"
                            onClick={onSearch}
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;