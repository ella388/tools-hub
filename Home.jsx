import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";



const Home = () => {

    const[quotes, setQuotes] = useState("");

    const handleClick = () => {

        axios.get("https://api.quotable.io/random")
        .then(response => {
            setQuotes(response.data)
        }).catch(error => {
            console.log(error);
        })

    }
    return ( 
        <section>
           <Navbar />
            <section className="div-wrapper">
                <h1 className="header-one">Welcome to the QuoteHub Records Management</h1>
                <p className="para-one">This tool helps you select a quote and verify the author and original quote date</p>
                <p className="para-two">Click <strong>on get quote</strong> to get a new quote each time and verify the author and date of quote</p>
            </section>
            <section className="btn">
                <button
                onClick={() => handleClick()} 
                className="btn-one">Get Quote</button>
                <button className="btn-two"><a href="https://en.wikiquote.org/wiki/Main_Page">Verify Quote</a></button>
            </section>
            <section className="input-field">
                <input type="text" placeholder="Search for quote" />

            </section>
            <div className="info">
                {quotes && <h1 className="info-header">{quotes.author}</h1>}
                {quotes && <p>{quotes.content}</p>}
                {quotes && <h3>{quotes.dateAdded}</h3>}
            </div>
        </section>
     );
}
 
export default Home;