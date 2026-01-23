# Week 1 - 1/23/26

## Agenda

1. Syllabus & Introduction
2. [Intro to Git / Github](#intro-to-git--github)
3. [Intro to HTML](#intro-to-html)
4. [Intro to CSS](#intro-to-css)
5. [Intro to DOM](#intro-to-the-dom)
6. [Assignment](#assignment)

## Syllabus & Introduction

### [Syllabus](https://docs.google.com/document/d/1i2ZhXcXX_Xyc1V2ye74dMkYSYK0o1CzfcKdFkW5bTrA/edit?usp=sharing)

### Questions? Needs? Concerns?

Send an email. I cannot help you if you don't ask for help!

### [Statement on Technology](https://community.itp.io/community_statement#technology)

> We pledge to center creative and ethical uses of technology in our research, teaching, and making. We accept the claim that technology is a reflection of society, its histories, and its politics. We reject the claim that technology is neutral and acknowledge that every technology has the potential to do as much harm as good. We acknowledge that when technologies cause harm, the harm disproportionately affects Black, Brown, Indigenous, People of Color (BIPOC), queer, trans, disabled, femme, low-income, survivors, and all other marginalized bodies and communities worldwide.
>
> With this understanding, it is our responsibility to center these groups when hosting, participating in, or developing events (e.g. workshops or meetings), materials (e.g. courses, syllabi, resources), technologies (software, hardware, tools, etc) and creative applications made within this classroom (e.g. works of art, products, installations, experiments, etc).

### Introduction

| sam heckle (they/she)                                                                                                                                                                          |                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| software engineer to creative technologist pipeline                                                                                                                                            |                                                                                                          |
| things you can ask me about: coding, software engineering, physical computing, sewing, portfolio review, resume review, grad school, games, keyboards, baking, nyc/seattle/san francisco, food | ![works cited](https://github.com/samheckle/code-toolkit-fa-25/blob/main/images/week_01/works_cited.png) |
| please ask me about these things in [office hours](https://calendly.com/samanthaheckle/30min)                                                                                                  | ![phone ew](https://github.com/samheckle/code-toolkit-fa-25/blob/main/images/week_01/phone.png)          |

---

## Intro to Git / Github

### First Time Setup: Create a Repository

[Github](https://github.com/) is a public site for hosting repositories of code. This is very similar to sharing a folder in Google Drive, except we can choose whether it is public or private. For this class, you will have a public repository. Let's start by making one now.

1. Open up your browser and navigate to [Github](https://github.com/)
2. Make a new repository. There are lots of avenues to do this.
    - Click the upper right hand corner + button -> new repository
    - Click your profile icon -> repositories -> click the green "new" button
    - On the left side menu, click the green "new" button.
3. Name your repository (`dynamic-web-dev` is a good start). For any file naming in this class, you absolutely _cannot_ use spaces.
4. Leave the default settings, press "create repository"
5. Open up your new repository (click your profile -> repositories -> the new repository you just made)

Now we have a folder inside Github! This is exactly like making a folder in google drive.

### Command Line Basics

Throughout this class we will become more comfortable with the command line interface (CLI). On a Mac, this means Terminal. On a PC, I requested you install GitBash. On Linux, this is the entire interface.

Here are a list of the easiest and most common commands:

- `pwd` → displays the path of the directory the command line is currently in. Think of the command line as a Finder window – it can only be in one folder at a time, and it can be used to open, create, modify or remove files in that folder.
- `ls` → shows the files that exist in the current directory
- `mkdir` → creates a new folder at the current path, and takes one parameter (the name of the folder.) Example usage: `mkdir MyNewFolder`
- `cd` → changes directory, it’s what we use to navigate the filesystem. It takes one parameter, see below:
  - `cd MyNewFolder` will move us inside the newly created `MyNewFolder`. This is a _local path_, meaning that `MyNewFolder` needs to exist in the current directory in order for this command to work.
  - `cd /root/MyNewFolder` will move us to the given _global path._ It’s a global path because it starts with a `/`.
  - `cd ..` will move us in the parent of the directory we’re currently in.
  - `cd ~` will move us to the home folder of the current user.
  - `cd /` will go to the very root of the file system.
- `touch` → creates a new empty file
- `cat` → displays the contents of a file, and takes one parameter – the path of the file. For example, running `cat /root/.bash_history` will show the contents of the `.bash_history` file located in the `root` folder, which happens to be the list of all commands you’ve already run in the terminal.
- `rm` → removes a file; `rm -r`, to remove a directory; USE WITH CAUTION.

**Note #1:** You can find a pretty comprehensive command line cheat sheet [here](https://www.git-tower.com/blog/command-line-cheat-sheet/). Don’t worry if it feels intimidating for now – you’ll soon get used to it.

Let's make a new folder via our command line.

1. In your Finder (Mac) or File Explorer (PC), find a good spot where you want the code for this semester to live. This could be on your Desktop, Documents, or wherever you store your class files for the semester.
   - As a note, I have a folder located on my home drive called `dev`, so I _always_ put any code projects / class folders in this folder. This is because the full path is `Users/samheckle/dev/`, so the folder that exists on my computer is `Users/samheckle/dev/dynamic_web_dev/`
2. Navigate to that folder using `cd`

Now we want to add our repository that we created on Github to this folder.

### First Time Setup: Clone a Repository

The benefit of using Github is that we can have cloud storage for our code. But, this is not the way we will be editing and writing code on our own machines. We need to make a local "clone" (copy) of our repository that we will regularly sync up to the cloud.

1. In your browser, open your new repository in Github (click your profile icon -> repositories -> whatever you named your repo)
2. Click the green "code" button -> local tab -> https tab and copy that link (it should look something like `https://github.com/samheckle/dwd.git`)
3. In your CLI, you should already be in the location where you want this project folder to live. Double check by using `pwd`.
4. Clone your repository using `git clone`
5. Now your folder should be created on your computer!

Let's now work with creating our first HTML file and adding that to our git repository. To start, open this new folder inside your preferred text editor. You can make a folder using the CLI (`mkdir`), or you can use the file explorer within your text editor. Let's make two folders here: `class-demos/` and `project1/`. `class-demos` will be the notes of you following along in class, and `project1/` will be your first project submission. Inside `class-demos/`, let's also create a `class1/`.

Your file structure should look something like:

```
dynamic-web-dev
├── project1
├── class-demos
│   ├── class1
```

## Intro to HTML

*H*yper-*T*ext *M*arkup *L*angauage (HTML) isn't a programming language, but a way to taxonimize (organize) words on a page.

To make an HTML page, we can create a new file in VS Code by clicking the +Document button, or right clicking in the file explorer and pressing New File. Let's start by making an `index.html` file inside our `class1/`.

### Comments

The syntax of a comment in HTML is `<!-- -->`. We write comments to explain things that are happening in the code. It is good practice so that we can understand what is happening if we look at the code in the future.

```html
<!-- this is a comment in HTML -->
<!-- comments are a useful way to take notes while writing code -->
<!-- to quickly write comments, we can use the hotkey ⌘+/ (Mac) or CTRL+/ (PC) -->
```

### The HTML Tag

HTML follows a particular structure. The first tag we always use in an HTML file is `<html>`. All of our code will be written between the opening and closing tags. Every HTML tag can also be called an `element`, or the thing that exists on the page.

```html
<!-- opening -->
<html>
  <!-- closing -->
</html>
```

Then we get into parent and child tags. An element that contains elements inside of it is called the `parent element`, whereas the elements inside are called `child elements`. We can have infinite nesting inside of elements.

### Head and Body Tags

The typical children of the `<html>` element are `<head>` and `<body>` elements.

![image](https://kagi.com/proxy/Document.jpg?c=h8JCMe5cYLVbQGUI8h4mf7rgrW8NI2w--6vBMX9vZpfXO6UiFxDqWEFyflaL0FTSB7ZUc1FYoXDOrrqAD_5mVwH157My1rt4Gr5w2EVxa08LSWT2VXbF_NqJ-W_uQUE-)

The `<head>` tag contains content and meta information about the webpage the browser might need to know, like language, character set (ie alphabet), and the `<title>` tag, which allows us to set what the name of the tab is in our browser.

It might look something like

```html
<html>
  <head>
    <title>my homepage</title>
  </head>
</html>
```

The `<body>` tag contains all the content that actually shows up in the webpage.

So the typical order of an HTML page would look like this:

```html
<html>
  <head>
    <title>my homepage</title>
  </head>
  <body></body>
</html>
```

### Content Tags

These are tags that will always live inside the `<body>` tag.

- `<p>...</p>` → paragraph
- `<h1> ... </h1>` → headings (also h2, h3, ... h6)
- `<strong>...</strong>` → bolded text
- `<em>...</em>` → italicized text
- `<small> ... </small>` → small text
- `<br />` → line break (notice that this tag doesn’t have any content and therefore is both an begin and end tag, with the slash)
- `<hr />` horizontal rule → a line break which draws a line \
- `<a href="http://...">...</a>` → a link to another page. The “`href=""`” portion is an **attribute**. Many tags have optional attributes, further details below.
- `<img>` → images, uses `src` attribute which can contain a local file path or url to an image, no closing tag
- **Grouping & information organization:**
  - `<div> ... </div>` → [Block-level](https://www.w3schools.com/html/html_blocks.asp)
  - `<span> ... </span>` → [Inline](https://www.w3schools.com/html/html_blocks.asp)
    - These will come in handy as we start working with styles and Javascript.

#### Flow Layout

The way html is structured is through the flow layout: each page comprises `block` and `inline` elements to construct each page. This is like a stack of documents, it reads from the top to the bottom according to how big the page is and how much content you have.

<!-- prettier-ignore -->
|block | inline |
|---|---|
|`block` elements are stacked vertically, so they typically won't have content next to it. Think of it in like a word document where you have images "break" text. | `inline` elements are stacked horizontally, so they will usually have content side-by-side. In a word document, it is also called inline. |
![block](week1/images/block.png) | ![inline](week1/images/inline.png) | 
`<p>`, `<div>` | `<em>`, `<strong>`, `<a>`, `<span>`

#### **Attributes**

Most HTML tags can have **attributes**. In the case of the `<a>` above, `href` is an attribute which indicates the URL that the link should point to. Other common attributes are `id`, `class` or `src`

- `id` allows a specific tag/element on the page to be referenced through JavaScript or CSS
  (which we’ll cover later).

- `class` is useful when using CSS to define the design of the page.

- `src` is specific to media elements (images, audio, video, iframes) and point to the actual file being embedded into the webpage.

There are more attributes out there, most of them specific to certain tags. We will cover them as we discover other tags.

##### Pathing

As stated earlier, a path is the location on which our files exist on our computer. We can access the files by specifying the path in different attributes (like `src` or `href`). We need to know where we are in the file structure and where we need to go in order to determine the path from one file to another.

For example, if we want to include an image in our `index.html`, we need to know that our path to `index.html` is

```
file:///Users/samheckle/dev/dynamic-web-dev/week1/index.html
```

Our images exist in a folder called `images/`, and if we drag our image to the browser, we can also see it's path

```
file:///Users/samheckle/dev/dynamic-web-dev/week1/images/guywithguitar.jpg
```

We need to note the difference between these two paths -- we know that everything up to the end of week1 is the same, so we can ignore that part of the path. Since we need to get into the images folder, we need to specify the folder `images/` + our file name `guywithguitar.jpg`. So the path from `index.html` to our image is `images/guywithguitar.jpg`.

So, to determine paths we need to determine the difference between to file locations. If we need to go up a folder, we can use `../`. Say we put our images not in `week1/` but in `dynamic-web-dev/images/`, in order to retrieve images we need to use `../images/guywithguitar.jpg`.

##### **Links**

You can define links in HTML using the `<a>` tag, as follows:

    <a href="http://www.google.com">Go to Google</a>

Links are the connective tissue of the web, without them every website would be an isolated island in the middle of the ocean. The example above is a link to an external website. You can also link to pages within your own website, like this:

    <a href="/page-2.html">Go to Page #2</a>

_Local links_, like the one above, need a web server in order to work (i.e. if you simply opened your `html` page in the web browser, this will not work properly.) We will cover that in the next tutorial.

_Email links_ are somewhat rare, but websites use them occasionally. They take a special value within the href property — the mailto: prefix, followed by an email address —, and clicking on them leads to the computer opening the default email client with the address filled in for the recipient field:

    <a href="mailto:sam.heckle@nyu.edu">Email Sam</a>

_Anchor links_ are used to point to a different section of the current webpage. They work in conjunction with an `id` attribute attached to a different tag on the same page.

In order to see them in action, we actually need a webpage long enough that it needs scrolling, so clicking on our anchor link will take us to the bottom of the page. The example below inserts a few filler `h1` and `br` tags, and attaches the anchor to the `p` tag at the very end of the page.

    <a href="#bottomElement"> Go to bottom of the page </a>

    <!-- Filler content, so we have a long enough page -->
    <h1> Text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <h1> More text </h1> <br/> <hr/> <br/> <br/>
    <!-- End of filler content, so we have a long enough page -->

    <p id="bottomElement"> This is the end of the page </p>

Notice the syntax of the `href` attribute: a `#`, followed by the `id` of the element we want to create an anchor to.

Sometimes you will see a `Back to top` button on blogs, websites, etc. Anchors are the mechanism behind the back to top functionality.

**Opening links in a new tab**
If we wanted to force the opening of a link in a new tab — which is commonly done for links that point to different websites than the current one —, we need to use the `target` attribute, with the value set to `_blank`. It looks like this:

    <a href="http://www.google.com" target="_blank"> Open Google in a new tab </a>

---

##### **Images**

To place an image in a page, you use a URL in the src attribute of the img tag:

    <img src="/animage.jpg" />
    <!-- This is a "local" URL, hosted on your server -->

    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" />
    <!-- This is a "global" URL, hosted anywhere on the internet. It's global because it starts with "http://" or "https://" -->

You can control the dimensions of the image by using the `width` and/or `height` attributes on the image tag:

    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" width="500" />
    <!-- or -->
    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" height="500" />
    <!-- or -->
    <img src="https://cezar.io/assets/images/24hrslandscape/cover.png" width="500" height="500" />

The unit of measurement for the width and height attributes is pixels. Once we get into CSS, we will learn more granular ways of controlling the dimensions of an image.

### View Source and Inspect Element

One of the very fundamental things that made web publishing very successful in the beginning was the inclusion of a View Source feature in most web browsers. This allows people to look at the HTML of a page they are viewing so as to understand how it was constructed and learn how to do similar things themselves.

Different browsers have different ways of accessing the source — you will likely find it in the Right-Click context menu, or under the Tools or Developer menus of the browser itself.

Inspect Element is a more recent addition to web browsers, which is, in some ways, an interactive version of View Source. It’s a great prototyping tool, as it allows for on-the-fly changes to the HTML and CSS of a page. (Important note: These changes are not saved, we’re just modifying how the page is displayed.)

### Further Resources

- [W3Schools HTML Tutorial](https://www.w3schools.com/htmL/)
- [HTML Tags Reference](https://www.w3schools.com/tags/default.asp)
- [HTML Special Characters (entities)](https://www.w3schools.com/html/html_entities.asp)
- [HTML Block vs Inline Elements](https://www.w3schools.com/html/html_blocks.asp)
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  - This website offers a more accurate & comprehensive reference than W3Schools, but it can be more intimidating in the beginning. Use whichever you are most comfortable with.

---

## Intro to CSS

*C*ascading *S*tyle *S*heet (CSS) allows us to style elements.

[selector](#selectors) = thing we are grabbing on the html page
[property](#properties) = thing that we want to change about the specific element
value = what are we changing that element by

```css
selector {
  property: value;
}
```

### Using CSS on a webpage

There are three main ways of styling an HTML page. They all use the same CSS language and syntax, but are different in _where_ the CSS code lives. We will ONLY use the third option, but it’s important to be aware of all three.

- **Option #1** (bad): `style` attribute for individual elements
  ```html
  <html>
    <head>
      <!-- We have an empty head tag here, no page metadata. -->
    </head>
    <body>
      <p style="color: red;">This is a red paragraph</p>
      <p>This paragraph is NOT red.</p>
    </body>
  </html>
  ```
  Using the `style` attribute is a great way to try things out quickly in CSS. However, as an element’s styling gets more complex (meaning multiple CSS properties,) and more elements get custom styles, the HTML document can become _really messy really quickly._ At the same time, if we wanted to apply the same style to two different elements, we would have to copy and paste the value of the style attribute, and that’s not ideal. This is why we will rarely use `style` as an attribute.
- **Option #2** (also bad): `<style>` tag, declared inside of `<head>`

  ```html
  <html>
    <head>
      <style>
        p {
          color: red;
        }
      </style>
      <!-- The CSS code above applies the red color property to ALL <p> tags on the page. -->
    </head>
    <body>
      <p>This is my red paragraph.</p>
      <p>This is another red paragraph.</p>
      <p>All paragraphs are actually red in this example.</p>

      This text, however, is not red, because it's not enclosed in a p tag.
      <div>Neither is this one.</div>
    </body>
  </html>
  ```

- **Option #3** (much better): Using a separate `CSS` file
  This is really just Option #2, but the `<style>` tag is replaced by an external file. Everything else is the same. We first create a file called `style.css` where we write our style declarations:

  ```css
  p {
    color: red;
  }
  ```

  And then point the HTML page to this external styling file. To link an external stylesheet, you'd include a `<link>` element inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) tag of your HTML file like this:

  ```html
  <html>
    <head>
      **
      <link rel="stylesheet" href="/style.css" />
      **
      <!-- We use the <link> tag to point to our CSS file. -->
    </head>
    <body>
      <p>This is a red paragraph.</p>

      <p style="color: blue">
        The style attribute has higher priority than the external stylesheet, so
        this paragraph will be blue.
      </p>
    </body>
  </html>
  ```

### Commenting

```css
/* this is a comment in CSS */
```

### Selectors

There are 3 different types of basic selectors in CSS. The selector is the specific item on the webpage we are grabbing. They are:

- the html tag itself (ie body, p). this will select _all_ elements that match that value
- `class` - an attribute that can apply to multiple elements, regardless of the element type
- `id` - an attribute that can apply to only ONE element. This is useful for JavaScript.

To retrieve an html tag, we can just use the element name:

```css
p {
  background-color: cyan;
}
```

To retrieve a class selector, we use `.`:

```css
.myclass {
  color: blue;
}
```

To get an id, we use `#`:

```css
#myid {
  background-color: blue;
}
```

### Properties

- Color ✅
  The **`<color>`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [data type](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types) represents a [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color). A `<color>` may also include an [alpha-channel](https://en.wikipedia.org/wiki/Alpha_compositing) _transparency value_, indicating how the color should [composite](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) with its background.
  - We will mainly cover `<color>` as defined in 2 ways: named colors and hex & `rgb()`
    - Named colors - Using a keyword (such as `blue` or `transparent`).
      - Color keywords are case-insensitive identifiers that represent a specific color, such as `red`, `blue`, `black`, or `lightseagreen`. Although the names more or less describes their respective colors, they are essentially artificial, without a strict rationale behind the names used.
      - Unlike HTML, CSS will completely ignore unknown keywords.
      - The color keywords all represent plain, solid colors, without transparency.
    - Hex & `rgb()` - Using the [RGB cubic-coordinate](https://en.wikipedia.org/wiki/RGB_color_model#Geometric_representation) system.
      - rgb(): The RGB color model defines a given color in the [sRGB color space](https://en.wikipedia.org/wiki/SRGB) according to its red (r), green (g), and blue (b) components. An optional alpha (a) component represents the color's transparency. Syntax-wise, RGB colors can be expressed through both hexadecimal (prefixed with `#`) and functional (`rgb()`, `rgba()`) notations.
      - rgb notation: **`rgb[a](R, G, B[, A])`**
        `R` (red), `G` (green), and `B` (blue) can be either [number](https://developer.mozilla.org/en-US/docs/Web/CSS/number) or [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage), where the number `255` corresponds to `100%`. `A` (alpha) can be a [number](https://developer.mozilla.org/en-US/docs/Web/CSS/number) between `0` and `1`, or a [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage), where the number `1` corresponds to `100%` (full opacity).
      - hex notation: **`#RGB[A]`**
        `R` (red), `G` (green), `B` (blue), and `A` (alpha) are hexadecimal characters (0–9, A–F). `A` is optional. The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`). For example, `#f09` is the same color as `#ff0099`. Likewise, the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example, `#0f38` is the same color as `#00ff3388`.

    ```css
    color: red; /* named color */
    color: rbga(255, 0, 0, 1); /* rgba color */
    color: #ff0000; /* hex color */

    /* all three lines show the same color */
    ```

- Background-color ✅
  - Initially, the [background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color) of an HTML tag is transparent. However, you can change it by using the `background-color` property, which is specified as a single `<color>` value.

  ```css
  /* Keyword values */
  background-color: red;
  background-color: indigo;

  /* Hexadecimal value */
  background-color: #bbff00; /* Fully opaque */
  background-color: #bf0; /* Fully opaque shorthand */
  background-color: #11ffee00; /* Fully transparent */
  background-color: #1fe0; /* Fully transparent shorthand  */
  background-color: #11ffeeff; /* Fully opaque */
  background-color: #1fef; /* Fully opaque shorthand  */

  /* RGB value */
  background-color: rgb(255, 255, 128); /* Fully opaque */
  background-color: rgba(117, 190, 218, 0.5); /* 50% transparent */
  ```

- Width & Height ✅
  - The **`width`** and `**height**` CSS property set an element's [width](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [height](https://developer.mozilla.org/en-US/docs/Web/CSS/height). By default, it sets the width of the [content area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area), but if [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) is set to `border-box`, it sets the width of the [border area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border_area).
  - Syntax:

  ```css
  /* <length> values */
  width: 300px;
  height: 25em;

  /* <percentage> value */
  width: 75%;

  /* Keyword values */
  width: max-content;
  height: min-content;
  width: fit-content(20em);
  height: auto;

  /* Global values */
  width: inherit;
  height: initial;
  width: revert;
  height: unset;
  ```

- Typography ✅
  - The **`font`** property sets all the different properties of an element's font. Alternatively, it sets an element's font to a system font.
    - font-size
      - The **`font-size`** property sets the size of the font. Changing the font size also updates the sizes of the font size-relative [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units, such as `em`, `ex`, and so forth.

      ```css
      /* <absolute-size> values */
      font-size: xx-small;
      font-size: x-small;
      font-size: small;
      font-size: medium;
      font-size: large;
      font-size: x-large;
      font-size: xx-large;
      font-size: xxx-large;

      /* <relative-size> values */
      font-size: smaller;
      font-size: larger;

      /* <length> values */
      font-size: 12px;
      font-size: 0.8em;

      /* <percentage> values */
      font-size: 80%;

      /* Global values */
      font-size: inherit;
      font-size: initial;
      font-size: revert;
      font-size: unset;
      ```

      - Units to specify:
        - `px` - Setting the font size in pixel values (`px`) is a good choice when you need pixel accuracy. A px value is static. This is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified. The results may vary slightly across browsers, as they may use different algorithms to achieve a similar effect.
        - `em` - Using an `em` value creates a dynamic or computed font size. The numeric value acts as a multiplier of the `font-size` property of the element on which it is used. In order to calculate the `em` equivalent for any pixel value required, you can use this formula:
          ```css
          em = desired element pixel value / parent element font-size in pixels
          ```

    - The **`font-family`** specifies a prioritized list of one or more font family names and/or generic family names for the selected element. Values are separated by commas to indicate that they are alternatives. The browser will select the first font in the list that is installed or that can be downloaded using a [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) at-rule.
      - The `font-family` property specifies a list of fonts, from highest priority to lowest. You should always include at least one generic family name in a `font-family` list, since there's no guarantee that any given font is available. This lets the browser select an acceptable fallback font when necessary.
      - For `font-family` there is no specific default or initial value; the initial value always depends on the browser and/or operating system.
      - The `font-family` property lists one or more font families, separated by commas. Each font family is specified as either a `family-name` or a `generic-name` value.

        ```css
        h1 {
          font-family: serif;
          /* Using the default serif font of the system for our headings */
        }

        p {
          font-family: "Gill Sans Extrabold", sans-serif;
          /* Using Gill Sans Extrabold for our paragraphs. If the font is
             not available for any reason, we fall back onto the default
             system sans-serif font. 
          */
        }
        ```

        - **Note:** If a font name contains white-space, it must be quoted. Single quotes must be used when using the "style" attribute in HTML.

  - `serif`, `sans-serif`, `monospace` (Generic family names)
    - `serif` - In typography, a serif is a small line or stroke regularly attached to the end of a larger stroke in a letter or symbol within a particular font or family of fonts.
    - `sans-serif` - In typography and lettering, a sans-serif, sans serif, gothic, or simply sans letterform is one that does not have extending features called "serifs" at the end of strokes.
    - `monospace` - A monospaced font, also called a fixed-pitch, fixed-width, or non-proportional font, is a font whose letters and characters each occupy the same amount of horizontal space. This contrasts with variable-width fonts, where the letters and spacings have different widths.

- Text alignment ✅
  The **`text-align`** property sets the horizontal alignment of text inside of its parent. The `text-align` property is specified using keyword values:
  `start`, `end`, `left`, `right`, `center`, `justify`, `justify-all`, or `match-parent`.
  ```css
  p {
    text-align: right; /* This right-aligns our text. */
  }
  ```
- Making changes in the Inspector (in Firefox and Chrome)
  - The Inspector is a set of web developer tools built directly into the browser and can help you edit pages on-the-fly and diagnose problems quickly.
  - When you want to inspect a DOM (Document Object Model) node's styles or attributes, right-click the element and select **Inspect**
  - The **Elements** panel of the Inspector opens. The element where you right-clicked is highlighted in the **DOM Tree**. The DOM Tree is where you do all DOM-related activities in DevTools.
  - Under the “Styles” tab, you can access the CSS code and manipulate it.
  - More on Viewing And Changing CSS - An interactive [tutorial for Chrome](https://developer.chrome.com/docs/devtools/css/) to follow through
    A similar interface is available in Mozilla Firefox, Safari and most other modern browsers.
- Class & ID attribute
  - CSS allows you to apply styles based on an element's `class` or `id`. Each _class_ or _ID_ that you create can have its own style.
    - **Class** **selectors** allow you to group things based on their logical function (or other purpose).
      - The class selector starts with a dot (`.`) character. It will select everything in the document with that class applied to it.
        ```css
        .search {
          width: 100%;
        } /* Select everything in the document with class .search and apply width property to them */
        ```
      - Targeting classes on particular elements
        - You can create a selector that will target specific elements with the class applied. In this next example, we will highlight a `<span>` with a class of `highlight` differently to an `<h1>` heading with a class of `highlight`. We do this by using the type selector for the element we want to target, with the class appended using a dot, with no white space in between.

          ```css
          span.highlight {
            background-color: yellow;
          }

          h1.highlight {
            background-color: pink;
          }
          ```

      - Target an element if it has more than one class applied
        - You can apply multiple classes to an element and target them individually, or only select the element when all of the classes in the selector are present. This can be helpful when building up components that can be combined in different ways on your site.
        - In the example below, we have a `<div>` that contains a note. The grey border is applied when the box has a class of `notebox`. If it also has a class of `warning` or `danger`, we change the [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color). We can tell the browser that we only want to match the element if it has two classes applied by chaining them together with no white space between them.
          - In CSS:

          ```css
          .notebox {
            border: 4px solid #666; /* The grey border is applied when the box has a class of notebox */
          }

          .notebox.warning {
            border-color: orange; /* Change border color to orange if the div also has a class of warning. */
          }

          .notebox.danger {
            border-color: red; /* Change border color to red if the div also has a class of danger. */
          }
          ```

          - In HTML:

          ```html
          <div class="notebox">This is an informational note.</div>

          <div class="notebox warning">This note shows a warning.</div>

          <div class="notebox danger">This note shows danger!</div>

          <div class="danger">
            This won't get styled — it also needs to have the notebox class
          </div>
          ```

    - **ID selectors** are used in the same way as a class selector. However, an ID can be used only once per page, and elements can only have a single `id` value applied to them. It can select an element that has the `id` set on it, and you can precede the ID with a type selector to only target the element if both the element and ID match.
      - ID selectors start with a hash (`#`) followed by the ID value. The below style sheet sets the margin property for the element with an ID of `logo`.
        - In CSS:

        ```css
        #logo {
          margin: 9px;
        } /* Assign margin property to ID #logo */
        ```

        - In HTML:

        ```html
        <h1 id="logo">ID selector</h1>
        ```

      - **Warning:** Using the same ID multiple times in a document may appear to work for styling purposes, but don't do this. It results in invalid code, and will cause strange behavior in many places.

- Margin
  - CSS margins define the space around an element. It determines the amount of whitespace between neighboring components. It allows you to shift elements up and down the page and left and right.
  - A negative margin value allows you to overlap page items. When trying to generate a broken grid effect, this can be useful.
  - It’s easy to center an element horizontally if the width of your website is fixed: Set the value margin to `auto` in the value margin field.
  - The `margin` property may be specified using one, two, three, or four values. Each value is a [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length), a [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage), or the keyword `auto`.
    - When **one** value is specified, it applies the same margin to **all four sides**
    - When **two** values are specified, the first margin applies to the **top and bottom**, the second to the **left and right**.
    - When **three** values are specified, the first margin applies to the **top**, the second to the **right and left**, the third to the **bottom**.
    - When **four** values are specified, the margins apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).
    - You can also specify the value of the side using: `margin-top`, `margin-left`, `margin-bottom`, `margin-right`
    ```css
    /* for example, to assign the top margin at an absolute value of 10px: */
    margin-top: 10px;
    ```
- Borders ✅
  - The **`border`** property sets an element's border. It sets the values of [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width), and [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color), [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius), [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
    - For both [border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width) , [border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color), and [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style), the property may be specified using one, two, three, or four values.
      - When **one** value is specified, it applies the same width to **all four sides**.
      - When **two** values are specified, the first width applies to the **top and bottom**, the second to the **left and right**.
      - When **three** values are specified, the first width applies to the **top**, the second to the **left and right**, the third to the **bottom**.
      - When **four** values are specified, the widths apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).
      - The property can also set each side individually, for instance:
      ```css
      border-top-color: red; /* set only the top border red */
      border-bottom-width: thin; /* set only the bottom border thin */
      border-left-style: dotted; /* set only the left border to a dotted line */
      ```
    - **`<line-width>`** value defines the width of the border, either as an explicit nonnegative [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) or a keyword. If it's a keyword, it must be one of the following values: `thin` < `medium` < `thick`
    - [border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) property sets the line style for all four sides of an element's border.`line-style` value describes the style of the border. It can have the following values: `hidden`, `none`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset`, `outset`
    - **Note:** The border will be invisible if its style is not defined. This is because the style defaults to `none`.
  - Circles and other shapes you can make with `border-radius`
    - The **`border-radius`** property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners. The radius applies to the whole [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background), even if the element has no border; the exact position of the clipping is defined by the [background-clip](https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip) property.
      Some examples:
      ```css
      border-radius: 100px;
      ```
      ```css
      border-radius: 10% 30% 50% 70%;
      ```
- Padding
  - The [padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding) property controls the appearance of content within each element, or say, the amount of space between the content and the border of the page. It is most commonly used to create whitespace within items. The content will remain the same size as before, but more space will surround it when the padding value increases. This is beneficial when you enlarge the clickable area of interactive elements like buttons.
  - The `padding` property may be specified using one, two, three, or four values. Each value is a [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) or a [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage). Negative values are invalid.
    - When **one** value is specified, it applies the same padding to **all four sides**.
    - When **two** values are specified, the first padding applies to the **top and bottom**, the second to the **left and right**.
    - When **three** values are specified, the first padding applies to the **top**, the second to the **right and left**, the third to the **bottom**.
    - When **four** values are specified, the paddings apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).
  - Similar to the `margin` and `border` property, `padding` can also set sides individually by adding the specification after it: [padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom), [padding-left](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left) ,[padding-right](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right) , [padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top)
- Difference between margin, border, padding ✅

  ![untitled](https://drive.google.com/uc?id=1S660tm2kUyPB5mHfENxo6dT9z_Jm0UpQ)
  - Margin is the space surrounding an element’s border in CSS, whereas padding is between its border and its content.
  - The margin property governs the space around an element, whereas the padding property governs the space within an element.

#### Box Model

The box model is how each container (meaning html elements/tags) is structured, according to its content and the css attribute that you are modifying.  
![box model](https://kagi.com/proxy/boxmodel.png?c=2AqQH3HdLpAllo0tKOQJ0ZPmYW4cjhd-rRnTLdfoPuEIxP-LId4EU4OimOAXtQuZTHY8e37PbHkIAA2Gcf1yY0hAwsB-MdvRDobh_krfcAU%3D)

- In order to set the width and height of an element correctly in all browsers, you need to know how the box model works. When you set the width and height properties of an element with CSS, you just set the width and height of the **content area (blue part)**. To calculate the full size of an element, you must also add padding, borders and margins.
- The total width of an element should be calculated like this: **Total element width = width + left padding + right padding + left border + right border + left margin + right margin**
- The total height of an element should be calculated like this: **Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin**

## Intro to the DOM

Forget everything you know about p5.js, because we simply cannot use p5 graphics functionality to display things on the webpage (for now!).

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
  document
    .getElementById("YourElementId")
    .innerHTML("updated content with javascript");
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
  document
    .getElementById("importantParagraph")
    .innerHTML("updated content with javascript");

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
  document
    .getElementById("importantParagraph")
    .innerHTML("updated content with javascript");

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

## Assignment

1. Make a small website about a passion or interest of yours to introduce yourself to the class next week. This is an opportunity to not only experiment with the affordances of HTML/CSS (and minimal JS), but explore the browser as a medium of self-expression. Start by looking at the physical spaces you inhabit and where you find creativity. Think about the structure of HTML: how can hyperlinks transport you space to space? How does that work with your own creative flow?
   a. We will host these websites live on our servers next week, but for now it is ok they are hosted on Github Pages.
   b. Submit in our class [Google Form](https://forms.gle/NZw3Aa3Yw67WU1mcA)
2. Ensure you have set up your digital ocean account.

### Suggested Readings

- [Vernacular Web 1](https://art.teleportacia.org/observation/vernacular/) - Olia Lialina, 2005
  - make sure to click through the "next" buttons on the bottom
- [Vernacular Web 2](https://contemporary-home-computing.org/vernacular-web-2/) - Olia Lialina, 2007
- [Amateur Shit: Cory Doctorow and Joanna Walsh search for a less evil internet](https://lux-magazine.com/article/internet-book-reviews/) - Michelle Santiago Cortés, 2025
