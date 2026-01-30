# Week 1 - 1/23/26

## Agenda

1. Syllabus & Introduction
2. [Intro to Git / Github](#intro-to-git--github)
3. [Intro to HTML](#intro-to-html)
4. [Assignment](#assignment)

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


## Assignment

1. Make a small website about a passion or interest of yours to introduce yourself to the class next week. This is an opportunity to not only experiment with the affordances of HTML/CSS (and minimal JS), but explore the browser as a medium of self-expression. Start by looking at the physical spaces you inhabit and where you find creativity. Think about the structure of HTML: how can hyperlinks transport you space to space? How does that work with your own creative flow?
   - We will host these websites live on our servers next week, but for now it is ok they are hosted on Github Pages. You can view the link by opening your repository in your web browser -> settings -> pages -> link
   - To sync your code to your git repository:
   1. `git status`: see the status of the files you changed
   2. `git add .`: add all the files. if you only want to add specific files, you need to write out the full file name and path.
   3. `git commit -m "this is a message to describe the changes"`
   4. `git push`: upload the files to the cloud repository.
   - Submit in our class [Google Form](https://forms.gle/NZw3Aa3Yw67WU1mcA)
2. Ensure you have set up your digital ocean account, and any other [required tools](../tools.md)

### Suggested Readings

- [Vernacular Web 1](https://art.teleportacia.org/observation/vernacular/) - Olia Lialina, 2005
  - make sure to click through the "next" buttons on the bottom
- [Vernacular Web 2](https://contemporary-home-computing.org/vernacular-web-2/) - Olia Lialina, 2007
- [Amateur Shit: Cory Doctorow and Joanna Walsh search for a less evil internet](https://lux-magazine.com/article/internet-book-reviews/) - Michelle Santiago Cortés, 2025
