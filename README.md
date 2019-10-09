# FriendFinder

FriendFinder is a compatibility-based application that takes in results from a users' survey and compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match. The survey has 10 questions, with each answer having a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

I created this app using JavaScript, jQuery, Express.js, node.js, HTML, Bootstrap, and CSS.

The server.js file requires express and path npm packages.

The htmlRoutes.js file includes two routes, a GET Route to /survey which displays the survey page, and a default, catch-all route that leads to home.html which displays the home page.

The apiRoutes.js file contains two routes, GET route with the url /api/friends. This is used to display a JSON of all possible friends.
A POST routes /api/friends. This is used to handle incoming survey results, and also handles the compatibility logic.

The app's data inside of app/data/friends.js is displayed as an array of objects. 

Each user's results is an array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]), with which the difference between the current user's scores are compared against those from other users, question by question. From there the total difference is calculated.

The closest match is the user with the least amount of difference.

Finally, the most compatible friend is displayed as a modal pop-up which displays both the name and picture of the match.
