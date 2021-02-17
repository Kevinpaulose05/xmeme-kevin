<h1 align="center">
🌐 XMeme
</h1>
<p align="center">
MongoDB, Expressjs, React, Nodejs, Material-UI
</p>

A simple MERN stack application that allows users to post and see their favourite memes.

The deployed app (both frontend and backend together) can be found here - https://xmeme-kevinpaulose.herokuapp.com/

The backend can be accessed here -https://xmeme-kevinpaulose.herokuapp.com/api/v1/memes . Other backend paths need to be manually put in order to view them.

## Getting started

### Setting up a project

* Move into your projects directory: `cd ~/YOUR_PROJECTS_DIRECTORY`
* Clone this repository: `git clone https://github.com/mern-stack-template YOUR_PROJECT_NAME`
* Move into the project directory: `cd YOUR_PROJECT_NAME`
* Install the dependencies and start the development servers (automatically rebuilds when any of your files change): 
    - Backend ((port 8081 default):
        ```
        npm install
        npm start
        ```

    - Frontend (port 8080 default):
        ```
        cd client
        npm install
        npm start
        ```
* Create a new repo on GitHub: https://github.com/new
    * Make sure the "Initialize this repository with a README" option is left unchecked
* Update the remote to point to your GitHub repository: `git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`

## Directory layout

`Client` : Contains the entire frontend code for the create-react-app. Specifically ./src/components contains all the app's components (*meme cards, layout, content, top bar*).

`Root` : The default (or root) directory contains the backend code (*controllers, models, routes, utils, .env, app.js, server.js, package.json*).

## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

To build the app prior to the deployment do `npm run build` in `Client` directory (check Build folder in client).

---------------

A shortcoming to be noted is that I have provided my environment variables in the .env file. It is requested of new users to use their own MongoDB cluster's connection URLs and passwords.

I have added extra functionalities like swagger docs, meme editing, meme deleting, pagination and some more! 

# <img src="https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SWU-logo-clr.png" width="300">

Swagger docs - https://app.swaggerhub.com/apis-docs/Kevinpaulose/Xmeme/1.0.2

## Process followed by me to test my app using an AWS EC2 instance:

After cloning my repo into the EC2 instance and then cd into the repo I did the following commands - 

**For installing and configuring MongoDB on AWS EC2 linux instance** -

Step 1: Create a file using nano or any other editor for MongoDB

> sudo nano /etc/yum.repos.d/mongodb-org-4.0.repo

and added the below content in the above file:

```
[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```

Step 2: Install MongoDB using below command

> sudo yum install -y mongodb-org

Step 3: Start MongoDB service using below command

> sudo service mongod start

Step 4: Start MongoDB on EC2 instance reboot

> sudo chkconfig mongod on

Now MongoDB is installed in the linux instance.

**Then to deploy Node.js application on AWS with Github** -

> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

>. ~/.nvm/nvm.sh

> nvm install node

> node -v 

>  npm -v

>sudo yum update -y

>sudo yum install git -y

>git -- version

> git clone https://gitlab.crio.do/COHORT_ME_BUILDOUT_XMEME_ENROLL_1612436694845/kevinpaulose35-me_buildout_xmeme.git

>cd kevinpaulose35-me_buildout_xmeme

>npm install

> node server.js

And finally after configuring security groups to access via public URL (custom TCP on port 8081 with source-anywhere) I could successfully access my HTTP server instance where was app was launched.

**NOTE**: Since Crio guidelines follows apt instead of yum I have given the commands accordingly in the .sh files. Hope it works just fine.
