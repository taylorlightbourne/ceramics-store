import './AvailableProducts.css';
import ProductItem from './ProductItem/ProductItem';
import Card from '../UI/Card';

const CERAMIC_PRODUCTS = [
    {
        id: '01',
        name: "Kaleidoscope on Potter's Mug",
        description: "12 Ounces",
        price: 39.99,
    },
    {
        id: '02',
        name: "Moo Candle",
        description: "Musk Scented Soy Candle",
        price: 58.99,
    },
    {
        id: '03',
        name: "Poppy Field on Wide Mouth Mug",
        description: "20 Ounces",
        price: 39.99,
    },
    {
        id: '04',
        name: "Cheetah on Jungle Jug",
        description: "24 Ounces",
        price: 39.99,
    },
    {
        id: '05',
        name: "Oink Candle",
        description: "Eucalyptus Mint Scent",
        price: 58.99,
    },
    {
        id: '06',
        name: "Seawind on Wide Mouth Mug",
        description: "20 Ounces",
        price: 37.50,
    },
    {
        id: '07',
        name: "Fruity Freckles on Jungle Jug",
        description: "24 Ounces",
        price: 38.65,
    },
    {
        id: '08',
        name: "Lemon Lime on Potter's Mug",
        description: "12 Ounces",
        price: 37.50,
    },
    {
        id: '09',
        name: "Tiger Lily on Potter's Mug",
        description: "12 Ounces",
        price: 39.99,
    },
    {
        id: '10',
        name: "Mocha Marble on Potter's Mug",
        description: "12 Ounces",
        price: 38.75,
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
    />
    ));

    return <section className="products">
        <Card>
        <ul>{ceramicsList}</ul>
        </Card>
    </section>
};

export default AvailableProducts;