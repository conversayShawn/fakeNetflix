import React from 'react'
import Cartoon from './Cartoon'

describe('<Cartoon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Cartoon 
      cartoon={{
        id: 19,
        title: "Lion King",
        poster: "/images/lion_king.png",
        alt: "Lion King",
        description:
          "In the vast savannahs of Africa, a young lion cub named Simba must reclaim his throne as the rightful king after facing exile due to his wicked uncle's schemes. With the help of newfound friends, Simba learns about responsibility and embraces his destiny in the Circle of Life.",
      }}
    />)
  })
})