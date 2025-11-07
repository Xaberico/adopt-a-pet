function Article({ titulo, contenido }) {
  return (
    <article>
      <h2>{titulo}</h2>
      {/* Si contenido es un array, renderiza varios <p>. Si es texto, uno solo */}
      {Array.isArray(contenido)
        ? contenido.map((parrafo, index) => <p key={index}>{parrafo}</p>)
        : <p>{contenido}</p>}
    </article>
  );
}

export default Article;
