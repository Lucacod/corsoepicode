import React from "react";



const Contact = () => {
    return (
        
        <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="mb-4">Contatti</h1>
          <p>Se hai domande o hai bisogno di assistenza, puoi contattarci in diversi modi:</p>

          <div className="mb-4">
            <h2>Indirizzo Email</h2>
            <p>Invia un'email a: <a href="mailto:info@fantasybookstore.com">info@fantasybookstore.com</a></p>
          </div>

          <div className="mb-4">
            <h2>Telefono</h2>
            <p>Chiamaci al: +123 456 7890</p>
          </div>

          <div className="mb-4">
            <h2>Orari di Ufficio</h2>
            <p>I nostri uffici sono aperti dal lunedì al venerdì dalle 9:00 alle 18:00.</p>
          </div>

          <div className="mb-4">
            <h2>Indirizzo</h2>
            <p>Passo del Ringraziamento, 42<br />Mondo Fantastico<br />Codice Postale: 12345</p>
          </div>
        </div>

        <div className="col-lg-6">
          <h2>Form di Contatto</h2>
          <p>Compila il seguente modulo per inviarci un messaggio:</p>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Indirizzo Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="messaggio" className="form-label">Messaggio</label>
              <textarea className="form-control" id="messaggio" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Invia</button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default Contact;