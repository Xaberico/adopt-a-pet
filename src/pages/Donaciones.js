import Article from '../components/Article'

function Donaciones() {
    return (
        <div className='main'>
            <Article titulo={"Donaciones"} contenido={"Tu apoyo es fundamental para continuar con nuestra labor. Puedes hacer una donación a través de los siguientes medios:"} />
            <ul>
                <li>Transferencia bancaria: Banco XYZ, Cuenta: 123456789</li>
                <li>PayPal: paypal@adopta.com</li>
                <li>Bitcoin: 1A2B3C4D5E6F7G8H9I0J</li>
                <li>Mercado Pago: https://www.mercadopago.com/donaciones/adopta</li>
                <li>Donaciones en especie: alimentos, juguetes y ropa para mascotas son bienvenidos.</li>
            </ul>
        </div>
    );
}

export default Donaciones;