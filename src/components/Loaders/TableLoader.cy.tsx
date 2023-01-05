import React from 'react';
import TableLoader from './TableLoader';

describe('<TableLoader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TableLoader />);
    cy.get('.loading');
  });
});
