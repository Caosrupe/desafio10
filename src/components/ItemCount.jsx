import {Button,ButtonGroup,Table} from 'react-bootstrap';
import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import {useParams} from "react-router-dom";



const ItemCount=({min,max,count,stock,product_name,productid})=>{
const {itemid}=useParams();
const {additem}=useContext(CartContext);


    return (
<>
        <p></p>
        <p></p>
        <ButtonGroup aria-label="Basic example">
      <Table striped bordered hover className="tabla" size="sm" align="center" >
        <thead className="thead">
          <tr>
            <th></th>
              <th>{product_name}</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ width: '18rem' }}>
          <tr>
            <td>
              <Button className="botoncito"  onClick={min}>-</Button>
            </td>
            <td align="center">{count}</td>
            <td>
              <Button className="botoncito" onClick={max}>+</Button>
            </td>
          </tr>
          <tr>
            <td>  </td>
            <td align="center">
              <Button className="botoncito" disabled={count===0} id="but2" onClick={()=>additem({itemid},{count})}>Agregar a carrito</Button>
            </td>
            <td> </td>
          </tr>
        </tbody>
      </Table>
    </ButtonGroup>
  </>
  );
};

export default ItemCount;

