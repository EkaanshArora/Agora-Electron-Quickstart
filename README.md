# Agora Electron Quickstart
A barebones quickstart app for group video calls on Electron using Agora.io SDK.

## Prerequisites
* Node 14
* A valid Agora account ([Sign up](https://dashboard.agora.io/) for free)

## Running this example project

### Structure

```
.
├── src
├── index.html
├── main.js
├── renderer.js
├── package.json
.
```

### Generate an App ID

In the next step, you need to use the App ID of your project. Follow these steps to [create an Agora project](https://docs.agora.io/en/Agora%20Platform/manage_projects?platform=All%20Platforms) in Console and get an [App ID](https://docs.agora.io/en/Agora%20Platform/terms?platform=All%20Platforms#a-nameappidaapp-id ).

1. Go to [Console](https://dashboard.agora.io/) and click the **[Project Management](https://dashboard.agora.io/projects)** icon on the left navigation panel. 
2. Click **Create** and follow the on-screen instructions to set the project name, choose an authentication mechanism (for this project select App ID without a certificate), and Click **Submit**. 
3. On the **Project Management** page, find the **App ID** of your project. 

Check the end of document if you want to use App ID with certificate.

### Steps to run our example

* Download and extract the zip file from the master branch.
* Run `npm install` the app dependencies in the unzipped directory. This would fetch a prebuilt release of agora electron sdk.
* Navigate to `./renderer.js` and edit line 10 to enter your App ID that we generated.
* Open a terminal and execute `npm start`.

The app uses `test` as the channel name.

