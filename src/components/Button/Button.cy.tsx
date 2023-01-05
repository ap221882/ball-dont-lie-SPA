import React from 'react';
import Button from './Button';
import { FaLessThan } from '../../assets/icons';

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button icon={<FaLessThan />} />);
  });
});
