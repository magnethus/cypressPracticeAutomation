Feature: Tutorialspoint Navigation
    Background: 
            Given I navigate to the Website "/html/html_iframes.htm"
      
       Scenario: Open the Iframe home page  
            Then I Should see the title of the home page
                | title          |
                | HTML - Iframes |

        Scenario: Open the Iframe page and return the About Us URL
            Given I navigate to the Iframe page
            When I make click on the "About Us" link 
            Then I should see the URL "https://www.tutorialspoint.com/about/index.htm#"

    
        Scenario: Returns elements of the About Us page.
            Then I should see a List of all the URLs
            Then I should see a List of all the Buttons
            Then I should see a list of text input fields 

        Scenario: Create an Account  
            When I make click on the Login button
            Then I make click on the Sign Up option
            Then I insert the next user data  
                | name        |  country        |  phone   |             email              | password  |
                | Steven Fire | Argentina (+54) | 834544444| croitrozekocou-5106@yopmail.com|  123abc   |     
            Then I get the OTP Code
            Then I validate the OTP Code
            Then I should be in the Dashboard page
            Then I should have logged into the Dashboard page with my user

 




   
    

 


 
