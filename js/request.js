// api
const API = "https://randomuser.me/api/?results=9";

// for leader

const overlay = document.getElementById("overlay");

const loaderToggle = () => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        loaderToggle(true);
      } else if (request.readyState < 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        console.log(data.results);
        loaderToggle(false);
      } else if (request.request == 4) {
        console.log("Error !!!");
        loaderToggle(false);
      }
    });

    request.open("Get", resource);
    request.send();
  });
};

getData(API);
