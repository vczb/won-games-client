/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home sections', () => {
    cy.visit('/')

    cy.shouldRenderBanner()
  })

})
