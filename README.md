#   Patagonian-POC
 

## Assestment
### Create an interaction with a website where the URL tutorialspoint.com/html/html_iframes.htm is loaded and the program navigates into the page below “Document content goes here…“, interacts with the “About us” link, then returns the URL of the new page, a list of all URLs on the page, a list of all buttons on the page, a list of all text input fields on the page, then creates an account and logs into the site. The output should be both via console and output to the appended file.

 
## ---------

> **Note**:
 
Cypress tool was used to develop the test suite integrated with Cucumber and Gherkin.


#### You need to install

* Node
* npm


#### Instruction to run the test

Clone this repo
+ run `npm install`


Run the project directly from the Browser

+ `npx cypress open`

or run the project by console

+ `npx cypress run --spec "cypress/e2e/features/Tutorialspoint.feature" --browser chrome`




```
project  
│
└───cypress
│   │
│   └───e2e
│       │
│       └─── features (Gherkin file with test cases description)
│       │
│       └─── page-objects (POM files with models)
│       │
│       └─── Tests (Code)

```


Example of test execution

![image](.https://github.com/magnethus/patagonian/blob/main/screenshots/Patagonian1.png)

![image](.https://github.com/magnethus/patagonian/blob/main/screenshots/Patagonian2.png)

##### A video execution example

 https://github.com/magnethus/patagonian/blob/main/screenshots/TutorialsPoint.feature.mp4
