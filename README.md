# Angular Calculator App

This is a simple calculator application built using Angular. The calculator supports basic arithmetic operations like addition, subtraction, multiplication, and division.

## Features
- Basic Arithmetic Operations: `+`, `-`, `*`, `/`
- Supports number inputs and decimal points
- Clear (`C`) and delete (`←`) buttons
- Evaluates expressions safely without using `eval()`
- Responsive layout with buttons designed to fit properly

## Requirements

Before you start, ensure you have the following installed:

- **Node.js**: Download and install from [Node.js website](https://nodejs.org/).
- **Angular CLI**: If you don't have Angular CLI installed, you can install it globally using:

  ```
  npm install -g @angular/cli
  ```
### Installation
Clone the repository:

```
git clone https://github.com/your-repo-url/calculator-app.git
cd calculator-app
```
Install dependencies:


```
npm install
```
### Running the Application

To run the application in development mode:

```
ng serve
```
Open your browser and navigate to http://localhost:4200/. The app will automatically reload if you make any changes to the source files.

### Project Structure
The main source files for the calculator can be found in the src/app/calculator/ directory. Here's a quick overview of the 
### important files:  

calculator.component.ts: Contains the logic for the calculator, such as handling user input and evaluating expressions. <br>
calculator.component.html: The template that defines the structure of the calculator's buttons and display.  
calculator.component.css: Styling for the calculator layout and design.  
### Usage
#### Calculator Functionality:  
C: Clears the entire input.  
←: Deletes the last entered character.  
=: Evaluates the current expression.  
Numbers and Operators: You can input numbers and arithmetic operators (+, -, *, /) for calculations.  
#### Customization
You can customize the look and feel of the calculator by editing the calculator.component.css file. Feel free to modify the layout, colors, and button designs as needed.

### Build for Production
To build the application for production, run:
```
ng build
```
The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

# Challenges Of AI
One of the biggest challenges i faced was the use of imports and the AIs ability to know whether or not something was able to be used and if another file needed to be modified. However the AI was then able to resolve these issues if i gave it the error message presented to me. 