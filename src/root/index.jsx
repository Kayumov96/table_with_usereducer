import React from 'react';
import Navbar from '../components/Navbar/index';
import Body from '../components/Body/index'
import Footer from '../components/Footer/index'


export  const Root = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer/>
    </div>
  )
}
export default Root;