// index.js
// where your node app starts

/*
	About this file:
		-> This is the index.js file for the project 
		-> This contains the app for the project, which we are writing in JavaScript
		-> This combines the methods used in the three courses for the content covered earlier 
*/

/*
	Initialise constants for the project:
		-> In this section of the course, we are initialising the values of the variables which are used throughout the project
		-> The first variable imports the Express module for the project: 
			-> We are importing the Express.js web application framework
			-> The project is a Node.js app 
			-> We can then use the express variable to create an instance of the Express application

		-> The next variable sets up the express app which we are using:
			-> We are creating an instance of the Express application 
			-> This is stored in the content called app 
			-> This is the instance of the Express application which is used throughout the project -> e.g to handle HTTP requests and 
          for the middleware in the application 

		-> The next variable sets up the port in a constant: 
			-> This variable stores the value of the port which we want to listen to 
			-> In the terminal when you run the application using npm start, the browser then listens to this port number -> and you run 
          the application by going to http://localhost:3000/api/
			-> This is the variable which stores the number of the port which we want the application to listen to 
			-> It's just storing the number of the port (not telling it to listen to it)

		-> We then import the cors module:
			-> Require is the method we use in Node.js to include external functions 
			-> We are storing the exported features from the module into this constant 
			-> CORS (Cross-Origin Resource Sharing) <- this is for middleware (secure cross-connection)
*/

const express = require("express");
const app = express();
const port = 3000;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");

/*
	This section applies the .use() method for the application, with two lines of JavaScript: 
		-> This contains all of the times it has been used throughout the application (twice)	
		-> Both of these use cases of the .use() method are to set up the middleware for the Express application we just created an instance of 
		-> This adds information between the server at the backend and the client making the callback request 
		-> The entity we use to do this is called middleware <- in between the incoming request and route handlers 

		-> The first use of this method tells the application to apply CORS middleware:
			-> This line sets up the middleware for the application which uses the external cors functions we just imported 
			-> There are HTTP options which are sent before the actual request -> the property we are targeting here tells the application which 
          message to send back when doing this
			-> This is done using the optionsSuccessStatus property 
			-> All of this is for HTTP requests -> it's an HTTP options request 
			-> We are telling the application to use the CORS middleware for secure communications, and which HTTP status code to use when doing this 

		-> The second line this method is used tells the application where on the server the files we want to send the client are: 
			-> This is a built-in Express function 
			-> Since this uses the .use() method, this again targets the function's middleware 
			-> These functions can be used to alter information in between when the client sends a call and when the server responds 
			-> We are telling the server to provide files from the `public` directory 
			-> We are serving static files (the files are static and not changing while we serve them)
*/

app.use(cors({ optionsSuccessStatus: 200 })); // don't use 204, this can be slow on legacy browsers

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html

/*
	This section applies the .get() method for the application: 
		-> This contains all of the times it has been used throughout the application (three times)	
		
		The first time the .get() method is used:
			-> This is for HTTP GET requests sent to the server
			-> The first argument of this function is a path and the second is for error handling 
				-> Since this method (the .get method) is being used to serve the project index.html file, it makes sense that the arguments of the 
            function that we use for error handling are req and res
				-> These are request and response objects 
				-> By having served a static index.html file, we void the need for more complex error handling in this use of the get() method - of 
            which there are three and this is first 
			-> The code inside the use of this method retrieves (serves) the project HTML file 
				-> The project index.html file is contained at the backend 
				-> When the client accesses this microservice, they make a get request to this server 
				-> Since the microservice is provided on an index.html file stored on this server, in the code under this section we are telling the 
            server to send back this index.html file 
				-> A get request is an HTTP request made to the server on the backend 
				-> We are doing this using the .sendFile method 
					-> This tells the server on the backend to send the index.html file for the project back to the client when the get call is made 
					-> This index.html file is stored on that backend server
						-> So in the argument for this function, we need an absolute path to this file on the backend server 
						-> The first half of this is the directory name of the current module (`__dirname`) and the second half is pertaining to the 
                boilerplate code file tree structure
			-> This is such that when get requests are made on the client side, the server responds with the index.html file that is stored on 
          the backend and which contains the HTML for the micro service  
*/

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

/*
	The second use of the .get method in this JavaScript document <- the first API endpoint
		An outline of get requests: 
			-> We have the client and the server
			-> We want to send information from the server to the client 	
			-> So the client makes a get request for that information 
			-> This sends the server a request object
			-> The server is a literal computer -> with its own directories, and files stored in those directories 
			-> So the get request which the client makes to that server is telling the server which directory for it to
          look in to return that information which we want to return 
			-> If the server finds the information, then it is sent back to the client as a response object 
			-> If this fails, then a JSON response object is sent back in the form of an error message
			-> The syntax of the information which is sent between the client and the server is in the form of a JSON (JavaScript)
          objects 
			-> The get method is an HTTP method, and broadly these are `req`(request) and `res` (response) objects 

		-> There are three uses of the get method in this JavaScript file, this is the second 
		-> We are searching for the response object in the `api` directory in the server on the backend 

		Why use res.json:
			-> The client makes a get request to the server <- telling it to get information 
			-> The server searches for that information and finds it in its api directory 
			-> Once it's found the information, it wants to send it back as a response (`res`) object to the client 
			-> Before we send it back, we want to convert it into a JSON (JavaScript) object
			-> This method is telling the server on the backend to convert that information into a JSON object before sending it back 

		The information we want to send back to the client in this use of the get method:
			-> This is the JavaScript for a micro service application 
			-> That micro service is providing the data and time that the client's get request was made 
			-> So the json object which the server is responding with use methods to get that information 
			-> This is, in the first case, following the Unix convention - and in the second, the current UTC (Coordinated Universal 
            Representation)

    Overall:
		  -> Overall, the client sends a get request to the server, and the server responds with a JSON (JavaScript) object that sends 
        the date and time that the get request was made at 
		  -> This is an example of time handling through an API endpoint 
*/

app.get("/api", function (req, res) {
  res.json({
    unix: new Date().getTime(),
    utc: new Date().toUTCString(),
  });
});

/*
	The third use of the .get method in this JavaScript document <- the second API endpoint
		-> Either the user enters something into the timestamp micro service, or they don't 
			-> If they don't but they still make a get request -> then we return the time in the syntax which the previous 
          get request handled 
				-> The server is looking in the directory which we tell it to make that response with 
		-> Then if they make a get request and they enter something into the micro service 
			-> That gets sent from the client to the server in the form of a request object 
			-> The server looks in the apis directory -> which operates by the block of logic which this JavaScript sets out 
			-> This entire block of code handles get requests for the server, assuming that the request object is not empty 
				-> The previous block handled get requests assuming that the request object was empty 
			-> When the request object (containing the repose of the user) reaches the server, the server looks in its api 
          directory 
			-> It the contents of the request object contains a time entered by the user into the micro service in Regex syntax, 
          then the server responds with a JSON object in a specific syntax 
				-> A JSON object being a JavaScript object 
			-> If the syntax in the request object isn't in Regex, but it matches one which is set out in this block of code, a 
          response is still returned 
			-> Id the syntax of the request object not empty and something has been entered which is not in the typical syntax for
          a date or time (or both), we return an error message
			-> If the request object is not empty and does not contain text (e.g if the client using the micro service clicked on 
            the search field, typed no text, then hit enter) -> in comparison to didn't click on the search field at all (which 
            which would have been the first get response, not this one)
			-> So, this is the case where the client makes a get request and sends a request object which is empty -> in which case 
          return the response object with the date and time in the syntax that we specify  
		-> We are setting up route handling for HTTP GET requests <- get requests are an HTTP method 
			-> The date and time which this entire block of code uses follow the syntax for Regex and Unix -> an ISO date pattern 
			-> The server is reposting with JSON (JavaScript) objects with the standard syntaxes for those dates and times - these 
          are also referred to as timestamps 
*/

app.get("/api/:date_string", (req, res) => {
  const dateString = req.params.date_string;
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const timestampRegex = /^\d{13}$/;

  if (isoDateRegex.test(dateString)) {
    res.json({
      unix: new Date(dateString).getTime(),
      utc: new Date(dateString).toUTCString(),
    });
  } else if (timestampRegex.test(dateString)) {
    res.json({
      unix: new Date(parseInt(dateString)).getTime(),
      utc: new Date(parseInt(dateString)).toUTCString(),
    });
  } else if (new Date(dateString).toString() === "Invalid Date") {
    res.json({
      error: "Invalid Date",
    });
  } else {
    const dateObj = new Date(dateString);
    const isoDateString = dateObj.toISOString();
    res.json({
      unix: new Date(isoDateString).getTime(),
      utc: new Date(isoDateString).toUTCString(),
    });
  }
});

/*
	Telling the server to listen to a port for requests from the client:
		-> This section of code uses the Express.js listen method 
		-> We are starting the server and telling it the name of the port to listen to for requests from the client 
		-> The number of the port the server is listening to is stored in the variable called port -> the value of this 
        was set earlier in the code 
		-> The server is listening to the port -> we are telling it to listen to this 

	The code inside the function:
		-> The code inside this use of the listen method is telling the console to log a certain message <- this is an 
        arrow function 
		-> The server listens to the port - the number of that port is specified above
		-> Then if the client makes a call to that port, the server picks it up because it's listening 
		-> In which case, this section of code is telling it which message to log to the console
		-> This is the message which shows in the terminal when you tell the server (your local computer in this case) to 
        listen to a certain port 
			-> After this is done, you can go to the microservice URL in the browser and use the service 

	-> We are starting the Express.js server and making it listen on the specified port (`port`)
	-> Then once this is done, we are logging it in a message
	-> We are then telling the server to handle the incoming requests on that port 
*/
app.listen(port, () => {
  console.log("Your app is listening on port " + " " + port);
});
