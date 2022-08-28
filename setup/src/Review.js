import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name,job,image,text} = people[index]


  const numbercheck = (number)=>{
    if(number > people.length-1){
      return 0
    }
    if(number < 0)
    {
     return people.length-1
    }
    return number
  }

  function randomPerson(){
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber)

    if(randomNumber === index)
    {
      randomNumber += 1
    }
    setIndex(numbercheck(randomNumber))

  }
  
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt="" className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
  <h4 className='author'>{name}</h4> 
  <p className='job'>{job}</p>
  <p className='info'>{text}</p>
  <div className="button-container">
    <button className="prev-btn" onClick={()=> setIndex((prevvalue)=>prevvalue = numbercheck(prevvalue - 1))}>
      <FaChevronLeft/>
    </button>
    <button className="next-btn" onClick={()=> setIndex((prevvalue)=> prevvalue = numbercheck(prevvalue + 1))}>
      <FaChevronRight/>
    </button>
    
  </div>
  <button className="random-btn" onClick={randomPerson}>
      Suprise
    </button>
  </article>
};

export default Review;
