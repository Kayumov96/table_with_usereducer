import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = ({data}) => {
  return (
      <div>
          { data.map( ( value ) => (
              <NavLink exact to={ value.path } key={ value.id }>
                  <h2> { value.title }</h2>
              </NavLink>
          ) ) } 
      </div>
  )
}
export default Navbar;