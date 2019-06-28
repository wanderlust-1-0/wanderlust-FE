# Wanderlust

[Visit Wanderlust](http://www.wanderlust.saschamajewsky.de)

Wanderlust is a fullstack web applicaiton that has been built during the WEB20 buildweek_2 (24.06.2019-28.06.2019) by [LambdaSchool](https://lambdaschool.com/) students. Each student fulfills a role in the project to collectively build the app. (Roles listed below)

Wanderlust provides an airbnb like platform for travelers and guides to match up. Tourists should have a fun experience visiting a foreign place so should easily be able to find tours to book. Guides should be able to utilize the platform to insert and edit own tours that will be displayed to tourists so their possible reached audience grows.

## Built With

* [HTML](https://en.wikipedia.org/wiki/HTML) - Foundation of the webpage
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Styling and sizing of the webpage
* [JSX](https://reactjs.org/docs/introducing-jsx.html) - Syntax extension to JavaScript for reactive DOM elements
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Language used to make the webpage interactive
* [React.js](https://reactjs.org/) - JavaScript library for user interfaces
* [Redux](https://redux.js.org/) - A predictable state container for React
* [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware for asynchronous state operations
* [Axios](https://github.com/axios/axios) - Promised based HTTP client to make requests to the backend
* [MDBReact](https://mdbootstrap.com/) - Material Design Bootstrap Framework for React
* [Axios-Progress-Bar](https://www.npmjs.com/package/axios-progress-bar) - A library to incluse a progress bar into the webpage that makes visualizes to the user after a HTTP request how long it will take for him to wait.

## Architecture and Workflow
The backend and database is handled by [Rogelio Caballero](https://github.com/rogercp) with a solution of Java Spring Boot and PostgreSQL. The backend is RESTful and will provide specific endpoints to communicate with the Frontend through HTTP requests and JSON-Objects. The backend is deployed at Heroku.

The Frontend is built by the authors mentioned below. It runs JavaScript and uses a State Driven Development (SDD) approach with React and React Redux. For the deployment a Continuous Deployment (CD) solution was chosen through [Netlify](https://www.netlify.com/) and then hosted under selfowned domains.

As working with 2 Frontend Developers the project progress needs to be commited in a way that keeps the amount of merge conflicts low. Thus before the project was built, design choices and modeling was done. The chosen branching strategy can be viewed [here](documentation/Branching_Strategy/branching-strategy-model.png). It was later further improved with the usage of Release Branches.
The project is chunked in user stories/tasks which are provided to a trello board for developers to assign these for themself.

Before the development started the Frontend Developers did modeling and planning for the application and created use cases, detailed technical descriptions for use cases, models of JSON-Objects and a flowchart for the states that the application can go through.

For the design aspect the group had a UX Design student dedicated to it who provided a design mockup for the whole application. The Frontend Developers tried to stick as close as possible to [this mockup](https://projects.invisionapp.com/share/U6SMIHDB2VJ#/screens).

## Project Requirements and Documentation

* [Initial Design Mockup from UX Designer](https://projects.invisionapp.com/share/U6SMIHDB2VJ#/screens)

* [Initial Project Description](https://docs.google.com/document/d/1HGTZDCltVTSM6LlF2qpyTJd8a17_B1iikEi_jIWlwOI/edit)

* Frontend Model and Planning - Directory "documentation"

* [Technical Design Documentation](documentation/Technical_Design_Documentation_Wanderlust.docx)

* [Grading/Rubric - Frontend Students](documentation/frontend-rubric-requirements.pdf)

* [Requirements and Milestones - Frontend Students](https://www.notion.so/Build-week-Schedule-and-Daily-Milestones-7f0aca2ad598459fa4492fdac9881d5b)

* [Policies and Procedures](https://www.notion.so/Build-Week-Culture-Document-19e679fc1a284b668d8132dd8d7228cd)

* [Daily Milestones](https://www.notion.so/Build-week-Schedule-and-Daily-Milestones-7f0aca2ad598459fa4492fdac9881d5b)

* [Retroperspective (Soon)]()

## Authors

**Role: Frontend Developer**
* **[Jeff Oliver](https://github.com/codeOfTheFuture)** 
* **[Sascha Majewsky](https://github.com/SaschaMajewsky)** 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details