<h1 align="center">Welcome to R.E.mind!</h1>

<p align="center">The notes app for Real Estate professionals to keep track of the properties they engage with.
We can all be a little forgetful at times. Remind yourself of the important Real Estate details with R.E.mind!</p>

<p align="center"><a  href="https://r-e-mind.herokuapp.com/">R.E.mind Live Demo</a></p>

# Summary & Next Steps

R.E.mind is a full stack application that allows users to maintain valuable information on properties they are currently engaged with. This includes the ability to store important notes and track location. Additional functionality is under development and can be found under **_Future Features_** in the Features section listed below.

# Getting started
1. Clone this repository
```
https://github.com/pm24mcgi/R.E.mind
```
2. Install dependencies
```
npm install
```
3. Create a .env file
4. Setup your PostgreSQL user and database
5. Create, migrate and seed your database
```
npx dotenv sequelize db:create && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all
```
6. Run `npm start` in folder "backend", then run `npm start` in folder "frontend"


# Application Architecture
R.E.mind utilizes a React.js/Redux frontend and an Express backend. The database was constructed with PostgresSQL.

# Technologies Used
* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Express.js](https://expressjs.com/)
* [Javascript](https://www.javascript.com/)
* [PostgresSQL](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

# Contact
<a href="https://github.com/pm24mcgi">Developer's Github</a> | <a href="https://github.com/pm24mcgi/R.E.mind">Git for R.E.mind</a> |
<a href="https://github.com/pm24mcgi/R.E.mind/wiki">Git Wiki for R.E.mind</a>

# Feature List

## 1. New account creation, log in, log out, and guest/demo login
* Users can sign up, log in, and log out.
* Users can use a demo log in to try the site.
* Logged in users are directed to their profile page which displays their tasks.
* Logged out users are directed to the home page.

## 2. Hosting on Heroku

## 3. Properties (Notebooks)
* Logged in users can POST properties.
* Logged in users can EDIT and DELETE properties.
* Logged in users can GET all their properties.

## 4. Notes
* Logged in users can POST their notes to properties.
* Logged in users can EDIT and DELETE their own notes.
* Logged in users can GET all their notes by each property.

## 5. Production README
* Brief explanation of what the app is and does.
* How to start development environment
* Technologies used
* Link to live site
* Link to Wiki docs
* Discussion of two features that show off the team's technical abilities
* Discussion of both challenges faced and the way the team solved them
* Code snippets to highlight the best code

## 6. Future Features
The following functionality is under development
* Rich-Text Editing
* Google Maps API
* Tasks
* Lists
* Calendar
* Search
* Tags

# DB Schema
![170887783-e8d9b2f6-fd17-4904-b295-e62db8b984fd](https://user-images.githubusercontent.com/99216796/172063314-dc8712c5-5fde-4c6b-9d6c-785b36b3ecae.png)
