import ReactStars from 'react-stars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { sizes } from "../../library/constans";
import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import Amount from '../../components/Amount/Amount';
import Navigation from '../../components/Navigation/Navigation';
import './Detail.scss'


const product = {   
        id: "1",
        name: "Cappucino",
        sizes: [
            {
                size: "s",
                price: 150
            },
            {
                size: "m",
                price: 250
            },
            {
                size: "l",
                price: 350
            }
        ]
    }

export default function Detail() {

    const [ sizeSelected, setSizeSelected ] = useState<any>()
    const [ amount, setAmount ] = useState<any>()

    const [ test, setTest ] = useState<any>()

    const handlerClickSize = (event: any) => {
        setSizeSelected(event)
    }

    const handlerAmount = (amount: any) => {
        setAmount(amount)
    }

    useEffect(() => {
        
        product?.sizes?.filter((element: any) => {
            if(element.size === sizeSelected) {
                setTest(element.price * amount)
            } else if(amount === undefined && element.size !== sizeSelected){
                setTest(0)
            }
        })

    },[sizeSelected, amount])

    const handlerClickBuy = () => {
        
        if ( sizeSelected === undefined && amount === 0 ) {

            toast.error("Prosím vyberte velikost a množství", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

        } else if ( sizeSelected === undefined && amount !== 0 ) {

            toast.error("Prosím vyberte velikost", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

        }  else if ( sizeSelected && amount === 0 ) {
            
            toast.error("Prosím vyberte množství", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

        }
        
    }

    return (
        <div className="detail">
            <Container>
                <div className="detail-imageContainer">

                </div>
                <div className="detail-sizes">
                    {sizes.map((size: any, index: number) =>
                        <button className="detail-sizeButton" key={index} onClick={() => handlerClickSize(size)}>
                            {sizeSelected === size && 
                                <span className="detail-sizeSelected">+</span>
                            }
                            {size}
                            <span className="detail-sizeButton-title">velikost</span>  
                        </button>
                    )}
                </div>

                <div className="detail-sectionFirst">
                    <Title as="h1" className="detail-title">Cappucino</Title>
                    <div className="detail-price">
                        <span className="detail-priceDescription">celková cena</span>
                        {test} Kč
                    </div>
                </div>

                <div className="detail-sectionSecond">
                    <Amount 
                        amount={handlerAmount}
                    />
                    <Button
                        type="button" 
                        className="detail-buyButton"
                        onClick={handlerClickBuy}
                    >
                        Přidat do košíku
                    </Button>
                </div>

                <p className="detail-description">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Temporibus autem quibusdam et aut officiis debitis aut rerum 
                    necessitatibus saepe eveniet ut et voluptates repudiandae sint 
                    et molestiae non recusandae. 
                    <br /><br />
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi architecto beatae 
                    vitae dicta sunt explicabo.
                </p>

                <div className="detail-ratingsWrap">
                    <span className="detail-ratingTitle">
                        Ohodnoť produkt
                    </span>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        half={false}
                        className="detail-ratings"
                        color1={'#CCCCCC'}
                        color2={'#005633'} 
                    />
                </div>

            </Container>
            <Navigation />
            <ToastContainer 
                position="top-center"
                className="detail-toast"
            />
        </div>    
    )
}