[![Netlify Status](https://api.netlify.com/api/v1/badges/93c5450c-e466-4130-8068-adfd7764e196/deploy-status)](https://app.netlify.com/sites/fullfill/deploys)
![Heroku](https://pyheroku-badge.herokuapp.com/?app=fullfill-server&style=flat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=appveyor)](https://opensource.org/licenses/MIT)
# Gebru Team 2 - Lap 4 Futureproof Final Project
Project FullFill

## Description
FullFill is a fullstack project that aims to serve those facing food poverty by providing a one-stop-shop for both corporate and public volunteers to organise food donations and outreach.

## Links
Client deployed via [Netlify](https://fullfill.netlify.app/)  
Server deployed via [Heroku](https://fullfill-api.onrender.com/)  
Final presentation available on [Canva](https://www.canva.com/design/DAFC0sGhcT0/6c8fexwYvWOE87kaMqSOMQ/view)  
Initial pitch and MVP available on [Gist](https://gist.github.com/trinayau/402e96fd8e2107d91eb7019cbec829ad)  
Wireframes and planning available on [Figma](https://www.figma.com/file/58AsRQYoL2DYC6NwZF71tl/Gebru-2?node-id=0%3A1)  

## Team Organisation

| Team Member     | Role |
|----------|------|
| [Alfie Kelly](https://github.com/Scralfie)    | Back End Development and Testing    |
| [Amarachi Umeloh](https://github.com/umeloha) | Front End Development and Wireframing      |
| [Doreen Kamushinda](https://github.com/doreenkam)   | Front End Development and Design      |
| [Thayaan Srisathialingam](https://github.com/THAYAANS)  | Front End Development and Testing    |
| [Trina Yau](https://github.com/trinayau)    | Front/Back End Development and Project Manager      |


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
5. Run `python manage.py migrate` to migrate changes!
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
| Front End | React using MaterialUI library                       |
| Back End  | Django using Django Rest Framework                            |
| APIs      | Give Food API, React Google Maps API, The Meal DB API |
| Database  | Development: Django default SQLite3, Deployed: Heroku PostgreSQL DB                                          |

## Final Look
![screencapture-fullfill-netlify-app-2022-10-20-09_55_35](https://user-images.githubusercontent.com/92634994/196905771-1edd3014-b28b-49fb-8bdc-241c87bc7180.png)
![screencapture-fullfill-netlify-app-locator-2022-10-20-10_04_39](https://user-images.githubusercontent.com/92634994/196906591-bfa237ce-cee3-4fec-bc6f-613ea3ceae5b.png)
![screencapture-fullfill-netlify-app-donation-2022-10-20-10_05_11](https://user-images.githubusercontent.com/92634994/196906611-2e36b0c5-f775-4c19-8e6c-376d55c0f091.png)
![screencapture-fullfill-netlify-app-communities-2022-10-20-10_06_58](https://user-images.githubusercontent.com/92634994/196923739-292a3f09-3678-4fc0-9513-bcc51c1cf010.png)
![screencapture-fullfill-netlify-app-communities-21-2022-10-20-10_07_33](https://user-images.githubusercontent.com/92634994/196923749-7f18c6c4-aad5-4a80-919c-6341ebe9a6e0.png)
![screencapture-fullfill-netlify-app-profile-2022-10-20-11_23_26](https://user-images.githubusercontent.com/92634994/196923975-21a49381-875f-4fd5-9efb-c7814c9b43ee.png)
![screencapture-fullfill-netlify-app-profile-2022-10-20-11_23_26](https://user-images.githubusercontent.com/92634994/196923948-8f966e14-e300-4801-9885-e0706501b59a.png)
