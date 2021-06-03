import React from 'react';

import {welcome, title, author, DOY} from './Data/Data';

const Header = (props) => {
    return (
       <header className="header">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h4>Age: {2021 - DOY}</h4>
      <p>Instructor: {author.lastName} {author.firstName}</p>
    </header>
    )
}

export default Header
