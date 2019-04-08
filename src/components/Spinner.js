import {Component} from 'react';
import * as React from 'react';

export const Spinner  = ({script, text, timeLeft}) => {
  return (
    <div className='spinner'>
      <h2>{script}</h2>
      <p>{text}</p>
    </div>
  )
};



