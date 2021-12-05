# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Sources for website

### Downloading files
In terminal enter $ git clone https://github.com/Milan-Tuma/hr-system.git
By using this command you will get your copy of source files.

### Installing dependencies
After download is finished, navigate to folder by using $ cd .\hr-system\
When inside of the folder, use command $ npm install to get all dependencies and build application on your local computer

### Starting application
After all dependencies have been downloaded, start application with command $ npm start
This will open application in new tab

## Using website

### List of employees
Initially you will be taken to page with list of employees. Left side contains navigation through available paths while right side is dedicated to list of employees. On top left corner is "Add employee" button which will open a modal requesting you to type information about new employee. To delete employee click on trash icon next to employee's information.

### Statistics page
When navigating to /statistics page or by clicking on navigation link, you can access page which sums list of employees. Table shows how many employees there are per position and calculates their average age. These informations are used then in graphs.

## Main dependencies
- axios for API requests
- redux to store employees and statistics (also used redux-thunk for async)
- react-router-dom for handling navigation between pages
- react-chartjs-2 to visualize statistics in graphs
