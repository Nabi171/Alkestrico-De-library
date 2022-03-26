import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faC } from '@fortawesome/free-solid-svg-icons'

const Showbook = (props) => {
    // console.log(props);
    const { author, country, imageLink, language, link, pages, title, year, Price } = props.book;
    return (
        <div>
            <Row xs={1} md={1} className="g-4 mb-2 ms-auto mt-2">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Title>{title}</Card.Title>
                            <Card.Body>
                                <div className='row align-items-center'>
                                    <div className='col'> <Card.Img variant="top" className='w-100 rounded' src={imageLink} /></div>
                                    <div className='col'>
                                        <p>Author:{author}</p>
                                        <p>Pages:{pages}</p>
                                        <p>language:{language}</p>
                                        <p>Country:{country}</p>
                                        <p>Price:${Price}</p>

                                    </div>
                                </div>
                            </Card.Body>
                            <button onClick={() => props.addToCart(props.book)} className='btn btn-dark'>
                                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                                Add To Cart</button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Showbook;