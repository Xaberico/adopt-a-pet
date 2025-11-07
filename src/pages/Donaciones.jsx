import Article from '../components/Article'
import Lista from '../components/Lista'

function Donaciones() {
    return (
        <div>
            <Article
                titulo={"Donaciones"}
                contenido={"Tu apoyo es fundamental para continuar con nuestra labor. Puedes hacer una donación a través de los siguientes medios:"} 
            />
            <div className="donaciones-lista">
                <h3>Medios de Donación</h3>
                <Lista
                    classNameUl="list-group"
                    classNameLi="list-group-item"
                    lista={[
                        "Transferencia bancaria: Banco XYZ, Cuenta: 123456789",
                        "PayPal: paypal@adopta.com",
                        "Bitcoin: 1A2B3C4D5E6F7G8H9I0J",
                        "Mercado Pago: https://www.mercadopago.com/xxxx",
                        "Donaciones en especie: alimentos, juguetes y ropa para mascotas son bienvenidos."
                    ]} 
                />
            </div>
        </div>
    );
}

export default Donaciones;