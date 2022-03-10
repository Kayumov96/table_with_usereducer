import React from 'react';
import Navbar from '../Navbar';
import Quotes from '../View/Quote';


export  const Root = ({navlinks, circle}) => {
  return (
    <div>
      <Navbar data={ navlinks } d={ circle } />
      <Quotes/>
    </div>
  )
}
export default Root;