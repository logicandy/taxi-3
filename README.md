## Getting Started with Taxi application

### Environment


**For successful running Taxi app on your machine**
**you’ll need to have Node >= 6 and npm >= 3 on your local machine**.


### Installation

First of all you need to clone our repository:

```sh
git clone https://github.com/dantix/taxi.git
```

It will create a directory called `taxi-master` inside the current folder.<br>
Inside that directory, you will be able to see application files.

Then, you will need to open your bash and type your local path to `taxi-master`
and install all dependencies from package.json file, so just type in your current bash
```sh
npm i 
```

After all installations you will be able to run the app. 

### Development mode

#### `npm start`
For running the app in development mode, you need to type a command mentioned below:<br>

```sh
process.env.REACT_APP_API_URI=http://localhost:8000 npm start
```

the path `http://localhost:8000`, that assigned to `process.env.REACT_APP_API_URI` 
 variable, can be overwritten by your own path where server is running.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

#### `npm test`

Runs the test watcher in an interactive mode:

```sh
npm test
```
  
By default, runs tests related to files changes since the last commit.

### Deployment mode

#### `npm run build`

Builds the app for production to the `build` folder.<br>

```sh
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>
After this command application is ready to be deployed!

