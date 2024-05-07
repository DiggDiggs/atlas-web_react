

# Create a new directory for the project
mkdir webpack
cd webpack


# Initialize npm project
npm init -y


# Install webpack and webpack-cli
npm install webpack webpack-cli --save-dev


# Create a src directory with an index.js file
mkdir src
touch src/index.js


# Create a dist directory for the output files
mkdir dist


# Create a webpack.config.js file
touch webpack.config.js


# Add webpack configuration to webpack.config.js
cat << EOF > webpack.config.js
const path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
EOF


# Display resources and learning objectives in README.md
cat << EOF > README.md
# Resources


#### Read or watch:


#### - Webpack documentation
Link: [Webpack documentation](https://webpack.js.org/concepts/)


#### - Webpack beginner guide
Link: [Webpack beginner guide](https://www.sitepoint.com/webpack-beginner-guide/)


#### - npm-package.json
Link: [npm-package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)


# Learning Objectives


At the end of this project, you are expected to be able to explain to anyone, without the help of Google:


- How to setup Webpack for a basic project
- Entry points, output, and loaders
- How to add plugins
- How to split your code into chunks
- How to setup a dev server


# Requirements


- All of your code will be executed on Ubuntu 18.04 LTS using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All of your files should end with a new line
- A README.md file at the root of the folder of the project is mandatory
EOF


# Display success message
echo "Webpack project setup completed successfully!"


