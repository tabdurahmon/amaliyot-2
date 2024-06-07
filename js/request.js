// // api
// const API = "https://randomuser.me/api/?results=9";

// // for leader

// const overlay = document.getElementById("overlay");

// const loaderToggle = () => {
//   if (toggle) {
//     overlay.classList.remove("hidden");
//   } else {
//     overlay.classList.add("hidden");
//   }
// };

// const getData = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState < 4) {
//         loaderToggle(true);
//       } else if (request.readyState < 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         console.log(data.results);
//         loaderToggle(false);
//       } else if (request.request == 4) {
//         console.log("Error !!!");
//         loaderToggle(false);
//       }
//     });

//     request.open("Get", resource);
//     request.send();
//   });
// };

// getData(API);
// ///////
async function fetchUsers() {
  const API = await fetch("https://randomuser.me/api/?results=9");
  const data = await API.json();
  return data.results;
}

async function updateUserList() {
  const userList = document.getElementById("user");
  userList.innerHTML = "";
  const users = await fetchUsers();

  users.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.className = "user__item";
    userItem.innerHTML = `
        <button class="user__delete--btn">
          <i class="fas fa-trash"></i>
        </button>
        <img class="user__img" alt="User photo" src="${
          user.picture.large
        }" width="100" height="100" />
        <div class="user__name">
          <span class="material-symbols-outlined">badge</span>
          <span>- ${user.name.title} ${user.name.first} ${user.name.last}</span>
        </div>
        <div class="user__year">
          <span class="material-symbols-outlined">cake</span>
          <span>- ${user.dob.age} years old.</span>
        </div>
        <div class="user__location">
          <span class="material-symbols-outlined">person_pin_circle</span>
          <span>- ${user.location.city}, ${user.location.country}</span>
        </div>
        <div class="user__gender">
          <span class="material-symbols-outlined">${
            user.gender === "male" ? "man" : "woman"
          }</span>
          <span>- ${user.gender}</span>
        </div>
      `;
    userList.appendChild(userItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateUserList();
});
