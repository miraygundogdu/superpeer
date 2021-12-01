/// <reference types="cypress" />


describe('example to-do app', function () {
    beforeEach(function () { 
      cy.visit('https://www.youtube.com/')
    })
  
    it(' Case 1' , function () {
      cy.get('input[id="search"]').type('superpeer').type('{enter}')
      cy.get('a#video-title').first().click();
      cy.url().should('eq', 'https://www.youtube.com/watch?v=ZNe-TIiLiEI')
      cy.get("#container > h1").should("have.text","Superpeer'in kuruluş hikayesi")
      cy.get("#info-strings > yt-formatted-string").should("have.text","11 Ara 2020")
      //cy.get('#text-container.ytd-channel-name').should('have.text','Fatih Acet')
      cy.get('ytd-video-owner-renderer [dir]').should('have.text','Fatih Acet')
      cy.get('#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)').should('have.text','330')
      cy.wait(1500)
      cy.get('#movie_player > div.html5-video-container > video').click()
      cy.scrollTo('bottom')
      cy.get('.style-scope.ytd-compact-radio-renderer > a#thumbnail').click()
      
  })

})