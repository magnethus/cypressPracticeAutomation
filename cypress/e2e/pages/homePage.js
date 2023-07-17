/// <reference types ="cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


class homePage {
      
    verifyPageTitle() { 
        return cy.title().should('exist');
    }

    enterURL(url) {
        cy.visit(url);  
    }

    verifyMainTitle(title) {
        return  cy.xpath("//h1[text()='HTML - Iframes']")
            .should('have.text', title).wait(2000);
      }
 

}

module.exports = new homePage();