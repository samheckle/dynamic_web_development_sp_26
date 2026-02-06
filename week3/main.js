// shows a alert when the page opens
alert("javascript page has been successfully linked!");
// write to the inspector console
console.log("this is a console message");

window.onload = async () => {
  console.log("window has loaded");

  // retrieves a specific element using the id from the html page
  document.getElementById("important");

  // manipulate the text of the selected element
  document.getElementById("important").innerHTML =
    "i have <span>changed</span> the text with javascript";

  // store the long document text in a variable
  let importantParagraph = document.getElementById("important");
  // we can manipulate the style and grab any css attribute, but the name of the property uses camel case instead of hyphens
  // any style changes that happen in js will supersede any styling via the .css file
  importantParagraph.style.backgroundColor = "#840032";
  importantParagraph.style.backgroundColor = "#e59500";

  importantParagraph.classList.add("hide");
  importantParagraph.classList.remove("hide");

  // adding elements to html using js
  // 4 steps
  // 1. getting the element that we will add a child to
  let c = document.getElementById("container");
  // 2. what type of tag will we create
  let i = document.createElement("img");
  // 3. modify new element as needed
  i.src =
    "https://kagi.com/proxy/c64d1a49-64fd-4b46-805a-02226004fc12-hocking-hills-state-park.jpg?c=pdUGaDgO_stg2qOVyjqM1WCjRDfM96q4vyzEn1YsfYCgdmiLeOOzj3Rias1F2yLQLLxM1VoKvwYcwmoeeRwTets7UFUVw24wfTA9BX98y0PypwDJXbwYAony8UayQHrOd_Qe_2fhZL2U3b-sJ9cu0ejPdnjKhkUUt5h8jjSlu5zHnZNeit2Jv2xePx3nEdEH5MDFZpWY2dWAlZfJKcVIsw%3D%3D";
  // 4. add the new child to the parent
  c.appendChild(i);

  // add an event listener to my parent div
  // document.getElementById('container')
  // event listener is a function that takes 2 parameters
  // 1. name of the event
  // 2. callback function
  c.addEventListener("click", () => {
    console.log("clicked!");

    if (importantParagraph.classList.contains("hide")) {
      importantParagraph.classList.remove("hide");
    } else {
      importantParagraph.classList.add("hide");
    }
  });

  // use class as the selector for the elements
  let blues = document.getElementsByClassName("blue");
  console.log(blues);
  blues[1].style.backgroundColor = "skyblue";

  for (let b of blues) {
    b.style.border = "navy solid 4px";
  }

  // making an api request:
  // 1. create url params (everything that goes after the ?)
  let params = new URLSearchParams({
    apikey: "9aa8e798",
    s: "one battle after another",
    type: "movie",
  });
  console.log(params);
  // 2. create the url
  let url = "https://omdbapi.com/?" + params;
  console.log(url);
  // 3. make the request to the url using fetch
  let response = await fetch(url);
  console.log(response);

  // converting the response to json
  let movieData = await response.json();
  console.log(movieData);
  // retrieving the specific structure of the response via the Search
  // this only exists because of the way the omdb api works
  let movies = movieData.Search;
  console.log(movies);

  // dynamically adding to my webpage using the data given to me from the api
  for (let m of movies) {
    let div = document.createElement("div");

    div.textContent = m.Title;

    let poster = document.createElement("img");
    poster.src = m.Poster;

    div.appendChild(poster);
    c.appendChild(div);
  }
};
