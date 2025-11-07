function Article({ titulo, contenido }) {
  return (
    <article>
      <h2>{titulo}</h2>
      {/* Si contenido es un array, renderiza varios <p>. Si es texto, uno solo. Si es un elemento React, lo renderiza directamente */}
      {Array.isArray(contenido)
        ? contenido.map((parrafo, index) => 
            typeof parrafo === 'string' ? <p key={index}>{parrafo}</p> : <div key={index}>{parrafo}</div>
          )
        : typeof contenido === 'string' 
          ? <p>{contenido}</p> 
          : <div>{contenido}</div>}
    </article>
  );
}

export default Article;