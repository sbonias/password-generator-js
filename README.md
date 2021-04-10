# 03 JavaScript: Password Generator

The Password Generator is an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by JavaScript. It also features a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Notes
- When attempting to align text in the form of an h2 tag, you need to use the css property of 'text-align': center, nothing else works
- When referencing a class in css you need to use a dot before the name
- When referencing an id in css you need to use a hashtag before the name
- When referencing a traditional tag (h2, body, footer) no special chars are required for reference purposes
- Figured out how to import a google fonts cdn on the html file in order to reference the font within the css file in order to be able to use it in your
code
    -   Add this to the HTML file within the header tag above the css link <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@200&display=swap" rel="stylesheet">
    -   Reference it in the css file: font-family: 'IBM Plex Serif';
* you must to some degree follow the api documentation found within the website of google fonts