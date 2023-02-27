import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import './Navigation.scss'


export default function Navigation(props: any) {

    if(props.cartNavigation){
        return (
            <div className={`navigation ${props.cartNavigation ? 'navigation-cart' : ''}`}>
                <div className="navigation-price">
                    <span>celková cena</span>
                    1500 Kč
                </div>
                <NavLink to="/" className="navigation-button">
                    <Button>Pokračovat</Button>
                </NavLink>
            </div>
        )
    }

 
    return (
        <div className="navigation">
                <React.Fragment>
                    <NavLink to="/" className="navigation-item">
                        <FontAwesomeIcon icon={faHouse} />
                        <span className="navigation-title">
                            Domů
                        </span>
                    </NavLink>
                    <NavLink to="/xxxx" className="navigation-item">
                        <span className="navigation-title">
                            xxx
                        </span>
                    </NavLink>
                    <NavLink to="/cart" className="navigation-item">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="navigation-title">
                            Košík
                        </span>
                    </NavLink>
                    <NavLink to="/profile" className="navigation-item">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="navigation-title">
                            Profil
                        </span>
                    </NavLink>
                </React.Fragment>
        </div> 
    )
}