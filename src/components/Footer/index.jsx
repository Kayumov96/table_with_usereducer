import React from 'react'
import { Companies, Container } from './style';
import companies from '../../assets/images/companies.png';

export const Footer = () => {
  return (
      <div>
          <Container>
        <Companies src={ companies} alt="companies logo"/>
          </Container>
    </div>
  )
}
export default Footer;