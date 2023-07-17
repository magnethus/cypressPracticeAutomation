/// <reference types ="cypress"/>

 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class dashboardPage { 


    loginWithUserToPage(){
        cy.get('#skipMobileOtp')
            .should('be.visible').wait(2000).click()
        cy.get('#profileMenu')
            .should('be.visible').wait(2000).click()
        cy.get('.profile_edit_url').should('exist');
    }
}

module.exports = new dashboardPage();

 






