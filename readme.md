### Meanbase
A a CMS built on the MEAN stack and made to be simple and intuitive for users and developers.


![Meanbase Screenshot](meanbase-screenshot.png?raw=true "Meanbase Screenshot")

#### Backend
![Meanbase Screenshot Backend](meanbase-screenshot-backend.png?raw=true "Meanbase Screenshot Backend")


A CMS allows you to put control of the website into a user's hands so you don't have to be called everytime they need to make small changes. It means you can focus on the fun things like building themes and extensions while your customers can write the content themselves.

#### Simple
Meanbase is designed from the ground up to be simple for an average user to learn so you can hand over your product for them to update without stress and training.

#### Fast

Meanbase CMS runs off of the MEAN stack: Mongo, Express, Angular, and Node meaning it's generally faster than wordpress so you don't have to wait for every page to refresh when making edits.

#### Developer Friendly
Meanbase is also focused on making the process of creating themes and adding extensions delightful for developers who have to interact with the code every day. It's provides you control and simplicity so you can spend more time focusing on what matters.

#### Run Development Mode
- Install GraphicsMagick, nginx, and MongoDB
  - `sudo apt-get install -y graphicsmagick`
  - `sudo apt-get install nginx`
  - `sudo apt-get install mongodb-server`
- Start Mongodb in one terminal or cmd
	- `mongod`
- Run the app from the meanbase-1.0.0 folder in another terminal or cmd
	- `gulp serve`
- See app
	- Open `localhost:9000` in your browser
- Stop each with ctrl-c

#### Gulp Commands
- gulp install
- gulp serve
- gulp build-all
- gulp serve-dist
- gulp test


### Deploy
Create a file called `meanbase.env` in the root of this project don't share it with anyone or attach it to your repo, this will contain your app secret for encrypting passwords and such. At a minimum this file needs these variables
```
APP_SECRET=your-app-secret
NODE_ENV=production
MONGODB_URL_PRODUCTION=mongodb://db/meanbase
```
_NOTE: The MongoDB instances can be whatever url you want_

Run

```gulp build-all```

To create the dist folder

Makes sure you can make password-less ssh into your host server.

`ssh-copy-id user@your-server-ip-address`


Connect to your docker host server
```
docker-machine create --driver generic --generic-ip-address=your-server-ip-address you-custom-machine-name
```

then

```docker-compose up -d```

_NOTE: Parts of the theme are still in development such as cropping and editing images, but for now you can edit locally and then upload._

##MIT LICENSE

Copyright 2013-2015 Jon Paul Miles codingfriend1@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
