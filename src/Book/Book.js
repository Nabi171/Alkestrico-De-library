import React, { useState, useEffect } from 'react';
import Showbook from './Showbook/Showbook';
import Cart from '../Cart/Cart';

const Book = () => {
    const [books, setBooks] = useState([]);


    const [cart, setCart] = useState([]);




    useEffect(() => {
        fetch('books.json').then(res => res.json()).then(data => setBooks(data));
    }, []);

    const addToCart = (book) => {

        if (cart.length < 5) {
            const newCart = [...cart, book];
            setCart(newCart)
        }
        else {
            console.log('you have selected 4 items')
        }
    }


    return (
        <div className='row'>
            <div className='col-6 col-sm-6'>

                {
                    books.map(book => <Showbook book={book}
                        addToCart={addToCart}
                    ></Showbook>)
                }

            </div>
            <div className='col-6 col-sm-6'>
                {/* <h1>Hlw</h1> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Book;