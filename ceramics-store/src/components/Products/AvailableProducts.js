import './AvailableProducts.css';
import ProductItem from './ProductItem/ProductItem';
import Card from '../UI/Card';
import image01 from '../../assets/kaleidoscope.jpg';
import image02 from '../../assets/moo-candle.jpg';
import image03 from '../../assets/poppy-field.jpg';
import image04 from '../../assets/cheetah-jungle-jug.jpg';
import image05 from '../../assets/oink-candle.jpg';
import image06 from '../../assets/seawind.jpg';
import image07 from '../../assets/fruity-freckles-jungle-jug.jpg';
import image08 from '../../assets/lemon-lime-potters-mug.jpg';
import image09 from '../../assets/tiger-lily.jpg';
import image10 from '../../assets/mocha-marble.jpg';


const CERAMIC_PRODUCTS = [
    {
        id: '01',
        name: "Kaleidoscope on Potter's Mug",
        description: "12 Ounces",
        price: 39.99,
        image: <img src={image01} alt="Kaleidoscope on Potter's Mug" />
        
    },
    {
        id: '02',
        name: "Moo Candle",
        description: "Musk Scented Soy Candle",
        price: 58.99,
        image: <img src={image02} alt="Moo Candle" />
    },
    {
        id: '03',
        name: "Poppy Field on Wide Mouth Mug",
        description: "20 Ounces",
        price: 39.99,
        image: <img src={image03} alt="Poppy Field on Wide Mouth Mug" />
    },
    {
        id: '04',
        name: "Cheetah on Jungle Jug",
        description: "24 Ounces",
        price: 39.99,
        image: <img src={image04} alt="Cheetah on Jungle Jug" />
    },
    {
        id: '05',
        name: "Oink Candle",
        description: "Eucalyptus Mint Scent",
        price: 58.99,
        image: <img src={image05} alt="Oink Candle" />
    },
    {
        id: '06',
        name: "Seawind on Wide Mouth Mug",
        description: "20 Ounces",
        price: 37.50,
        image: <img src={image06} alt="Seawind on Wide Mouth Mug" />
    },
    {
        id: '07',
        name: "Fruity Freckles on Jungle Jug",
        description: "24 Ounces",
        price: 38.65,
        image: <img src={image07} alt="Fruity Freckles on Jungle Jug" />
    },
    {
        id: '08',
        name: "Lemon Lime on Potter's Mug",
        description: "12 Ounces",
        price: 37.50,
        image: <img src={image08} alt="Lemon Lime on Potter's Mug" />
    },
    {
        id: '09',
        name: "Tiger Lily on Potter's Mug",
        description: "12 Ounces",
        price: 39.99,
        image: <img src={image09} alt="Tiger Lily on Potter's Mug" />
    },
    {
        id: '10',
        name: "Mocha Marble on Potter's Mug",
        description: "12 Ounces",
        price: 38.75,
        image: <img src={image10} alt="Mocha Marble on Potter's Mug" />
    },
    
]



const AvailableProducts = () => {
    const ceramicsList = CERAMIC_PRODUCTS.map((item) => (
    <ProductItem 
    key={item.id} 
    id={item.id} 
    name={item.name} 
    description={item.description} 
    price={item.price} 
    image={item.image}
    />
    ));

    return <section className="products">
        <Card>
        <ul>{ceramicsList}</ul>
        </Card>
    </section>
};

export default AvailableProducts;