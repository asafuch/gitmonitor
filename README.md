# gitmonitor

Do not run the express app, it is running on heruko at https://githubmonitors.herokuapp.com/ , the github webhook from the demo repository is sending a post request to the server,the server get the data it needs and pass it on to postgres, afterwards the react-app takes the postgres data and make a client app for it

you should only run the client side (client folder, with npm start)
commit changes in the demo repository and ask for pull request in order to see the changes occure
