// load type definitions that come with Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /*
     * Custom command to visit google page
     * @example cy.google()
     */
    shouldRenderBanner(): Chainable<Element>
    shouldRenderShowcase(): Chainable<Element>
  }
}
