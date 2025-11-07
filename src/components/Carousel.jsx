function CarouselItem({ img_path, nombre, active }) {
    const src = `${import.meta.env.BASE_URL}${String(img_path).replace(/^\//, '')}`;
    return (
        <div className={"carousel-item" + (active ? " active" : "")}>
            <div className="d-flex justify-content-center">
                <img 
                    src={src} 
                    className="img-fluid" 
                    alt={nombre}
                    style={{ 
                        width: '100%', 
                        maxWidth: '600px', 
                        height: '300px', 
                        objectFit: 'cover' 
                    }}
                />
            </div>
        </div>
    );
}

function Carousel({ items }) {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
                {items.map((item, index) => (
                    <CarouselItem
                        key={index}
                        img_path={item.img_path}
                        nombre={item.nombre}
                        active={index === 0}
                    />
                ))}
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
                aria-label="Anterior"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
                aria-label="Siguiente"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default Carousel;