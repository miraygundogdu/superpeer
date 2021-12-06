 ///  <reference types="cypress" />

 import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"


Given('I visit to the website', () => {

  cy.visit("http://www.youtube.com");

})

When('Search for Superpeer', () => {
  cy.get('input[id="search"]').type('superpeer').type('{enter}');
})

And('Click and open first video', () => {
  cy.get('a#video-title').first().click();
})

And('Verify all expected results', () => {
  cy.url().should('eq', 'https://www.youtube.com/watch?v=ZNe-TIiLiEI');
  cy.get("#container > h1").should("have.text","Superpeer'in kuruluş hikayesi");
  cy.get("#info-strings > yt-formatted-string").should("have.text","11 Ara 2020");
  cy.get('ytd-video-owner-renderer [dir]').should('have.text','Fatih Acet');
  cy.get('#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)').should('have.text','330');
})

And('Stop the video', () => {
  cy.get('#movie_player > div.html5-video-container > video').click();
  cy.scrollTo('bottom');
  cy.get('.style-scope.ytd-compact-radio-renderer > a#thumbnail').click();
})

Then('Click a random video', () => {
  cy.get('.style-scope.ytd-compact-radio-renderer > a#thumbnail').click();
})