import React, { useState, useEffect } from 'react';
import Showbook from './Showbook/Showbook';
import Cart from '../Cart/Cart';
import '../Book/Book.css'



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
            <div className='col-9 '>

                <div className='mt-4 ms-4 p-4' >
                    <div className='book-container container'>
                        {
                            books.map(book => <Showbook book={book}
                                addToCart={addToCart}
                            ></Showbook>)
                        }
                    </div>
                </div>

            </div>
            <div className='col-3'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Book;