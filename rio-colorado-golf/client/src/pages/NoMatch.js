import React from 'react';
import Fore from "../assets/img/fore.jpg"

const NoMatch = () => {
  return (
    <div className="fore">
    <img src={Fore} alt="Fore o' Fore"/>
      <h3>Oops, we couldn't find that page.</h3>
    </div>
  );
};

export default NoMatch;