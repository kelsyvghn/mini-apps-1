MULTISTEP Checkout
Guidelines: DO NOT USE WEBPACK

• Use Express to serve up an index.html file and its associated assets
• Build your UI using ReactJS and pre-compile your views using Babel
• Use MongoDB or MySQL to store your user data

AvAilaBle HiNts:
- Installing and Running Babel
- Serving files from Express
- Installing and Using React
- Loading JS files into your index.html and in what order!?
- Testing

[X] Setup index
  - at head and body info tags
  - add a script tag to run app.js
  - add a div tage, with the id of app.jsx

[X] Setup server
  - install express
  - install nodemon
  - setup get request
  - send Hello World to server

[] Setup app.jsx
  - import react
  - import react dom
  - render react dom at bottom of page
  - console.log to see if html renders...
    -
  - add class/ component structures






X* Build your Express app inside server.js and your client app inside the client folder.
X* For the basic requirements, you MUST place all of your React components into one file, app.jsx.
X* Link your transpiled component file from index.html. DO NOT USE WEBPACK
* For ease of development, be sure to set Babel to watch for changes in your app.js file to recompile those changes immediately.
X* Additionally, be sure to use nodemon to watch for changes in server.js.
* The homepage of your application should have a Checkout button, which when clicked, takes the user to the first of several forms.
* We'll call the forms F1, F2, F3.
* F1 collects name, email, and password for account creation.
* F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
* F3 collects credit card #, expiry date, CVV, and billing zip code.
* At each step, a Next button allows the user to progress to the next step in the checkout process.
* The final step is a confirmation page which summarizes the data collected in the prior three steps.
* This page contains a Purchase button that completes the purchase.
* When the purchase is complete, the user is returned to the homepage.
* No actual shopping cart or products are necessary; you are modeling the checkout process only.
* Every run through the checkout process (each time Checkout is clicked) creates a new record in your server's database, and each step in the checkout process saves its piece of the data to that record (the data is saved when Next is clicked).
* Use the coding best practices you learned previously to ensure a clear separation of concerns with well-defined interfaces.
* If you get stuck or are not sure how to proceed, you may look at the hints file for this challenge to help you along.



