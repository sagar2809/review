import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

 const Review = () => {
   const[index ,setIndex] = useState(0);
   const {id,name,job,image,text} =people[index]
      console.log(people);

  const checkNumber = (indexState) =>{
    if(indexState > people.length-1 ){
      return 0;
    }
    if(indexState  < 0 ){
      return people.length-1

    }
    return indexState;

  }
   const randomNumber = () => {
    let randomNumber = Math.floor(Math.random()*people.length);
    console.log(randomNumber);
    if(randomNumber === index){
    setIndex(randomNumber+1)
   }
   else{
     setIndex(randomNumber)
   }
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index-1;
      return checkNumber(newIndex)

    })
    
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index+1;
      return checkNumber(newIndex)

    })
    
  }
  
  
 
  
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src ={image} alt={name}></img>
        <span className="quote-icon"><FaQuoteRight></FaQuoteRight></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className="random-btn" onClick={randomNumber}>surprise me</button>
    </article>
  )
};

export default Review;
