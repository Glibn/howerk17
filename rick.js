//1
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введіть текст";
input.id = "inputText";

const button = document.createElement("button");
button.id = "myButton";
button.textContent = "Натисни мене";

document.body.append(input, button);

button.addEventListener("click", () => {
  button.textContent = input.value;
});
//2
const title = document.createElement("h2");
title.textContent = "Моє зображення";

const img = document.createElement("img");
img.src = "old.jpg";
img.width = 200;

document.body.append(title, img);

img.src = "new.jpg";
//3
const link = document.createElement("a");
link.id = "myLink";
link.href =
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
link.textContent = "Перейти";

const linkedImg = document.createElement("img");
linkedImg.src = "image.jpg";
linkedImg.width = 200;

linkedImg.alt = "зображення";

document.body.append(
  link,
  document.createElement("br"),
  img
);

link.href = "https://new-site.com";
img.alt = "не зображення";
//4
const ul = document.createElement("ul");
ul.id = "myList";

const li1 = document.createElement("li");
li1.textContent = "Старий текст 1";

const li2 = document.createElement("li");
li2.textContent = "Старий текст 2";

ul.append(li1, li2);
document.body.append(ul);

ul.firstElementChild.textContent = "Новий текст ";
