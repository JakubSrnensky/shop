import { Swiper, SwiperSlide } from "swiper/react";
import Navigation from '../../components/Navigation/Navigation'
import Title from '../../components/Title/Title'
import Card from '../../components/Card/Card'
import Container from '../../components/Container/Container'
import Fieldset from  '../../components/Fieldset/Fieldset'
import Filter from "../../components/Filter/Filter";
import 'swiper/css';
import '../../components/Swiper.scss'
import './Homepage.scss'

import { useState } from "react";

const products = [
    {   
        id: "1",
        name: "cappucino",
        price: 300,
    },
    {
        id: "2",
        name: "cappucino 01",
        price: 300,
    },
    {
        id: "3",
        name: "cappucino 02",
        price: 300,
    },
    {
        id: "4",
        name: "cappucino 03",
        price: 300,
    },
    {
        id: "5",
        name: "cappucino 04",
        price: 300,
    },
]

export default function Homepage() {

    const [ currentPrage, setCurrentPage ] = useState<any>(1)
    const [ postsPerPage, setPostsPerPage ] = useState<any>(2)


    const like = (event: any) => {
        console.log("like", event)
    }

    const findProduct = (event: any) => {
        products.filter((element: any) => {
            return element.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
    }

    return (
        <div className="homepage">
            <Container>
                <Title as="h1">Good morning, David</Title>
                
                <div className="homepage-containerInput">
                    <Fieldset 
                        as="input" 
                        type="text" 
                        placeholder="Hledat kávu ..."
                        onChange={findProduct}
                    />
                    <Filter />
                </div>

                <Title as="h2">Oblíbené</Title>

                <Swiper
                    slidesPerView={1.7}
                    spaceBetween={20}
                    pagination={{
                    clickable: true,
                    }}
                    className="mySwiper"
                >

                {products?.map((product: any, index: number) =>
                    <SwiperSlide key={index}>
                        <Card 
                            card="vertical" 
                            {...product}
                            onClick={() => like(product)}
                        />
                    </SwiperSlide>
                )}

                </Swiper>

                <Title as="h2">Filtrované produkty</Title>

                {products?.map((product: any, index: number) => 
                    <Card 
                        key={index} 
                        card="horizontal" 
                        {...product}
                        onClick={() => like(product)}
                    />
                )}
                
            </Container>
            <Navigation />
        </div>
    )
}