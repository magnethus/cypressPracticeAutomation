/// <reference types ="cypress"/>


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


class loginPage {

    openSignUpPage() {
        cy.get("a[href='signup.jsp']").click();
        
    }
 
    fillingForm(table){  
        cy.get("input[placeholder='Enter Full Name']")
        .clear().type(table.Value).wait(2000);
    }





}

module.exports = new loginPage();








