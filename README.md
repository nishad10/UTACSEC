<img src="https://pbs.twimg.com/profile_images/887044871445295105/9bQlT5Xi_400x400.jpg" height="50" width="50">
<h1 position="relative">UTA CSEC WEBSITE</h1>

This will be the repo for the website for the Cybersecurity club for the University of Texas at Arlington. The site uses React for front-end, Node.JS for server and a Mongo DB database.

User account signups coming soon!
Admin accounts can log in to ADD, DELETE, EDIT events in real time, as we use a mongo DB.
Passwords are stored securely using JWT secret and hash. 

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
## LIVE

[![Netlify Status](https://api.netlify.com/api/v1/badges/564221ac-ca00-4c1f-8321-9151faa6b86e/deploy-status)](https://app.netlify.com/sites/mystifying-meninsky-280127/deploys)

Site is still in development but is live at https://www.utacsec.org/

Any feedback is appreciated.
### Deploy
The site is deployed on netifly and uses the websiteChanges branch as production build.

### Contact
Email- uta.csec@gmail.com

Twitter- https://twitter.com/UTA_CSEC

Discord- https://discord.gg/F9wZjBe

## Boilerplate

The repo was initialized using the boilerplate for MERN from this repo. 

https://github.com/amazingandyyy/mern

Refer to the above repo Readme for a more detailed and general information on deployment.
I have made a lot of changes to the structure of the code and the naming conventions too. Boilerplate was only used as a starting point.

## Code structure

The website will be MERN fullstack

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.

MongoDb for all storage, user info and to store other data which makes site dynamic.

React as a base for UI framework.

Redux for state management.

Saga or Thunk for middleware.

Finally Nodejs as runtime environment with Expressjs for rich web functionality.

## Installation and setup

### Prerequirements
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^10.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

NOTE :- You need client and server running concurrently in different terminal session, in order to make them talk to each other

### Clone or download
```terminal
$ git clone https://github.com/nishad10/utacsec.git
$ npm i
```
### For UI development you dont need server running. Server files are private.

## Client-side usage(PORT: 3000
```terminal
$ cd client   // go to client folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
```
For dev purpose you can skip server for now and just run above commands to work with the site.


## Contributing

If you want to help me with this please join the discord so we can talk about it.

Discord- https://discord.gg/F9wZjBe

If you want to add a feature to the website I would appreciate if you follow the code structure we have in place, if you have any questions about the structure of the code feel free to contact me. 

Name- Nishad Aherrao

Email- nishad.aherrao10@gmail.com

## License
[MIT](https://github.com/nishad10/utacsec/blob/master/LICENSE)
