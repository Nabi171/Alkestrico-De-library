import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Cart = (props) => {
    const { cart } = props || {};
    console.log(cart)

    // for (const book of cart) {
    //      title = book.title
    // }

    const closeAlldata = () => {
        const showElement = document.getElementById('showData');
        showElement.style.display = 'none';
    }
    const randomData = () => {
        console.log('ckfasdj')
    }

    return (
        <div className='position-fixed mx-auto'>

            <ul className='text-white'>

            </ul>

            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>
                        <h3 className='mb-2'>Added BookList</h3>
                        <div id='showData' className='row'>
                            <div className=' col '>
                                {


                                    cart.map(partbook => <img className='w-25 mb-3 d-flex flex-colum' src={partbook.imageLink} alt="" />
                                    )


                                }
                            </div>
                            <div className='col'>
                                {

                                    cart.map(partbook => <li className='mb-1'>{partbook.title}</li>)


                                }
                            </div>
                        </div>
                    </Card.Title>
                    <button onClick={randomData} className='btn btn-dark my-2'>Chosse Randomly</button> <br />

                    {/* <div className='col'>
                        {



                            Math.floor(Math.random() * cart.length).map(partbook => <li className='mb-1'>{partbook.title}</li>)


                        }
                    </div> */}

                    <button onClick={closeAlldata} className='btn btn-dark'>Close All</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;