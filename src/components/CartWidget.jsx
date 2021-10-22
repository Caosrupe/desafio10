import React from 'react'
import {Nav} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


export default function CartWidget() {
         
    return (
        <Nav.Link href="/actividad10/prueba/src/components/Cart.jsx">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </Nav.Link>
    )
}