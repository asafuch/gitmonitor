# gitmonitor

1.Do not run the express app. there's no need for that, you should only run the react app and change the file in the monitored repository (you can do it through github itself)

2.the monitored repository has a webhook, you have to change it while connected to github, the webhook sends a post request to the heruko server which then arrange the data and inserting it to the database

3.inside the githubmonitor repository theres a folder called client, run npm start inside client

4.i used postgres express react and heruko to make this application-copyright asaf chen
