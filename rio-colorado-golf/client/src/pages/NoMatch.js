import React from 'react';
import Fore from "../assets/img/fore.jpg"

const NoMatch = () => {
  return (
    <div>
    <img src={Fore} alt="Fore o' Fore"/>
      Oops, we couldn't find that page.
    </div>
  );
};

export default NoMatch;