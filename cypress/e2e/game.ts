/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/cyberpunk-2077')

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /cyberpunk 2077/i }).should('exist')
      cy.findByText(/^Cyberpunk 2077 is an open-world/i).should('exist')
      cy.findByText('$199.90').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)
  });
});
