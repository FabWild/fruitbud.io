# fruitbud.io

Welcome to the side project!

Notre but ici est de proposer un repository où tout le monde peut expérimenter !

L'idée de base est de proposer des fiches d'information sur des fruits et autres aliments santé. Des citations de films/séries ou des dinosaures ont également été mentionnés.

## Stack
* Node (port 3001)
* React (create-react-app - port 3000)
* SQlite dev, MySQL production
* Sequelize

## Feature 1 - The Wire quotes
* clone, git checkout **devf**, npm install, npm start
* API :
  * get **/addWire** to add the quotes from wikiquote in the local database
  * then, get **/quote** to get a random quote from the local database
  * get **/wikiquote** to get one random quote from the wikiquote API
  
These three routes give you the whole list with **?all=true**
