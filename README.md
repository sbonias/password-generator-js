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

## Notes/Pseudocode
HTML/CSS/BOOTSTRAP APP INTERFACE WORK

- 4/8/21
- When attempting to align text in the form of an h2 tag, you need to use the css property of 'text-align': center, nothing else works
- When referencing a class in css you need to use a dot before the name
- When referencing an id in css you need to use a hashtag before the name
- When referencing a traditional tag (h2, body, footer) no special chars are required for reference purposes
- Figured out how to import a google fonts cdn on the html file in order to reference the font within the css file in order to be able to use it in your
code
    -   Add this to the HTML file within the header tag above the css link <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@200&display=swap" rel="stylesheet">
    -   Reference it in the css file: font-family: 'IBM Plex Serif';
* you must to some degree follow the api documentation found within the website of google fonts

- 4/10/21 
- I had to refresh my memory on how terminal(local) to github pages publishing actuall works, took me awhile but finally got things up and running 
- Worked on an interesting css animation by leveraging the keyframes blink properties, learned how to manipulate each frame of the alloted time in order to create a more vibrant header

- 4/12/21
- Attempted to get background music for this app to play, after having wasted much time, it was determined that it's not a relatively easy thing to do without an actual media player on the page or an end user triggering the event. Chrome has made it really difficult to autoplay music on the web due to marketing/advertisers taking advantage. So the decision was made to not proceed with any type of auto background music for this app I guess for good reason. Maybe will revisit down the road how to incorporate some sort of audio.

- 4/14/21
- Applied some styling to the Generate Password button by creating a hover effect using the transform and translate properties. Ultimately creating the button element to move up by a small degree to create an animation effect.

- 4/15/21
- Goal: The focus of today is to generate a box to appear based on clicking the generate button, this element will contain the user criteria for generating their custom pw, will explore bootstrap. Conclusion: This was successfully implemented with the use of the bootstrap collapse component, looks sleek and clean and provides the user with some great interaction.
- Goal: Need to apply the pw input selectors to the collapsable body. Conclusion: Applied html input type checkboxes as well as labels to accomplish this. Ran into an issue with aligning the labels with the boxes, worked around this by placing the elements within their own divs, and used css floats and margin-right and left to align the elements to my liking
- Goal: Adjust media queries to make app more responsive to different devices
Conclusion: added additional breakpoints to media queries and adjusted css properties accordingly, primarily in regards to the input and lable elements as well as h1 and h2 elements


- 4/18/21
- Goal: Need to make it so the "Start" button disappears and the "Generate Password" button appears. Will need to do this in JS file with maybe some css animations and js. Conclusion: Established dom variables for the buttons using the querySelector method using the css selector of id using #. Created a function that assigns inline css styling to the html element leveraging the css property of display, rotating between "none" and "inline-block." Also onclick events to the buttons, which I will add to further as more functions are written. 