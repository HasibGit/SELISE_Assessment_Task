# SeliseAssessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Web Interface

It consists of two menus, create and users. Upon clicking on the create menu button, you are taken to the user creation form component. All the required form field validations was implemented in the form. After giving valid information and clicking on save, a new user will be created.

In the users tab, all the users will be shown in a table list format.

## Database

As for the database, i have used googles firebase service to store all the users data. Firebase REST APIs allow us to make requests to the Firebase Database for reading, writing, updating, or removing data. We can define any Firebase Realtime Database URL as a REST endpoint by adding . json in the end. Keeping our data safe, we can use the Firebase REST API to send requests via an HTTPS client.

## Reusable List Component

One of the key requirement of this assessment task was to create a reusable list component that can represent any arbitrary number data if we pass data to the component in a specific valid format. To achieve this purpose, i have modified the angular materials datatable component to make a reusable datatable component that has all the necessary functionalities like sorting, pagination, filtering etc. We just need to pass our data to the component in a proper format and component will represent our data as desired.
