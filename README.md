# golden-shoe

## Description

This is a task developed by Jordi for the third round of interviews for an Associate Software Developer role at AND Digital

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)

## Features

This application is an MVP of a website for Golden Shoes, a shoes retailer, built using the MERN stack, GraphQL and Material UI. The application is fully responsive, has a fixed navigation bar for convenience, and a simple, clean, and modern layout.

As an MVP, this application only contains two pages, a Home page, and a Products page with a menu to filter shoes by gender, and whether or not shoes are in the 'featured' or 'deals' category. Also, it is possible to list all shoes. The rest of navigation links are placeholders and point to the Home page.

The application also showcases how individual items could be displayed to the customer. This has been achieved by creating a modal that appears on top of the Products page so that customers don't need to leave the Products page if they wish to see more information about a pair of shoes or add it to their cart.

Buttons to add shoes to favourites or share them have been added for each item in both the Products page and the modal to display individual pairs of shoes. In addition, a 'Chat' button has been added to the Products page, which would allow customers to contact customer service conveniently.

## Installation

For developers, you can install this project following the below steps:

- The application can be installed locally by unzipping the file and running the script below from the root directory of the project

```
npm i
```

- The project uses a Mongo DB hosted by Atlas and thus it is not necessary to seed the database. However, it can be done by running the script below from the root directory of the project

```
npm run seed
```

- The application can be run locally by executing the script below from the root directory of the project

```
npm run dev
```

- Once the application is running, open a browser and go to: http://localhost:3000

## Technologies

- React.js
- MongoDB / Mongoose
- GraphQL / Apollo
- Express.js
- Node.js