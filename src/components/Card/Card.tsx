import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
import Amount from '../Amount/Amount'
import './Card.scss'

type props = {
    id?: any
    image?: string
    card: 'vertical' | 'horizontal'
    name?: string
    price?: number
    onClick: any
    cart: any
}


export default function Card({ id, image, name, price, card, onClick, cart }: props) {

    const test = () => {

    }

    const handlerClickDelete = () => {
        console.log("delete")
    }

    return (
        <div className={`card card-${card}` }>
            <Link to={id} className={`card-item card-${card}Item` }>
                <div className={`card-imageContainer card-${card}ImageContainer` }>
                    {image}
                </div>
                <div className={`card-textContainer card-${card}TextContainer` }>
                    <Title as="h3" className="card-title">{name}</Title>
                    <p className="card-price">
                        {price} Kč 
                        {cart && 
                            <span className="card-size">size 
                                <strong>S</strong>
                            </span>
                        }
                    </p>
                </div>
            </Link>

            {cart ?
                <React.Fragment>
                    <Amount 
                        amount={test}
                        className="card-amount"
                    />
                    <div className="card-delete" onClick={handlerClickDelete}> 
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </React.Fragment>
            :
                <div className="card-rightSide">
                    { card === 'horizontal' &&
                        <div className="review">
                            review
                        </div>
                    }
                    <button className={`card-likeButton card-${card}LikeButton`} onClick={onClick}>
                        like
                    </button>
                </div>
            }      

        </div>
    )
}