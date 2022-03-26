import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faC } from '@fortawesome/free-solid-svg-icons'
import '../Showbook/Showbook.css'
const Showbook = (props) => {
    // console.log(props);
    const { author, country, imageLink, language, link, pages, title, year, Price } = props.book;
    return (
        <div >

            <div >

                <Row xs={1} md={1} className="g-1">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Title><span style={{
                                    color: "#df7967",
                                    marginRight: '5px',
                                    textAlign: 'center'

                                }}>{title}</span></Card.Title>
                                <Card.Body>
                                    <div className='row align-items-center'>
                                        <div className='col'> <Card.Img variant="top" className='img-container rounded' src={imageLink} /></div>
                                        <div className='col'>
                                            <p >Author:{author.slice(0, 5)}</p>
                                            <p>Pages:{pages}</p>
                                            <p>language:{language}</p>
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


        </div>
    );
};

export default Showbook;