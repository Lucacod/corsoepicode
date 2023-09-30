import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import BookCard from '../card/BookCard'
import { FormGroup, } from 'react-bootstrap'
import fantasy from "../Books/fantasy.json"
import { nanoid } from 'nanoid'




const LatestRelease = () => {

    const [formValue, setFormValue] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(fantasy);
    console.log(formValue);

    const getValueFromForm = (value) => {
        if (value === "") {
            setFilteredBooks(fantasy)
        }

        setFormValue(value)
    }

    const submitFiltered = (e) => {
        e.preventDefault()   //previene il refresh della pagina

        const booksFiltered = filteredBooks
            .filter(book => book.title
                .toLowerCase()
                .includes(formValue.toLowerCase()))

        setFilteredBooks(booksFiltered)
        console.log(booksFiltered);
    }





    return (
        <Container>
            <Row>
                <Form onSubmit={submitFiltered}>
                    <Row className="mb-3">
                        <FormGroup className="d-flex mt-4" as={Col} controlId="validationCustom01">
                            <Form.Control
                                name="formValue"
                                type="text"
                                onChange={(e) => getValueFromForm(e.target.value)}
                            />
                            <Button type="Submit">Search</Button>
                        </FormGroup>
                    </Row>
                </Form>


                <Col className='d-flex flex-wrap gap-4'>
                    {filteredBooks.map((book) => (
                        <BookCard
                            key={nanoid()}
                            img={book.img}
                            title={book.title}
                            category={book.category}
                            btn='Details'
                            asin={book.asin}
                        />
                    ))}
                </Col>

            </Row>
        </Container>
    )
}





export default LatestRelease