document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const input = document.getElementById("form__input");
  const userList = document.getElementById("user");
  const refreshButton = document.getElementById("form__button");
  const clearButton = document.getElementById("clear__button");

  input.addEventListener("input", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const users = document.querySelectorAll(".user__item");

    users.forEach((user) => {
      const name = user
        .querySelector(".user__name span:nth-child(2)")
        .textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        user.style.display = "";
      } else {
        user.style.display = "none";
      }
    });
  });

  refreshButton.addEventListener("click", (event) => {
    event.preventDefault();
    updateUserList();
  });

  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    input.value = "";
    const users = document.querySelectorAll(".user__item");
    users.forEach((user) => {
      user.style.display = "";
    });
  });

  userList.addEventListener("click", (event) => {
    if (event.target.closest(".user__delete--btn")) {
      const userItem = event.target.closest(".user__item");
      userList.removeChild(userItem);
    }
  });
});
