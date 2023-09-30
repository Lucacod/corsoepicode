import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const BookDetails = () => {
    const [BookDetails, setBookDetails] = useState(null)

    const { bookId } = useParams()
    console.log(BookDetails);


    const getBookByid = async () => {
        try {
            const response = await fetch(`http://epibooks.onrender.com/${bookId}`)
            const data = await response.json()
            setBookDetails(data)
        } catch (error) {
            console.error('si è verificato un errore durante la richiesta');
        }
    }


    useEffect(() => {
        getBookByid()
    }, [bookId]);

    return (
        <div>
            Stai visitando la pagina del libro con id {bookId}
            {BookDetails && <div>
                <img width={200} src={BookDetails[0].img} alt="" />
                <div>{BookDetails[0].asin}</div>
                <div>{BookDetails[0].category}</div>
                <div>{BookDetails[0].title}</div>
                <div>{BookDetails[0].price}</div>
                <button className="mt-4 btn btn-warning">Add To Cart</button>

            </div>}


        </div>
    );
};

export default BookDetails;