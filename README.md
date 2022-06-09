[![Netlify Status](https://api.netlify.com/api/v1/badges/93c5450c-e466-4130-8068-adfd7764e196/deploy-status)](https://app.netlify.com/sites/fullfill/deploys)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=fullfill-server&style=flat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=appveyor)](https://opensource.org/licenses/MIT)
# Gebru Team 2 - Lap 4 Futureproof Final Project
Project FullFill

## Description
A fullstack project that aims to serve those facing food poverty by providing a one-stop-shop for both corporate and public volunteers to organise food donations and outreach, as well as for those in need to find local food banks.

<<<<<<< HEAD
Client deployed via Netlify: [http://localhost:8000/](https://fullfill.netlify.app/)  
Server deployed via Heroku: http://localhost:8000/  
=======
Client deployed via Netlify: https://fullfill.netlify.app/  
Server deployed via Heroku: https://fullfill-server.herokuapp.com/  
>>>>>>> 8e9826362074fbbcceca0924f85505ac7bf3eb9c

## Team Organisation

| Team Member     | Role |
|----------|------|
| [Alfie Kelly](https://github.com/Scralfie)    | Back End Development and Research    |
| [Amarachi Umeloh](https://github.com/umeloha) | Front End Development and Design      |
| [Doreen Kamushinda](https://github.com/doreenkam)   | Front End Development and Design      |
| [Thayaan Srisathialingam](https://github.com/THAYAANS)  | Front End Development and Testing    |
| [Trina Yau](https://github.com/trinayau)    | Front/Back End Development and Planning      |


## Installation and Usage
To run locally:  
Clone or fork this repo  
Client:
1. Run `cd client/blogapi` in terminal to enter React client directory
2. Run `npm install` to install all dependencies
3. Run `npm start` to start the server

Server:
1. Run `cd server` in terminal to enter Django server directory
2. Run `pipenv shell` to enter virtual enviroment
3. Run `pipenv install` to install all dependencies
4. Run `python manage.py makemigrations to start db
5. Run `python manage.py migrate` to migrate changes
6. Run `python manage.py runserver` to start the server

A .env file is required for the client to run perfectly: 
- Make a `.env` file in client/blogapi 
- Inside the file: put `REACT_APP_GOOGLE_KEY=YOUR_GOOGLE_MAPS_API_KEY` please put your own Google Maps API key in here

## Product (USP)
- Not just providing a platform to find food banks, but also to allow people to organise themselves into grassroots volunteering groups to serve their local community.
- In times of community distress and emergencies, the local community can organise around a website that directly serves this purpose rather than on social media which is less focused on the immediate need

## MVP
### Must-haves:
- Food bank locator
- User authentication
- Ability to create and join community groups
- Food donation page where charities post what food they need
- Deployment

### Should-haves:
- Events/blog post section -> Admin get to post
- Individual user profiles -> what community you are part of
- Mailers -> sign up for newsletter for this week's volunteering opportunities

### Could-haves/Stretch Goals:
- User can add own profile photo

## Technologies
| Purpose   | Technology                                                    |
|-----------|---------------------------------------------------------------|
| Front End | React designed using MaterialUI library                       |
| Back End  | Django using Django Rest Framework                            |
| APIs      | Give Food API, Google Maps API, Spoonacular API for databases |
| Database  | Heroku PostgreSQL DB                                          |
