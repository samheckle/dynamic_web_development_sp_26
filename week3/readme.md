# Week 3 - 2/6/26

## Agenda

1. Project Share (Only 3!)
2. Intro to the DOM
3. Intro to Events
4. Intro to API
5. [Assignment](#assignment)
6. [Misc Links](#misc)

## Intro to the DOM

Forget everything you know about p5.js, because we simply cannot use p5 graphics functionality to display things on the webpage (for now!).

### Prerequisites in JavaScript

- Basic JavaScript syntax: [Variables](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/2-define-variables) | [Incrementing](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/3-incrementation) | [Conditionals](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/1-conditionals) | [If, Else If, AND, OR](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/3-else-if-and-or)
- Mid-Level JavaScript: [Functions](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/5-functions/1-basics) | [Functions and Parameters](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/5-functions/2-arguments) | [Loops](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/4-loops/1-while-for) | [Arrays](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/1-arrays) | [Loops + Arrays](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/7-arrays/2-arrays-loops)
- Advanced: [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)

### The Document Object Model (DOM)

When running in the browser, Javascript has access to the _Document Object Model_, or the DOM of an HTML page. This is a representation of the entire HTML structure of the page, which Javascript can manipulate in order to make structure, content or styling changes. It has a tree-like structure (remember, HTML is made up of nested tags,) something like the image below:

![https://www.w3schools.com/js/pic_htmltree.gif](https://www.w3schools.com/js/pic_htmltree.gif)

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page (user events, such as clicking or key presses, we will talk about them in a future tutorial)
- JavaScript can create new HTML events in the page

### Adding Javascript to a website

Before working with the DOM, we need to first be able to import a Javascript file into our websites. This is pretty similar to how we import stylesheets, but instead of using the `link` tag we use the `script` tag.

```html
<html>
  <head>
    <script src="script.js"></script>
  </head>

  <body>
    Nothing to see here.
  </body>
</html>
```

### Waiting for the DOM to load

Interacting with the DOM can only happen _once the HTML content of the page has loaded_. Since our JS script might load before the actual HTML of the page, we need a way of _listening_ for when the HTML page has completed loading everything. Fortunately, there is an easy solution for that:

```js
window.onload = () => {
  console.log("page is fully loaded");
  init();
};

function init() {}
```

### What is `() => {}`

This is an anonymous function, which allows us to trigger a function based off an event.

"Old" JavaScript:

```js
function foo() {}
```

"New" JavaScript:

```js
const foo = () => {};
```

If you are curious about this syntax, [here is a related Coding Train video](https://www.youtube.com/watch?v=mrYMzpbFz18).

### `window.onload`

This is an event that is specific to the webpage loading. We can view the details of the load event [from the MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event). In this class, we will _always_ use the load event, instead of `DOMContentLoaded`.

The reason for this is that `window.onload` is the _last_ event to trigger when a page loads. Take a look at this [playground](https://developer.mozilla.org/en-US/play?uuid=624b9c36-c62a-41c6-9624-375d0ae85293&state=jVPBctowEP2VHaUHmIJh0kvHMbm0vdHpTNOjDxhpASWylEpyiMvw711JNnEG2uHEavfte2%2FXy4HtfK1YzgohX4CryrlFybjR3hrlSnZfaoBi3XhvNEhBNYvKVKJk4NtnpHeqEfJnLBSzlKDGYkac9EvRkBxfUPupMtueXVVrVLAxti8uY%2B1bCIFweTGLkIT2%2BOori1V4AFAgjFZtep1JTMMkFNMkHd7sA%2BBz%2F%2BY0Jb0%2FzftEnHHgopj1goOJ2IRx52hrayNaOIROId2zqtoctlaKu5AJwdRjTWmP08DgcjjtFuICCHgMC8r6jSey2Bo6cugKd%2B80NgpfY6ZScqunklSIm5NptDH%2F2DgvN20%2F%2FqCW5E4LOtOj3DnqtMYEt%2BjkH8xBG409OH6hSam7U3m%2Fk7Uy%2FKlH3qQLSpAdyu2O%2FN1arBOAdvsYVkuSLn5%2BWIAwvKlJP%2FvdoG0fUCH3xo5KdsFiycZElLo7pf8Q3PTnHJpKnV5ZJUS8vqV0xIkByJXkTyWbwGgMi%2FtknmSzcB1fkjTp0BWx%2BAEc%2Bl%2ByRtP40aABYC%2B1MPuM9lF5aXSWBEfeNjiOjccJ3M7nIT4mS13HBUvJODmKS%2Fi3rY%2FBVwQTH3tjPi3lAnf4X7XO0%2BXyXaW3eKXO6q0vhw%2BHk0JMP4T0kUysrvPw9cf3jnpJ5vHaWVdnfQNFui6%2FwxrpwFS4PHb8Cw%3D%3D&srcPrefix=%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWindow%2Fload_event%2F) to see the differences.

**Most of your frontend Javascript code will live in the function above, since that guarantees the DOM is fully loaded.**

### Different types of selectors; changing the content of an element (`html()`)

Let’s look at three different types of selectors. We’ll start with the following HTML page:

```jsx
<html>
	<head>
		<script src="script.js"></script> <!-- This is our own script -->
	</head>

	<body>
		<p> This is a paragraph </p>
		<p id="importantParagraph"> This is an important paragraph </p>
		<p class="blue-paragraph"> This is a blue paragraph </p>
		<p class="blue-paragraph"> This is another blue paragraph. </p>
	</body>
</html>
```

We have four paragraphs. One of them has no attributes, one of them has an `id`, and the other two have an identical `class` attribute. The code below uses the `innerHTML()` function inside Javascript in order to change the content of our paragraphs. Using different selectors, we can achieve different outcomes:

```jsx
window.onload = () => {
  console.log("page is fully loaded");
  document.getElementById("YourElementId").innerHTML =
    "updated content with javascript";
};
```

### Changing the styling of an element (`css()` and `addClass()`)

We can use JavaScript to directly specify CSS properties for the elements we have selected. In the example below, we make the paragraphs which have the `blue-paragraph` class actually have blue text (on a pink background.)

```jsx
<html>
	<head>
		<script src="script.js"></script> <!-- This is our own script -->
	</head>

	<body>
		<p> This is a paragraph </p>
		<p id="importantParagraph"> This is an important paragraph </p>
		<p class="blue-paragraph"> This is a blue paragraph </p>
		<p class="blue-paragraph"> This is another blue paragraph. </p>
	</body>
</html>
```

```jsx
window.onload = () => {
  console.log("page is fully loaded");
  document.getElementById("importantParagraph").innerHTML =
    "updated content with javascript";

  document.getElementById("YourElementId").style.color = "blue";

  // you can update the style attribute more than once using different properties
  document.getElementById("importantParagraph").style.backgroundColor = "green";
};
```

Many of the attributes are the same between updating with JavaScript and writing with CSS, with different cases instead of hyphens. You can see a list of the attributes you can change [here](https://www.w3schools.com/jsref/dom_obj_style.asp)

We can also use JavaScript to assign a class to an element that doesn’t already have it, or conversely, to remove a class from an element which does have it. For the former, we could write the code below in order to programatically give the `importantParagraph` a `blue-paragraph` class as well. The `addClass` function

```jsx
window.onload = () => {
  console.log("page is fully loaded");
  document.getElementById("importantParagraph").innerHTML =
    "updated content with javascript";

  document.getElementById("importantParagraph").classList.add("blue-paragraph");
};
```

### Creating and removing HTML elements (`appendTo`, `remove`)

We can also use JavaScript in order to create entirely new elements, or remove existing elements.

I’ll start with removing, since it’s easier. Once we figure out our selector, we simply call `.remove()` on the value returned by the selector in order to entirely remove the element from the DOM. For removing all paragraphs with the `blue-paragraph` class in the example above, we would simply call

```jsx
window.onload = () => {
  console.log("page is fully loaded");
  document.getElementById("importantParagraph").remove();
};
```

Creating a new element is a two-step process. First, we need to know what type of element we want, and what its corresponding HTML tag is. Second, we need to find an already existing element on the HTML page, and add our newly created element to it. Remember, HTML has a tree-like structure, and if we don’t add our new element to this tree, as another element’s child, the newly created element will simply not show up.

```jsx
<html>
	<head>
		<script src="script.js"></script> <!-- This is our own script -->
	</head>

	<body>
		<div id="container">

		</div>
	</body>
</html>
```

Let’s use this HTML page, and use JavaScript to add a paragraph inside of the `container` div.

```jsx
window.onload = () => {
  console.log("page is fully loaded");
  // find the tag name of the element you want to create
  // p is paragraph tag
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = "this is a new paragraph";
  let container = document.getElementById("container");
  container.appendChild(newParagraph);
};
```

Notice a few things:

- We are storing the newly created element in a variable, and in the second instruction we are updating the CSS of that element.
- We could have also chained all three commands, like this:

```jsx
let newElement = document
  .getElementById("container")
  .appendChild(document.createElement("p"));
```

## Intro to Events

### javascript `addEventListener` method

The `addEventListener` method attaches one or more event handlers for the selected elements and child elements. Event handlers attached using the `addEventListener` method will work for both current and FUTURE elements (like a new element created by a script).

The general syntax for attaching an event listener to an object using the `addEventListener` method is like this:

`*elementSelector*.addEventListener(*eventName, callbackFunction)*`

- The `elementSelector` works as discussed in a previous tutorial (by tag name, by id, by class, etc.)
- The `eventName` needs to take specific values, which are defined by HTML & Javascript. Examples include `click`, `keypress`, `hover`, and more. _You can find a full list of DOM events [here](https://developer.mozilla.org/en-US/docs/Web/Events)._
- The `callbackFunction` is a function that we define, similarly to timers. This is where we define what we want to happen as a result of the interaction (click, key press, etc.) and gets called when Javascript detects that user interaction on the given selected elements. Usually we will be using anonymous functions `() => {}`, but you can also create an external function.

### **Mouse events**

#### The `click` event

`*elementSelector*.addEventListener("click", (e) => { /* code here */ } )`

First of all, let’s talk about events. `“click”` is an event that is bound via the `addEventListener` method. All the different visitors' actions that a web page can respond to are called events, and javascript responds to events in an HTML page. Keep in mind that an event represents the **_precise moment_** when something happens. There could be one or more space-separated event types and optional namespaces, all events should be contained in a set of quotation marks.

Meanwhile, `(e) =>` is a handler, it executes when an event (in our case, the `“click”` event) is triggered and completed. We need it because JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors. To prevent this, you can create a callback function, which is executed after the current effect is finished.

For instance, the example below has no callback parameter, and the alert box will be displayed before the hide effect is completed:

```jsx
let button = document.getElementById("button");
button.addEventListener("click", (e) => {
  alert("button was clicked!");
});
```

- The `e` is short for `event` that is contained in `function` is an [event object](https://developer.mozilla.org/en-US/docs/Web/API/Event). When an event is triggered, javascript passes the handler an event object that it can use to analyze and change the status of the event. This object includes important properties and methods for cross-browser consistency, e.g. `target`, `pageX`, `pageY`, `relatedTarget` etc.
  For example, `event.type` contains the event name:
  ```jsx
  window.onload = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", (e) => {
      alert(e.type);
    });
  };
  ```

And here is a full example of how you would use this on a page:

```jsx
<!DOCTYPE html>
<html>
	<head>
		<script src="/script.js"></script>
	</head>

	<body>
		<button>Click me!</button>
		<p>Click the button.</p>
	</body>

</html>
```

```jsx
window.onload = () => {
  let button = document.getElementById("button");
  button.addEventListener("click", (e) => {
    alert(e.type);
  });
};
```

#### The `mouseenter` event

`*elementSelector*.addEventListener("mouseenter", (e) => { /* code here */ } )`

The function is executed when the mouse pointer enters the HTML element:

```jsx
let para = document.getElementById("paragraph");
para.addEventListener("mouseenter", (e) => {
  // text's background becomes yellow when the cursor enter the p element
  para.style.backgroundColor = "yellow";
});
```

There is also a `mouseover` event. Note the difference between the two:

- The `mouseenter` event is triggered only when the mouse pointer hits the element. The counterpart event is `mouseleave`. **It does not propagate up the document hierarchy**.
- The `mouseover` \*\*\*\*event triggers when the mouse pointer enters an element and any one of its child elements. Its counterpart is `mouseout`.

#### The `mouseleave` event

`*elementSelector*.addEventListener("mouseleave", (e) => { /* code here */ } )`

The `mouseleave` event occurs when the mouse leaves the selected element.

```jsx
window.onload = () => {
  let para = document.getElementById("paragraph");
  para.addEventListener("mouseenter", (e) => {
    // text's background becomes yellow when the cursor enter the p element
    para.style.backgroundColor = "yellow";
  });
  para.addEventListener("mouseleave", (e) => {
    // text's background becomes yellow when the cursor enter the p element
    para.style.backgroundColor = "green";
  });
};
```

**Note:** Unlike the [`mouseout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) event, the `mouseleave` event only triggers when the mouse leaves the selected elements. The `mouseout` event is triggered if a mouse leaves any child elements as well as the selected element.

#### The `mousemove` event

`*elementSelector*.addEventListener("mousemove", (e) => { /* code here */ } )`

The `mousemove` event is triggered each time the mouse pointer is moved when it is over an element. Note that the it occurs each time when you move the mouse by **one pixel**.

```jsx
window.onload = () => {
  document.addEventListener("mousemove", (e) => {
    document
      .getElementById("span")
      .textContent(event.pageX + ", " + event.pageY); // shows the position of mouse pointer on time
  });
};
```

In this example, we are adding the mousemove event listener to the _entire_ document. So, we are using `document` as the selector.

### Further resources

Here is a [link](https://javascript.info/mouse-events-basics) to the full list of mouse events; also a [link](https://www.w3schools.com/jsref/dom_obj_event.asp) to all events that the DOM offers.

There are some interesting events, such as `online` and `offline`, which tell you when the browser connects or disconnects from the internet; `pagehide` and `pageshow`, or `wheel` (wheel is for when the mouse is scrolled). Go explore!

### **Keyboard events**

#### The `keydown` event

`*elementSelector*.addEventListener("keydown", (e) => { /* code here */ } )`

The `keydown` event occurs when a keyboard key is **pressed down** (as opposed to when it’s released.)

If you attach this event listener to the whole document, it’ll listen to key presses anywhere on the page. If you attach it to an individual element (like an `<input>` field,) it’ll only listen to key presses when that element is focused.

```jsx
window.onload = () => {
  document.addEventListener("keydown", (e) => {
    // Change the background color of an <input> field to yellow when a keyboard key is pressed down
    document.style.backgroundColor = "yellow";
    // Print to the console what key was pressed
    console.log(e.key);
  });
};
```

You can use the `e.key` property to look at which keyboard key was pressed. There are actually three properties on the event object relating to the key that was pressed:

- `e.key` gives you the character that was typed (`a`, `b`, `c`, `d`, etc.)
- `e.which` gives you the ASCII code of that character; for instance, if you type “j”, it will return “74”.
- `e.code` gives you the [HTML code](https://www.rapidtables.com/web/html/html-codes.html) of that character; for instance, if you type “J”, it will return “&#74;”

#### The `keyup` event

`*elementSelector*.addEventListener("keyup", function(event) { /* code here */ } )`

The `keyup` event occurs when a keyboard key is **released**.

```jsx
window.onload = () => {
  document.addEventListener("keydown", (e) => {
    // Change the background color of an <input> field to yellow when a keyboard key is pressed down
    document.style.backgroundColor = "yellow";
    // Print to the console what key was pressed
    console.log(e.key);
  });

  document.addEventListener("keyup", (e) => {
    // Change the background color of an <input> field to yellow when a keyboard key is pressed down
    document.style.backgroundColor = "green";
    // Print to the console what key was pressed
    console.log(e.key);
  });
};
```

There are three types of keyboard events: keydown, keypress, and keyup. The sequence of key events is as follows:

1. When the key is first pressed, the keydown event is sent.
2. If the key is not a modifier key, the keypress event is sent.
3. When the user releases the key, the keyup event is sent.

## Intro to API

Application Programming Interfaces (API) are ways for us to connect to other servers that send data on the web.

We already know now that the internet is made up of clients and servers. So far, we have covered client-side programming using HTML/CSS and client-side interactions with JavaScript. We can also access data from another server by using APIs.

When we request information from a server, it can be broken down into one of 8 different types of requests. We will pretty much only work with 4:

| Request  | Info                                                   | Example                    |
| -------- | ------------------------------------------------------ | -------------------------- |
| `GET`    | retrieving information, usually a webpage or file      | visiting a webpage via url |
| `POST`   | sending information, usually via a form                | creating an account        |
| `PUT`    | updating information on the server, usually via a form | updating a password        |
| `DELETE` | deleting information on the server, usually via a form | deleting an account        |

See WizardZines for an explanation on all the requests:

- [Part 1](https://wizardzines.com/comics/request-methods-1/)
- [Part 2](https://wizardzines.com/comics/request-methods-2/)

Specifically, a lot of servers use Representational State Transfer (REST) as the core schematic for constructing a request.

Something else we will continuously look at are `asynchronous functions`.
[Asynchronous](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing) allows us to simultaneously run different lines of code, as opposed to running them sequentially. This is because making a request to another server will take a little longer than rendering something on our own webpage. But, if we want to modify our own data on our client we need to be able to wait for the request to complete.

### Deconstructing a GET request

When we make a GET request inside the browser, it comes via the URL. For example, if the URL you are requesting is:

```
http://www.omdbapi.com/??apikey=keykeyKeyKey&s="one%20battle%20after%20another"
```

Everything that comes after the `?` (query) is a request parameter. So, we need to build our code to look like this url.

### Using `fetch()`, `async` and `await`

- [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) allows us to make a request to a URL with javascript
- [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) goes in the function header to declare a function as `asynchronous`, or enabling multiple actions at once
- [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) tells the asynchronous function to wait for a specific response before continuing

Let's work with the OMDB api: https://www.omdbapi.com/

1. Create an API key (it should look something like `abc123fed`)
2. We want to reconstruct the URL parameters with the code. This means `?apikey=keykeyKeyKey&s="one%20battle%20after%20another"`. We can use the JavaScript object `URLSearchParams`

```js
let params = new URLSearchParams({
  apikey: "your-key-here",
  s: "one battle after another",
  type: "movie",
});
```

3. Reconstruct the URL using this object

```js
let url = "https://www.omdbapi.com/?" + params;
```

4. Fetch the url

```js
let response = await fetch(url);
```

It is also useful to print out the response here to see how the data is structured.

5. Convert the response to `json` notation

```js
let jsonData = await response.json().then(//do successful action, // do error action)
```

6. We need to write these handler functions, and we could do that as an external function or anonymous functions embedded in the parameter.

### Related Coding Train Videos

- [`fetch()`](https://thecodingtrain.com/tracks/data-and-apis-in-javascript/data/1-client-side/1-fetch)
- [`async`/`await` 1](https://thecodingtrain.com/tracks/topics-in-native-javascript/js/async-await-part-1)
- [`async`/`await` 2](https://thecodingtrain.com/tracks/topics-in-native-javascript/js/async-await-part-2)

## Assignment

Prompt: Make a dynamic, front-end web application that must

- Connect with an API
  - Pick one from this [list of public APIs](https://github.com/public-apis/public-apis) or find your own. If it is marked CORS: No, or AUTH: OAUTH, you won't be able to use it.
- Include an interactive element
- Write your relevant documentation including your design process
- Submit in our class [Google Form](https://forms.gle/NZw3Aa3Yw67WU1mcA)

### Suggested Reading

- [Nobody Introduced me to the API](https://www.robinwieruch.de/what-is-an-api-javascript/)
- [Web Design as Architecture](https://www--arc.com/)

## Misc Links

- [Understanding Events in JavaScript](https://www.taniarascia.com/understanding-events-in-javascript/)
- [DOM Events](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events) - MDN docs
