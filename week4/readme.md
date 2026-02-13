# Week 4 - 2/12/26

## Agenda

1. Introduction to Servers
2. Setting Up Digital Ocean
3. If Time: Project Share
4. [Assignment](#assignment)
5. [Misc Links](#misc)

---

## Introduction to Servers

### Node.js, npm, and Express

| Module              | Library                      | Framework                                      | Runtime Environment    |
| ------------------- | ---------------------------- | ---------------------------------------------- | ---------------------- |
| fingers             | hands                        | body                                           | environment            |
| part of the program | interact with other programs | complete system                                | how the program is run |
| `server.js`         | `Express.js`, `p5.js`        | `React.js`, `Ember.js`, `Vue.js`, `Angular.js` | `Node.js`              |

from [modules, libraries, and frameworks](https://stackoverflow.com/questions/4099975/difference-between-a-module-library-and-a-framework)

#### Node.js

A runtime environment (or engine) to run JavaScript as a standalone application using frameworks and modules.

From [Node.js docs](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser):

> Node.js apps bring with them a huge advantage: the comfort of programming everything - the frontend and the backend - in a single language.

#### npm

**N**ode **P**ackage **M**anager, which gives us _access_ to frameworks and modules, kept track in `package.json`

#### Express.js

A Node framework to create web applications.

#### Local: Setting Up a Server On Our Computer

On your computer, create a new week4 folder inside your `dynamic-web-dev` folder, then open VS Code. Ideally, you should open it in the folder that you will be using to follow along with this class demo. For example, my folder I will open will be `/Users/samheckle/dev/spring-26/dwd-sp-26/week4/` instead of the base `dwd-sp-26` folder. The reason this is helpful is so that when we open the terminal in VS Code, we will already be inside the correct folder in the terminal.

Open the terminal in VS Code and run:

```bash
npm init
```

and **hit enter for all the questions you get asked** (you can fill in answers, but the defaults work fine.) This initializes our node project.

Once the project is initialized, we need to install an external library called Express JS. [Express](http://expressjs.com/) is a small, easy to use framework which allows us to create web servers in node without having to write too much code. It’s the library that does all the heavy lifting in allowing us to create a web server.

Run the following command in order to add `express` as a dependency to the current project:

```bash
npm install express
```

At this point, if you run `ls`, you should see the following files in your folder:

- `node_modules` → this is the folder where all our project dependencies get saved. If you run `ls node_modules`, you will see a handful of results. `express` will be one of them, the other ones are dependencies of `express`.
- `package.json` → this is our node project configuration file. It specifies some metadata about our node project, as well as our dependencies. If you run `cat package.json`, you’ll be able to see that `express` appears under the `dependencies` section of the file.
- `package-lock.json` → we don’t care about this file, it’s used by node internally to keep track of exact library versions for the entire dependency tree.

This is the default barebones structure of a node project, so you should get used to seeing `node_modules` and `package.json` around. The only thing that’s missing is some actual code to define and run our web server.

#### Local: Creating a server.js file

Open your code editor and create a new file, under the name `server.js`.

#### Breaking down the `server.js`

Below is the order that the `server.js` code will exist.

1. Import libraries into a global variable  
   `require` is syntax to import a library into our file. In our case, we are importing the Express library.

```js
const express = require("express");
```

---

2. Use libraries to create another global variable  
   Creates an Express application, which uses the library (via the `express` variable) we just imported.

```js
const app = express();
```

This is kind of similar to using `new` to create an instance of a new [Class in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

---

3. Middleware

```js
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
```

Adds the `public/` folder to serve static files. This will include any `.css`, `.html`, and `.js` that is used in the front-end. This again uses the `express` variable to go to the path in which the static files exist. See [`express.static()`](https://expressjs.com/en/5x/api.html#express.static). This is a "middleware" function.
Middleware needs to be added with [`app.use()`](https://expressjs.com/en/5x/api.html#app.use)

The `urlencoded` function allows us to process the body of requests, so we can use POST inside of forms. 

---

4. Set up our routing.  
   We set up our `GET` request in this first example.

```js
app.get("/", (request, response) => {
  response.send("server is working");
});
```

##### first parameter: route

**What is a “route”?**

Routing or router is a mechanism where HTTP requests are routed to the code that handles them. To put simply, in the router you determine what should happen when a user visits a certain page. In other words, it is how a web server responds based on the request’s “path”.

**What is the “[path](https://zvelo.com/anatomy-of-full-path-url-hostname-protocol-path-more/)”?**

Think about it this way: a URL is a destination; a route is how you navigate to get there. Each URL (Uniform Resource Locator) is effectively a unique web address. It represents the “location” of a specific resource on the internet. Depending on the URL, it may contain different structural elements, but there are four elements that are always present:

- Top Level Domain (TLD)
  - com, .net, .org, .edu, etc.
- Domain Name
  - e.g. (in bold) **apple**.com, **amazon**.com, **google**.com, etc.
- Protocol (always present, not always visible)
  - most common seen as **HTTP** and **HTTPS** (secure)
- Path / File (always present, not always visible)
  - e.g. (in bold) https://www.example.com/blog/category/individual-article-name/

In addition to identifying the web resource, [URIs](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) (Uniform Resource Indicators) provides the means of locating it. Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and [so on](https://expressjs.com/en/4x/api.html#app.METHOD)).

From [Express docs](https://expressjs.com/en/guide/routing.html):

> Routing refers to how an application’s endpoints (URIs) respond to client requests.

The `/` is the location that this function is called when that specific url is hit in the browser. `/` is the default url eg. `http://159.89.85.172/`. Everything that comes after the last digit is a part of the route.

Every url we want to customize now needs to have a specific `app.get` for it.

##### second parameter: callback

This is an anonymous function that takes two parameters `(request, response) => {}`

- `request` is data coming FROM the user
- `response` is data SENT TO the user

These are automatically populated by Express for us to use.
We can send a response using [`response.send()`](https://expressjs.com/en/5x/api.html#res.send). This allows us to send html inside of strings to format our code.

We can also redirect the route to another route

```js
res.redirect("/");
```

We can also "mask" filenames by creating a route and sending the file:

```js
response.sendFile("guestbook.html", { root: "./public" });
```

5. Listen for requests  
   Tells the node app to listen to requests on the particular port. This is the absolute last thing you want to do on your server.

```js
app.listen(5001, () => {
  console.log("server is running");
});
```

It is somewhat of an arbitrary number where your server lives at on your droplet. You can customize this number, except for ports that are already in use on your computer and [default ports](https://en.wikipedia.org/wiki/Port_%28computer_networking%29)

We can run our local server by writing in terminal:

```sh
node server.js
```

Open a web browser and navigate to `http://localhost:8000/test` OR `http://127.0.0.1:8000/test`. You should see a simple page saying `Test: Server is working`, while your terminal shows `App listening on port 8000`.

Now if we were to make any changes to our server, we would need to close and restart the server every time, using CTRL+C and re-writing `node server.js`. This is a bit cumbersome, so we can use a developer tool to "watch" our server file for any changes. We will be using the `nodemon` tool that helps develop node.js based applications by **automatically restarting the node application when file changes in the directory are detected**.

While you are in the same folder in terminal, install `nodemon` watcher for development (might need `sudo npm install -g nodemon`). Before you do this, you might want to stop the server using the hotkey `CTRL + C`

```sh
npm install -g nodemon
```

Once it is installed, we need to run it:

```sh
nodemon server.js
```

If this command does not work, you might need to append `npx`, like `npx nodemon server.js`.

##### Exposing the `public` directory for static files

If we want files in our `public` directory to be accessible to the web browser (remember how so far we’ve been adding all our `.html`, `.css` and `.js` files to the `public` directory), we need to explicitly tell Express to do so:

```jsx
const express = require("express");

const app =
  express() **
  // Tell Express to look in the "public" folder for any files first
  (app.use(express.static("public")) **
    app.get("/test", (request, response) => {
      response.send("Test: Server is working");
    }));

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
```

##### Sending Data From Client → Server

###### GET and `query`

We can construct a `query` using [`URLSearchParams()`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams). The query is everything that comes after a `?` in a url, and we can retrieve that information on the server-side using `request.query`.

| Client-side                            | Server-side                     |
| --------------------------------------- | -------------------------------- |
| `<form action="/submit" method="GET">`  | `app.get('/submit', (req, res))` |
| `<input type="text" name="customName">` | `req.query.customName`           |

###### POST and `body`

We can construct a `body` using the options inside of a fetch request. The body is an object that comes through in the data of the request, so we can only see it by viewing the networking tab in our browser. We can retrieve that information on the server-side using `request.body`.

| Client-side                              | Server-side                       |
| ---------------------------------------- | --------------------------------- |
| `<form  action="/upload" method="POST">` | `app.post('/upload', (req, res))` |
| `<input type="text" name="customName">`  | `req.body.customName`             |

In order to use `req.body`, we need to include the `app.use(express.urlencoded({ extended: true }));` in the middleware.

###### HTML Forms

Client HTML:

```html
<html>
  <head> </head>

  <body>
    <h2> Sign my guestbook </h2>

    <form class="the-form" method="POST" action="/submit">
      <input type="text" name="username" value="" />
      <textarea name="message" value=""></textarea>
      <input type="submit" name="submitbutton" value="Submit" />
    </form>
  </body>
</html>
```

Server JS:

```jsx
const express = require("express");

const app = express();
app.use(express.static("public"));

let receivedData = [];

// This is the endpoint which receives the form's submitted data.
app.post("/submit", (request, response) => {
  // Since our form's method is POST, we use app.get to handle the request.
  // Our form's action attribute is "/submit", so
  // the endpoint we create is called "/submit".

  // request.query contains the data that was submitted in the form.
  console.log(request.body);

  // The "name" attribute on items inside of the form serves as the key inside of the request.query object.
  // For example, our <textarea> element which holds the message has a name attribute of "message",
  // So we can access its value (the text entered by the user) through "request.query.message".
  console.log(request.body.message);

  // We add all of our data to an array, so we can also display it through the /messages endpoint.
  receivedData.push({
    user: request.body.username,
    message: request.body.message,
  });

  // We add a personalized follow-up message.
  response.send("Thank you for your submission, " + request.query.username);
});

app.listen(8000, function () {
  console.log("App listening on port 8000");
});
```

##### Sending Data From Server → Client

In server.js, create a new route:

```js
// This is an endpoint we can access to view all messages.
app.get("/messages", (request, response) => {
  if (receivedData.length == 0) {
    // If we don't have any data, we send an appropriate message
    response.send("No messages yet...");
  } else {
    // This will send a JSON response, populated with our data array.
    response.json({ messages: receivedData });
  }
});
```

This could be accessed on our client by going to the `/messages` route in the URL, but we can also get the json data.

In our client javascript (main.js):

```js
const getMessages = async () => {
    let response = await fetch('/messages')
    let json = await response.json()
}
```

This is super similar to how we worked with an API last week (if not exactly the same!)

## Setting Up Digital Ocean

### Web Hosting on Digital Ocean

In order to have a website that’s publicly accessible on the Internet, it needs to be hosted on a computer with a static, [public IP address](https://help.keenetic.com/hc/en-us/articles/213965789-What-is-the-difference-between-a-public-and-private-IP-address-). Our laptops generally don’t have that — they get assigned private (or local) IPs when connecting to a WiFi (or wired) network, and the public IP is a few layers “above” in the network topology. While it’s possible to expose your laptop’s IP to the internet, it’s much easier to use services which offer that as a feature.

[Digital Ocean](https://digitalocean.com) is one such provider. A few alternatives are Amazon Web Services, Google Cloud Platform, or Microsoft Azure Cloud, but for this class we will use Digital Ocean.

Digital Ocean offers a suite of different services, but for now we are only interested in **Droplets**. A droplet is a Linux-based virtual machine (VM) which can be used for web hosting (and for many other things – for all intents and purposes, it’s a full computer capable of running any software that works on Linux.) Droplets, conveniently, also have publicly exposed IP addresses, so by the end of this tutorial we’ll have a website up and running _on the internet_.

**\*Note**: We are basically renting a virtual server from Digital Ocean, which generally costs money. The lowest-tier server we can rent costs $5 per month, with the first 2 months free. So **you will need a credit card to sign up** for Digital Ocean, and you shouldn't get charged for this class unless you have already used up your credits.

_If you don’t feel comfortable doing this for any reason, send me an email (sam.heckle@nyu.edu) and I’m happy to discuss alternatives._

#### 💧 Remote: Create a Digital Ocean droplet 💧

Prerequisites: You should have already installed Node.js and Cyberduck on your computer and created a DigitalOcean account, as per the [course tools](../tools.md).

**Step 1** Navigate to [https://cloud.digitalocean.com/](https://cloud.digitalocean.com/); this is your Digital Ocean control panel, and where we’ll create our droplet from. On the left-hand side menu, click on `Droplets`, and then hit the `Create Droplet` button.

**Step 2** Configure your Droplet.

1. Choose your region: I default to New York since it is the closest one to us.
2. Choose the Datacenter: Default
   - If you are not given the option to create the $4 droplet on step 6, you might need to change the datacenter here.
3. Make sure the `Ubuntu` option is chosen in the first row. Ubuntu is the Linux distribution we’ll be using for this class.
4. The version is `24.04 (LTS) x64` in the dropdown menu.
5. Choose the `Basic` plan.
6. For `CPU options` make sure to choose the `Regular` option, with the $4/mo pricing package. This is the cheapest option available to us, and the computing power will be sufficient for our needs. They hide this option from you, so you might need to scroll to the left.
   - If the $4 option is greyed out, you need to change your datacenter on step 2.
7. Under `Authentication`, make sure the `Password` option is selected (as opposed to `SSH keys`), and don’t forget to enter a password for your account on this server. **Make sure to remember this password, you’ll need it to access your droplet.**
8. You can give your droplet a name, at the bottom under `Choose a hostname`. I named mine `sam-dwd`.
9. Everything else is fine with the default options.

**Step 3:** Hit `Create Droplet` and, after a few seconds, the initialization should be complete. Notice the IP address written to the right of your droplet name, and save it somewhere (`137.184.151.138` in the image below, yours will be different). That’s where your website(s) will live.

#### ⚡ Connecting to your droplet ⚡

Congratulations, you now have a server running _in the cloud!_

In order to connect to it, we will use `ssh`. `ssh` stands for “Secure Shell”, and it’s a simple (and secure) protocol for connecting to a computer remotely. Through `ssh` we get access to the remote computer’s command line.

Open up your **Terminal** (or GitBash if you are on Windows,) and type the following command (replace `YOUR_IP` with the IP address your droplet shows in the Digital Ocean interface):

```bash
ssh root@YOUR_IP
```

You will be prompted for a password – that is the root password you set when creating the Droplet in the Digital Ocean interface.

In the command above, `root` is the user we are connecting as – it’s what the Digital Ocean droplet sets up for us as a default. There’s [more to say about what the root user is on Linux](https://en.wikipedia.org/wiki/Superuser), but we won’t go into details here.

#### 💻 Remote: Initial droplet setup Installing Node JS 💻

In order to host a website on the droplet, we need to run a web server. There are many different flavors of web servers out there, but for this class we are building our own (ish) using NodeJS. Node is a Javascript-based environment used for scripting and server-side applications. Simply put, it’s the thing (one thing) that allows us to run Javascript outside of the browser. We like that, because it means we don’t need to learn a different programming language for the website’s backend: everything can be Javascript.

In order to start using node, we first need to install it on the droplet. You only need to do this step once – after it’s installed, `node` will keep living on your droplet until you manually remove it. Run the following two commands:

```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

Notice in the second command that we are installing a second package called `npm` in addition to node. `npm` stands for Node Package Manager, and it’s a small piece of software which makes it _extremely easy_ to use external libraries in node projects. You can learn more about `npm` [here](https://www.npmjs.com/).

In order to check whether `node` and `npm` were properly installed, run the following two commands (`-v` is a pretty standard command line argument for checking the version of a software):

`node -v` → this should output something like `v10.19.0`. Don’t worry if you have a different version.

`npm -v` → this should output something like `6.14.4`. Again, all good if your exact version is different.

#### Remote: Uploading the server file to your droplet

[Cyberduck](https://cyberduck.io) is a piece of software which allows us to do that, using the `SFTP` protocol. `SFTP` stands for SSH File Transfer Protocol, and it’s a widely used protocol for transferring files over the internet.

_The Cyberduck instructions are MacOS specific. The software works on Windows too, but it has a different interface. Send me an email if you have trouble replicating these steps._

Once you’ve downloaded and opened Cyberduck, click on the “+” icon in the bottom-left of the window to establish a new connection.

In the dropdown at the top, pick the `SFTP (SSH File Transfer Protocol)` option, and give your connection a `nickname` in the field underneath. In the `server` field, enter the public IP address of your droplet – the same one you used to connect via ssh. Write `root` in the `username` field (remember from a previous section of this tutorial, our current user is called `root`), and type in your `password` in the next field. Once you’ve filled all these fields out, close the window.

Back in the main Cyberduck window, double-click on the newly added item, and a new Finder-like window will open, with the contents of your droplet in it.

Navigate to your local folder on your computer, and drag all of the contents inside your `networked-media` folder from your Finder window into the correct folder in the Cyberduck window. This will copy the files to the droplet.

#### Remote: Running the server

Going back to the Terminal, make sure your `ssh` connection to the droplet is still active, and, if it’s not, re-connect (`ssh root@123.456.etc`). Navigate to the project folder. When you type `ls`, you should now see the `server.js` file showing up alongside `package.json` and `node_modules`.

Start your web server by running the following command:

```bash
node server.js
```

You should see a message saying `Example app listening on port 80!` If by any chance you see a longer error instead, which mentions `Error: listen EACCES: permission denied 0.0.0.0:80`, run the server as superuser: `sudo node server.js`.

### Remote: Testing the server

Open a web browser and navigate to `[http://your.ip.address.here/test](http://your.ip.address.here/test)` (`http://137.184.151.138/test` in my case). You should see a simple page saying `Hello World!` → this is the result of the `/test` route we set up in `server.js`.

### Remote: 💤 Keeping the web server alive after you log out 💤

You will notice that if you close your terminal window, you won’t be able to access your website anymore.

This is because of how `ssh` and shell (aka terminal) sessions work. Once we connect to our droplet, we are given “a shell” – the terminal we write in, which is a child of the `ssh` connection. When we start our web server, that process becomes a child of the shell. So, when the `ssh` connection closes, all processes that are its children, grandchildren or further down the tree get closed as well.

In order to avoid that, we need an external utility which keeps our web server running even after we disconnect. There are a handful of options, but the one we will work with is called `pm2`. It also exists in the `npm` ecosystem, so you can install it like this:

`sudo npm install --global pm2`

The `--global` flag tells `npm` to install this library for the entire filesystem, as opposed to locally for a project. `pm2` is a command-line utility, so it needs to be installed globally. We’ll get more into this later in the semester.

Navigate to the folder where your web server lives, and, instead of starting your web server with the `node server.js` command, run the following:

```bash
pm2 start server.js
```

By doing this, `pm2` becomes the manager of our node web server, and, through black magic, it makes sure the server stays on even after you disconnect from `ssh`. Give it a try!

For the first few weeks, we won’t be making any changes to the server itself, so once you have this running, there’s no need to stop or restart the server. Files uploaded in the `public` folder will automatically get picked up and updated in the browser.

Once we start making changes to the server itself, we’ll learn some more about `pm2` and best development practices & workflows.

You might also need to check the status of your server:

```bash
pm2 ls
```

You can stop your server if there are any issues :)

```bash
pm2 stop all
pm2 restart server
```

You can also kill the server if for some reason stopping and restarting doesn't work

```bash
pm2 kill
```

---

## Assignment

This week you will create a JSON dataset that accepts REST requests coming in from a client-side application (that you built) to create, read, update, and delete data on your server.

Server-side requirements:

- Define API routes: `app.get()` and `app.post()`. You can also experiment with `app.put()` and `app.delete()`. See demo [server.js](https://github.com/samheckle/dynamic_web_development_sp_26/blob/main/week4/server.js), your server will look almost exactly the same with different routes.
- You should _not_ be using external storage at this time. No `require('fs')` or `__dirname` should show up in your code, nor should you be using databases yet.

Client-side requirements:

- Use `async`/`await` and `fetch()` to communicate with your server
- Transform your server data into HTML with JS. See demo [main.js](https://github.com/samheckle/dynamic_web_development_sp_26/blob/main/week4/public/main.js). Remember that all the static files (html, css, front-end js) will live in the `public/` folder.
- Simple design and layout (this is a technical practice assignment, it doesn't need to look crazy)

## Misc

- Coding Train API with Node [Playlist](https://www.youtube.com/watch?v=P-Upi9TMrBk&list=PLRqwX-V7Uu6Yyn-fBtGHfN0_xCtBwUkBp)
