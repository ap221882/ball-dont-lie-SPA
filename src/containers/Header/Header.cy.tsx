/// <reference types="cypress" />
import React from 'react';
import Header from './Header';

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
    cy.get('header')
      .should('have.css', 'text-transform')
      .should('include', 'uppercase');
    cy.get('header').should('have.css', 'font-size').should('include', '48px');
  });
});
