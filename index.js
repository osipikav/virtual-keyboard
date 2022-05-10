const keys = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "backspace",
  "tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "\\",
  "del",
  "capslock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "'",
  "enter",
  "leftshift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "up",
  "rightshift",
  "leftctrl",
  "win",
  "leftalt",
  "space",
  "rightalt",
  "left",
  "down",
  "right",
  "rightctrl",
];

let p = document.createElement("p");
p.classList.add("title");
p.innerHTML = "RSS Виртуальная клавиатура";
document.body.appendChild(p);

let textarea = document.createElement("textarea");
textarea.classList.add("textarea");

document.body.appendChild(textarea);

let keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
document.body.appendChild(keyboard);
createKey();

function createKey() {
  keys.forEach((elem) => {
    let key = document.createElement("button");
    key.innerHTML = elem;
    key.classList.add("key");

    switch (elem) {
      case "backspace":
        key.classList.add("backspace");
        key.innerHTML = "Backspace";
        break;
      case "tab":
        key.classList.add("tab");
        key.innerHTML = "Tab";
        break;
      case "del":
        key.innerHTML = "Del";
        break;
      case "capslock":
        key.classList.add("capslock");
        key.innerHTML = "CapsLock";
        break;
      case "enter":
        key.classList.add("enter");
        key.innerHTML = "Enter";
        break;
      case "leftshift":
      case "rightshift":
        key.classList.add("shift");
        key.innerHTML = "Shift";
        break;
      case "leftctrl":
      case "rightctrl":
        key.classList.add("ctrl");
        key.innerHTML = "Ctrl";
        break;
      case "leftalt":
      case "rightalt":
        key.classList.add("alt");
        key.innerHTML = "Alt";
        break;
      case "win":
        key.classList.add("win");
        key.innerHTML = "Win";
        break;
      case "space":
        key.classList.add("space");
        key.innerHTML = "";
        break;
      case "up":
        key.innerHTML = "↑";
        break;
      case "right":
        key.innerHTML = "→";
        break;
      case "left":
        key.innerHTML = "←";
        break;
      case "down":
        key.innerHTML = "↓";
        break;
    }
    key.setAttribute("data-key", key);

    keyboard.appendChild(key);
  });
}
