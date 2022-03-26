import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const RandomData = (cart) => {
    const [random, setRandom] = useState([]);
    const rand = cart[(Math.random() * cart.length) | 0];
    console.log(rand);
}

const Cart = (props) => {
    const { cart } = props || {};
    console.log(cart)
    const closeAlldata = () => {
        const showElement = document.getElementById('showData');
        showElement.style.display = 'none';
    }
    return (
        <div className='position-fixed mx-auto'>

            <ul className='text-white'>

            </ul>

            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>
                        <h3 className='mb-2'> <span style={{ color: "#e7a69a" }}>  Added BookList</span></h3>
                        <div id='showData' className='row'>
                            <div className=' col '>
                                {
                                    cart.map(partbook => <img className='w-25 mb-3 d-flex flex-colum' src={partbook.imageLink} alt="" />
                                    )
                                }
                            </div>
                            <div id='randomUser' className='col'>
                                {
                                    cart.map(partbook => <li className='mb-1'>{partbook.title}</li>)

                                }
                            </div>
                        </div>
                    </Card.Title>
                    <button onClick={RandomData} className='btn btn-dark my-2'>Chosse Randomly</button> <br />

                    <button onClick={closeAlldata} className='btn btn-dark'>Close All</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;