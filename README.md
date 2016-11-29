# CSE5335-mxf6133- Project 2  
## CSE5335- Web Data Management  
### Project deployed on Heroku: [MEAN web application] (https://cse5335-mxf6133-2.herokuapp.com/)  

#### a. What SQL or NOSQL database did you choose and why?  
I chose to implement the full-stack MEAN. MongoDB, Express, AngularJS and NodeJS work well together and the results are seamless. MongoDB being a collection of documents enable each document a JSON object. This made handling and parsing JSON objects easy in Node and AngularJS. Wanted to get more hands-on experience with a NoSQL database.  

#### b. What aspect of the implementation did you find easy, if any, and why?  
Since I had modularized the code for project 1, it was easier making changes to that project and migrating the code such that it meets the reaquirements of this project. Furthermore, animation was made easy by AngularJS.

#### c. What aspect of the implementation did you find hard, if any, and why?  
Framing the MongoDB find query as a bit of a challenge, as initally I was passing wrong parameters to the callback function(index.js). There are various methods to instantiate the mongoDB database object. After trying various node modules, I decided to use 'monk'(app.js).  

#### d. If you were to use these technologies professionally, what would be your biggest concern?  
MongoDB: Though it may be "web scale" database, it comes at the cost of features provided by more traditional forms of storage like relational databases, normalisation, etc.  
AngularJS: if an application is to be indexed by search engines, Single Page Application frameworks take a step backwards. This is because the application is composed in the UI, so there's not going to be anything to index if the search engine doesn't execute the in-page JavaScript like a browser would.    