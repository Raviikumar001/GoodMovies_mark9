import React from "react";
import "./App.css";
import { useState } from "react";
import netli from '../src/images/netfli.jpg'
const bookDB = {
  Marvel: [
    { name: "Doctor Strange", rating: "4/5" },
    { name: "Iron Man", rating: "3.5/5" },
    {
      name: "Black Panther", rating: "3.8/5"
    }
  ],

  HollyWoodMovie: [
    {
      name: "Slumdog millionare",
      rating: "4.8/5"
    },
    {
      name: "Harry Potter and the Deathly Hallow's",
      rating: "4.5/5"
    },
    {
      name:"The Maze Runner",
      rating: "3.4/5"
    }
  ],
  Fantasy: [
    {
      name: "The hobbit: An unexpected journey.",
      rating: "3.9/5"
    },
    {
      name: "Batman: The Dark Knight.",
      rating: "4/5"
    },
    {
      name:"Dolittle",
      ratin: "3.3/5"
    }
  ]
};



export default function App() {
  const [selectedGenre, setGenre] = useState("Marvel");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    
    
    <div className="App">
    <div className="Navbar">
     <h2> GoodMovies Recommeder.</h2>
       
    </div>
      <div className="main">
      <h1> 🎬 goodMovies </h1>
      <br/>
      <p style={{ fontSize: "large" }}>
        {" "}
        Checkout these Movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#3DB2FF",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <footer class="main-footer">
      <nav>
          <ul class="main-footer__links">
              <li class="main-footer__link">
                  <a href="https://www.linkedin.com/in/ravi-kumar-5ab056143/">Linkedin</a>
              </li>
              <li class="main-footer__link">
                  <a href="https://github.com/Raviikumar001">Github</a>
              </li>
              <li class="main-footer__link">
                <a href="#">Medium</a>
            </li>
          </ul>
      </nav>
  </footer>
    </div>
  
   
  );
}
