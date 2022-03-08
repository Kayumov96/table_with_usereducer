import React from 'react'
import { Container, Description, Imeg, Img, Info, Ondiv, PageLinks, Textdiv } from './style';
import Redd from '../../assets/images/Redd.png';
import chat from '../../assets/icons/chat.svg';
import circleb from '../../assets/icons/circleb.svg'


export const Body = () => {
  return (
      <div>
          <Container id="1">
              <Textdiv>
                  ONTIME EXPRESS
              </Textdiv>
              <Ondiv>
                  <PageLinks>
                     <a href='#1'><img className="pages" src={ circleb } alt="click to next page" /></a> 
                     <a href='#2'> <img className="pages" src={ circleb } alt="click to next page" /></a>
                      <a href='#3'><img className="pages" src={ circleb } alt="click to next page" /></a>
                    <a href='#4'> <img className="pages" src={ circleb } alt="click to next page" /></a>
                      <a href='#5'><img className="pages" src={circleb} alt="click to next page" /></a>
                  </PageLinks>
                  <Description>
                      <h2 className="textdrive">DRIVE <h2 className="textdr">FOR ONTIME</h2> EXPRESS</h2>
                      <Info>
                          <h5>Driver Application</h5>
                          <h5>Call a Recruiter</h5>
                      </Info>
                  </Description>
                  <Imeg src={ Redd } alt='Red Truck' />  
                  <Img src={chat} alt='help'/>
              </Ondiv>
          </Container>
      </div>
  )
}
export default Body;
