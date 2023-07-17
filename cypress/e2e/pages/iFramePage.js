/// <reference types ="cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


class iFramePage {

    navigateToIframePage() {
        cy.get('iframe.result')
            .its('0.contentDocument') 
            .its('body')
            .should('be.visible')     
            .then(cy.wrap)  
    }
 
    visitAboutUsPage(){
        cy.get("a.nav-link[href='/about/index.htm']").first()
        .click({force: true}) 
        .then(cy.wrap); 
        cy.get('a#banner-accept').click();  
    }
   
     actualAboutPage(url) { 
        cy.url().should('eq', url).wait(2000);
     }
 

     getListOfURLS() {
        cy
            .get('a[href]').each((item) => {
                cy.log('URL = ' + item.prop('href')); 
                console.log('URL = ' + item.prop('href')); 
            });
     }
     

     getListOfButtons() {
        cy
            .get('.btn.mb-0').each((item) => {
                    cy.log('URL = ' + item.prop('href')); 
                    console.log('URL = ' + item.prop('href')); 
            });
     }


     getListOfImputFields() {
        cy
            .get('input.form-control').each((item) => {
                    cy.log('URL = ' + item.prop('href')); 
                    console.log('URL = ' + item.prop('href')); 
            });
     }


     openLoginPAge() { 
        cy.get('.btn.mb-0').first()
        .should('contain.text', 'Login')
        .click().wait(2000)
     }





}

module.exports = new iFramePage();
