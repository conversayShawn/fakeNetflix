import React from 'react'
import Navigation from './Navigation'

describe('<Navigation />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Navigation />)
  })
})