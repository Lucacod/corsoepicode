import React from "react";


const About = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="display-4 mb-4">Chi Siamo</h1>
                    <p>Benvenuti nel nostro magico mondo dei libri fantasy! Presso FantasyBookStore, non vendiamo solo libri; offriamo un portale per l'avventura, la creatività e l'immaginazione.</p>
                    <p>La nostra passione è creare mondi incantati e farvi esplorare epiche storie di eroi, creature magiche e misteri insondabili. Il nostro obiettivo è rendere ogni visita al nostro sito un'esperienza indimenticabile.</p>
                </div>

                <div className="col-lg-6">
                    <img src="" alt="Chi Siamo" className="img-fluid rounded mb-4" />
                    <h2>La Nostra Visione</h2>
                    <p>Abbiamo l'obiettivo di essere il punto di riferimento per gli amanti del fantasy. Vogliamo che FantasyBookStore sia il luogo in cui trovate sempre nuove avventure e dove condividiamo l'amore per i mondi fantastici.</p>
                    <p>La qualità è la nostra priorità. Collaboriamo con autori e editori di talento per portare libri unici e straordinari al vostro servizio. Siamo impegnati a creare una comunità di appassionati di fantasy e condivideremo consigli di lettura, interviste agli autori e molto altro.</p>
                    <p>Unitevi a noi in questo straordinario viaggio attraverso la magia delle storie fantasy.</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="" alt="Impegno 1" className="img-fluid rounded-circle mb-2" />
                        <h4>Qualità Superiore</h4>
                        <p>Portiamo solo libri fantasy di alta qualità selezionati con cura.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="" alt="Impegno 2" className="img-fluid rounded-circle mb-2" />
                        <h4>Comunità Vibrante</h4>
                        <p>Creiamo una comunità di appassionati di fantasy per condividere la vostra passione.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center">
                        <img src="" alt="Impegno 3" className="img-fluid rounded-circle mb-2" />
                        <h4>Educazione e Divertimento</h4>
                        <p>Offriamo contenuti educativi e divertenti sul mondo fantasy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;