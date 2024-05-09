# React Props

## Resources

- [React Official Website](https://react.dev/)
- [Getting Started with React](https://www.taniarascia.com/getting-started-with-react/)
- [React Overview](https://legacy.reactjs.org/docs/getting-started.html)
- [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Enzyme](https://enzymejs.github.io/enzyme/docs/api/shallow.html)
- [React Fragments](https://legacy.reactjs.org/docs/fragments.html)
- [Typechecking with PropTypes](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)

## Learning Objectives

By the end of this project, you should be able to:

- Create basic React components using functions
- Reuse components
- Pass properties to components
- Define types for components
- Use Fragments
- Use keys to improve loop performance

## Requirements

- All files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file at the root of the project folder is mandatory

## Tasks

### 0. Basic Components

#### Create a Header Component

- Move the header code from App.js to Header.js
- Move header-related CSS to Header.css
- Create an empty Header.test.js for testing

#### Create a Footer Component

- Move the footer code from App.js to Footer.js
- Move footer-related CSS to Footer.css
- Create a Footer.test.js for testing

#### Create a Login Component

- Move the login section code from App.js to Login.js
- Wrap the code in a React Fragment
- Move login-related CSS to Login.css
- Create a Login.test.js for testing

#### Modify the Shell

- Remove root-notifications and Notifications import from index.js
- Import Notifications, Login, Footer, and Header in App.js
- Add Notifications component before div.App
- Wrap Notifications and div.App within a React Fragment
- Replace header code in div.App with Header component
- Replace login code in div.App-body with Login component
- Replace footer code in div.App-footer with Footer component
- Update App.test.js

### 1. Write Tests for Each Component

#### Header.test.js

- Shallow render Header component
- Verify rendering of img and h1 tags

#### Login.test.js

- Shallow render Login component
- Verify rendering of 2 input and 2 label tags

#### Footer.test.js

- Shallow render Footer component
- Verify rendering of footer content

#### App.test.js

- Check for presence of Notifications, Header, Login, and Footer components

...

