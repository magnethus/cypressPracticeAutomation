/// <reference types="cypress" />

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/homePage";
import iFramePage from "../pages/iFramePage";
import loginPage from "../pages/loginPage";
import signUpPage from "../pages/signUpPage";
import dashboardPage from "../pages/dashboardPage";

 
beforeEach(() => {
    cy.viewport(1600, 720);
});

Given("I navigate to the Website {string}", (url) => {
    cy.log('Navigating to: https://www.tutorialspoint.com' + url);
    homePage.enterURL(url);
});

Then('I Should see the title of the home page', (datatable) => {
    datatable.hashes().forEach((element) => { 
        cy.log('Page Title: ' + element.title); 
        console.log('Page Title: ' + element.title);
        homePage.verifyPageTitle();  
        homePage.verifyMainTitle(element.title);
    });
});


Given("I navigate to the Iframe page", () => {
    cy.log('Getting the Iframe URL');
    iFramePage.navigateToIframePage();
});

Then("I make click on the {string} link", () => {
    cy.log('Entering into the "About us" page'); 
    iFramePage.visitAboutUsPage();
});

Then("I should see the URL {string}", (url) => {
    cy.log('The About page is: ' + url);
    console.log('The About page is: ' + url);
    iFramePage.actualAboutPage(url);
});


 

Then('I should see a List of all the URLs', () => {
    cy.log('Getting the list of URLs: ')
    console.log('The List of items: ')
    iFramePage.getListOfURLS();
});

Then('I should see a List of all the Buttons', () => {
    cy.log('Getting the list of Buttons: ')
    console.log('The List of buttons: ')
    iFramePage.getListOfButtons();
});

Then('I should see a list of text input fields', () => {
    cy.log('Getting the list text input fields: ')
    console.log('The List of text input fields: ')
    iFramePage.getListOfImputFields();
});





When('I make click on the Login button', () => {
    cy.log('Entering the Login Page: ')
    console.log('Entering the Login Page: ')
    iFramePage.openLoginPAge();
});

Then('I make click on the Sign Up option', () => {
    cy.log('Openning the Login form')
    console.log('Openning the Login form')
    loginPage.openSignUpPage();
});

Then('I insert the next user data', (table) => {
    cy.log('Sign up with the following user: ')
    table.hashes().forEach(row => { 
        signUpPage.fillingForm(row.name, row.country, row.phone, row.email, row.password);
    })
});

Then('I get the OTP Code', () => {
    cy.log('The code is: '+ Cypress.env('codeToken') )
    console.log('The code is: '+ Cypress.env('codeToken') )
    signUpPage.getTheCode();
});

Then('I validate the OTP Code', () => {
    signUpPage.validateTheOTPCode();
    cy.log('The OTP code was created successfully')
    console.log('The OTP code was created successfully') 
});

Then('I should be in the Dashboard page', () => {
    cy.log('Login to the Dashboard Page')
    console.log('Login to the Dashboard Page') 
    signUpPage.loginDashboardPage();
    cy.log('The User is now in the Dashboard Page')
    console.log('The User is now in the Dashboard Page') 
});

Then('I should have logged into the Dashboard page with my user', () => {
    cy.log('The user goes to the profile menu of the Dashboard Page')
    console.log('The user goes to the profile menu of the Dashboard Page') 
    dashboardPage.loginWithUserToPage();
});