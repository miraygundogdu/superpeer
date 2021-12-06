/// <reference types="cypress" />


describe('example to-do app', function () {
    beforeEach(function () { 
      cy.visit('https://www.youtube.com/')
    })
  
    it(' Case 1' , function () {
      cy.get('input[id="search"]').type('superpeer').type('{enter}')
      cy.get('a#video-title').first().click();
      cy.url().should('eq', 'https://www.youtube.com/watch?v=ZNe-TIiLiEI')

  





  })

})