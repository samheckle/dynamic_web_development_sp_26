# Week 6 - 2/26/26

## Agenda

1. Final Project Concept Critique
2. Final Project AMA
3. Incorporating p5.js in our sites
4. [Assignment](#assignment)
5. [Misc Links](#misc)

---

## Final Project Concept Critique

- Work with a new person
- 7 minutes: _without_ talking to the other person, write notes and feedback about their concept and sketch.
  - Offer up options for alternative visual style
  - Think about related projects and aesthetics
  - Is their concept clear? How can it be improved?
  - Who is the audience?
- 3 minutes: Exchange your papers and annotate their notes on your project
- 10 minutes: talk with your partner to share notes, suggestions, questions, other feedback

## Final Project AMA

What seems difficult or challenging at this moment? What skills do you think you have yet to know?

- p5.js
- authentication
- dynamic pages in express
- ???

## Incorporating p5.js into our sites

[p5 Instance Mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode) allows us to incorporate using p5 (and multiple p5 sketches) in one web page. 

## Introduction to Cookies, Sessions, and Authentication

### What is a Cookie?

First of all, what are cookies? Specifically, we are talking about an HTTP cookie, a web cookie, or a browser cookie. **A cookie is a small piece of data that a server sends to a user's web browser.** The browser may store the cookie and send it back to the same server with later requests. Typically, an HTTP cookie is used to tell if two requests come from the same browser — keeping a user logged in, for example. It remembers stateful information for the stateless HTTP protocol.

P.S. stateless HTTP protocol means that there is no link between two requests being successively carried out on the same connection, which is problematic for users attempting to interact with certain pages coherently.

Cookies were once used for general client-side storage. While this made sense when they were the only way to store data on the client, modern storage APIs are now recommended. **Cookies are sent with every request, so they can worsen performance** (especially for mobile data connections).

**Note:** To see stored cookies (and other storage that a web page can use), view, edit, and delete a page's cookies with [Chrome DevTools](https://developer.chrome.com/docs/devtools/storage/cookies/).

#### Cookies are mainly used for three purposes:

1. Session management - Logins, shopping carts, game scores, or anything else the server should remember
2. Personalization - User preferences, themes, and other settings
3. Tracking - Recording and analyzing user behavior

#### Drawbacks of cookies:

- Cookies are included with every HTTP request, thereby slowing down your web application by transmitting the same data.
- Cookies are included with every HTTP request, thereby sending data unencrypted over the internet.
- Cookies are limited to about 4 KB of data. Not enough to store required data.

### What is a Session?

The `Session Storage` is designed for scenarios where the user is carrying out a single transaction, but could be carrying out multiple transactions in different windows at the same time.

Imagine the scenario when a user is buying plane tickets in two different windows, using the same site. If the site used cookies to keep track of which ticket the user was buying, then as the user clicked from page to page in both windows, the ticket currently being purchased would "leak" from one window to the other, potentially causing the user to buy two tickets for the same flight without really noticing.

HTML5 introduces the `sessionStorage` attribute which would be used by the sites to add data to the session storage, and it will be accessible to any page from the same site opened in that window, i.e., **session** and as soon as you close the window, the session would be lost.

- **Session Storage has 4 methods:**
  - **`setItem()` Method –** This method takes two parameters one is key and another one is value. It is used to store the value in a particular location with the name of the key.
    ```
    sessionStorage.setItem(key, value)
    ```
  - **`getIteam()` Method –** This method takes one parameter that is key which is used to get the value stored with a particular key name.
    ```
    sessionStorage.getItem(key)
    ```
  - **`removeItem()` Method –** This is method is used to remove the value stored in the memory in reference to key.
    ```
    sessionStorage.removeItem(key)
    ```
  - **`clear()` Method –** This method is used to clear all the values stored in the session storage
    ```
    sessionStorage.clear()
    ```

### Adding Cookies, Sessions and Authentication to our Server

Install required libraries

```sh
npm install cookie-parser express-session nedb-promises-session-store bcrypt
```

Import them in our `server.js`

```js
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const nedbSessionStore = require('nedb-promises-session-store');
const bcrypt = require('bcrypt');
```

Set up our app to use cookies and sessions:

```js
app.use(cookieParser());

// setting up the session db creation
const nedbSessionInit = nedbSessionStore({
	connect: expressSession,
	filename: 'sessions.txt',
});
// linking app to use session db
app.use(
	expressSession({
		store: nedbSessionInit,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24 * 365, // after a year, delete the session
		},
		secret: 'thisismysecretkey',
	}),
);
let userdb = new nedb({
	filename: 'userdb.txt',
	autoload: true,
});
```

In our html files, let's create a `register.html` and a `login.html`

```html
<!-- register.html -->
<div class="form-container">
	<h1> Register for a new account!</h1>
	<form method="POST" action="/signup" enctype="multipart/form-data">
		<div class="register-content-container">
			<input
				type="text"
				name="fullname"
				placeholder="your full name"
				class="login-full-name" />

			<input
				type="text"
				name="username"
				placeholder="choose a username"
				class="login-username" />

			<input
				type="password"
				name="password"
				placeholder="choose a password"
				class="login-password" />

			<input type="submit" value="make my account!" class="submit-btn" />
		</div>
	</form>
</div>
```

```html
<!-- login.html -->
<div class="form-container">
	<h1>login</h1>
	<form method="POST" action="/authenticate">
		<input type="text" name="username" placeholder="username" />
		<input type="password" name="password" placeholder="password" />
		<input type="submit" name="submitbutton" value="login" class="submit-btn" />
	</form>
</div>
<a href="/register"> Don't have an account? Register here.</a>
```

Set up our routes to handle each POST request on our forms:

```js
// sign up for register form
app.post('/signup', upload.single('profilePicture'), (req, res) => {
	let hashedPassword = bcrypt.hashSync(req.body.password, 10);
	let newUser = {
		username: req.body.username,
		fullname: req.body.fullname,
		password: hashedPassword,
	};

	userdb.insert(newUser, (err, insertedData) => {
		res.redirect('/login');
	});
});

// authentication for login form
app.post('/authenticate', (req, res) => {
	let loginAttempt = {
		username: req.body.username,
		password: req.body.password,
	};

	let searchUser = {
		username: loginAttempt.username,
	};

	userdb.findOne(searchUser, (err, foundUser) => {
		if (foundUser == null || err) {
			console.log('username not found');
			res.redirect('/login?user=null');
		} else {
			let encPass = foundUser.password;
			if (bcrypt.compareSync(loginAttempt.password, encPass)) {
				let session = req.session;
				session.loggedInUser = foundUser.username;
				res.redirect('/');
			} else {
				res.redirect('/login?password=invalid');
			}
		}
	});
});
```

## Dynamic Pages in Express

We can add special parameters in each route to create unique pages, known as route parameters. They utilize the `:` to signify what the parameter might be. We can retrieve the unique url using `req.params`, just like we would do with `req.query` or `req.body`. 

```js
app.get('/users/:userId', (req, res) => {
  res.send(req.params)
})
```

We might want to use this information to display unique profile data, which we can dynamically create with front-end javascript.

## Assignment

Week 7 -- Completed project submitted to our class google form.

Requirements:

Server-side:

- `server.js` with appropriate app routes.
- Hosted on DigitalOcean droplet (your live site link should be http://123.456.789/final)

Database:

- `nedb` datastore

Client-side:

- HTML / CSS / Client JS
- Assets (Images, Fonts, Videos)

Documentation:

- Following our documentation [guidelines](https://samheckle.github.io/how-to/write-good-documentation)
