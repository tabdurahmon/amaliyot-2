// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");
const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      console.log(request);
    });

    request.open("Get", resource);
    request.send();
  });
};

getData(API);
