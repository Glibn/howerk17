// 1.
const button =
  document.getElementById("myButton");
const input =
  document.getElementById("textInput");
button.addEventListener("click", () => {
  button.textContent = input.value;
});

// 2.
const image = document.getElementById("myImage");
image.src = "./unnamed.png";

// 3.
const link = document.getElementById("myLink");
const linkImg =
  document.getElementById("linkImage");
link.href = "https://new-url.com";
linkImg.setAttribute(
  "alt",
  "Опис нового зображення"
);

// 4.
const list = document.getElementById("myList");
const firstItem = list.querySelector("li");
firstItem.textContent =
  "Новий текст першого елемента";
