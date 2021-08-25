import React from "react";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import netli from '../src/images/netfli.jpg'

const Movies = {
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



function App()
{
  return (
    <>
    <div className="Navbar">
     <h2> GoodMovies.</h2>
       
    </div>
     
    <div className="backgroundimg">
    <img src={netli} height="720" width="1279"  alt="img"/>
    </div>
    
    </>
  );
}

export default App