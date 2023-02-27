import Navigation from '../../components/Navigation/Navigation'
import Container from '../../components/Container/Container'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card'
import Steps from '../../components/Steps/Steps'
import './Cart.scss'

const products = [
    {   
        id: "1",
        name: "Cappucino",
        price: 300,
    },
    {
        id: "2",
        name: "Cappucino 01",
        price: 300,
    },
    {
        id: "3",
        name: "Cappucino 02",
        price: 300,
    },
    {
        id: "4",
        name: "Cappucino 03",
        price: 300,
    },
    {
        id: "5",
        name: "Cappucino 04",
        price: 300,
    },
]

export default function Cart() {
    return (
        <div className="cart">
            <Container>
                <Title as="h1" alignCenter>Košík</Title>
                
                <Steps />

                <div className="cart-grid">
                    {products?.map((product: any, index: number) => 
                        <Card 
                            key={index} 
                            card="vertical" 
                            {...product}
                            cart
                        />
                    )}
                </div>

            </Container>
            <Navigation cartNavigation />            
        </div>
    )
}