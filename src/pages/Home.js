import Carousel from '../components/Carousel';
import Article from '../components/Article';
import Aside from '../components/Aside';
import Boton from '../components/Boton';

function Home() {
    return (
        <div className="main">

            <div id="divcarousel">
                <Carousel items={[
                    { img_path: 'perro_1.jpg', nombre: 'perro' },
                    { img_path: 'gato_1.jpg', nombre: 'gato' },
                    { img_path: 'loro_1.jpg', nombre: 'loro' },
                ]} />
            </div>
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
            <div id="bloque2">
                <h2>¿No podés adoptar?</h2>
                <Boton        
                    texto="Donar alimentos"
                    className="btn btn-primary"
                    tipo="button"
                    onClick={() => {
                        window.location.href = "/donaciones";
                    }}
                />
                <Boton        
                    texto="Ser hogar de transito"
                    className="btn btn-primary"
                    tipo="button"
                />
                <Boton        
                    texto="Apoyar Campañas"
                    className="btn btn-primary"
                    tipo="button"
                    onClick={() => {
                        window.location.href = "/donaciones";
                    }}
                />
            </div>
        </div >
    );
}

export default Home;
