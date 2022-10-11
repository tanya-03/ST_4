import React, { useState } from 'react'
import Cricketers from './Cricketers';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';



export default function Form() {
  const [position, setposition] = useState('');
  const [player, setplayer] = useState('');
  const [rating, setrating] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = position, b = player, c = rating;
    Cricketers.push({ a, b, c });
    // console.log(Cricketers);
    history('/added');


  }

  return (
    <div className='background'>
      <h1>BOOK ISSUE</h1>
      <form className='container'>
        <label>YOUR NAME</label><br></br>
        <input type="text"   placeholder='Enter Your Name' onChange={(e) => setposition(e.target.value)} required></input><br></br>
        <label>BOOK NAME</label><br></br>
        <input type="text"   placeholder='Enter Book Name' onChange={(e) => setplayer(e.target.value)} required></input><br></br>
        <label >BOOK CODE</label><br></br>
        <input type="number" placeholder='Enter BOOK CODE' onChange={(e) => setrating(e.target.value)} required></input><br></br>
        <Link to='/added'>
          <input className='btn' type="submit" onClick={handleSubmit}></input>
        </Link>

      </form>

      
    </div>
  )
}
