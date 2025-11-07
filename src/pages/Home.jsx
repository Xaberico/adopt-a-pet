import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Article from '../components/Article';
import Aside from '../components/Aside';
import Boton from '../components/Boton';

function Home() {
    const navigate = useNavigate();
    return (

        <div>
            <picture id="banner_home">
                <img src={`${import.meta.env.BASE_URL}home_banner.jpg`} alt="Banner de adopción de mascotas" />
            </picture>
            <div id="bloque1">
                <Article
                    titulo="¡Tu nuevo mejor amigo está a un click!"
                    contenido="Adoptar cambia vidas. Tanto la tuya como la de un animal necesitado. Explora nuestro sitio para encontrar a tu compañero perfecto y descubre cómo puedes hacer la diferencia hoy mismo."
                />
                <Aside
                    id="noticias"
                    titulo="Noticias"
                    subtitulo="¡Adoptar es un acto de amor! Conoce nuestras historias de éxito!"
                    elementos={[
                        "La adopción de un perro callejero",
                        "Un gato que encontró su hogar",
                        "La transformación de un loro rescatado",
                        "Un conejito que trajo alegría a una familia"
                    ]}
                />
            </div>
            <Carousel items={[
                { img_path: 'perro_1.jpg', nombre: 'perro' },
                { img_path: 'gato_1.jpg', nombre: 'gato' },
                { img_path: 'loro_1.jpg', nombre: 'loro' },
            ]} />
            <div id="bloque2">
                <h2>¿No podés adoptar?</h2>
                <Boton
                    texto="Donar alimentos"
                    className="btn btn-primary"
                    onClick={() => {
                        navigate('/donaciones');
                    }}
                />
                <Boton
                    texto="Ser hogar de transito"
                    className="btn btn-primary"
                    onClick={() => alert("Gracias por tu interés en ser hogar de tránsito. Pronto nos pondremos en contacto contigo.")}
                />
                <Boton
                    texto="Apoyar Campañas"
                    className="btn btn-primary"
                    onClick={() => {
                        navigate('/donaciones');
                    }}
                />
            </div>
        </div >
    );
}

export default Home;