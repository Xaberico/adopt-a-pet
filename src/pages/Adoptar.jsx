import Pet_Card from '../components/PetCard';
import Article from '../components/Article';

function Adoptar() {
  return (
    <div>
      <Article
        titulo="¡Adoptá un amigo!"
        contenido={[
          "En nuestra página de adopción, encontrarás una variedad de mascotas adorables que buscan un hogar lleno de amor. Cada una de ellas tiene su propia historia y personalidad única. Al adoptar, no solo le das una segunda oportunidad a un animal necesitado, sino que también enriqueces tu vida con la compañía incondicional de un nuevo amigo. Explora las opciones disponibles, conoce a nuestros peludos y encuentra al compañero perfecto para ti. ¡Tu próximo mejor amigo te está esperando!",
          "Recuerda que adoptar es un acto de amor y responsabilidad. Asegúrate de estar preparado para brindar el cuidado y la atención que tu nueva mascota merece. Juntos, pueden crear recuerdos inolvidables y una vida llena de felicidad."]}
      />
      <div className="pet_list">
        <Pet_Card img_path="perro_1.jpg" nombre="Max" edad="2 años" raza="Labrador Retriever" />
        <Pet_Card img_path="gato_1.jpg" nombre="Bella" edad="3 años" raza="Siamés" />
        <Pet_Card img_path="loro_1.jpg" nombre="Polly" edad="1 año" raza="Loro" />
      </div>
    </div>
  );
}

export default Adoptar;
