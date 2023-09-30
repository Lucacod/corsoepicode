import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./bookCard.css"
import { Link } from 'react-router-dom';

// ho creato una funzione al click della card, ottenendo un bordo rosso 
//passando selected a card.img
const BookCard = ({ img, title, category, asin, btn ,}) => {
    const [selected, setSelected] = useState(false);

    const toggleBorder = () => {
        setSelected((prevState) => !prevState.selected)
    }




    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img onClick={toggleBorder}
                className={`${selected ? "Border" : ''}`}
                variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text> {category}</Card.Text>
                <Button variant="warning">
                    <Link to={`/book/${asin}`}>
                        {btn}
                    </Link>
                </Button>
            </Card.Body>
        </Card>
    )
}


export default BookCard;