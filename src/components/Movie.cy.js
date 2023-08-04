import React from 'react'
import Movie from './movies/Movie'
import "../../src/index.css"

describe('<Movie />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Movie movieId={3} />)
  })
})
