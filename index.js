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

// let body = document.body;
let p = document.createElement("p");
p.classList.add("title");
p.innerHTML = "RSS Виртуальная клавиатура";
document.body.appendChild(p);

let textarea = document.createElement("textarea");
textarea.classList.add("textarea");
// textarea.setAttribute('')
document.body.appendChild(textarea);

let keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
document.body.appendChild(keyboard);
createKey();

// console.log("body :>> ", body);
// console.log("keyboard :>> ", keyboard);
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

    // key.addEventListener("click", (event) => mouseClick(event));

    keyboard.appendChild(key);
  });
}

// mouseClick(event) {
// const content = event.currentTarget.dataset.key;
// const textArea = this.elements.textarea;
// let cursorPosition = textArea.selectionStart + 1;
// let [value, start, end] = [
//   (this.properties.isCapsLock) ? content.toUpperCase() : content,
//   textArea.selectionStart,
//   textArea.selectionEnd,
// ];
// switch (content) {
//   case 'del':
//     [value, end] = ['', textArea.selectionEnd + 1];
//     break;
//   case 'backspace':
//     [value, start] = ['', textArea.selectionStart - 1];
//     break;
//   case 'enter':
//     value = '\n';
//     break;
//   case 'tab':
//     value = '\t';
//     break;
//   case 'backtick':
//     value = '`';
//     break;
//   case 'spacebar':
//     value = ' ';
//     break;
//   case 'capslock':
//     event.currentTarget.classList.toggle('pressed');
//     value = '';
//     cursorPosition = textArea.selectionStart;
//     this.capsLockOn();
//     break;
//   default:
//     break;
// }
// if (start >= 0) textArea.setRangeText(value, start, end);
// if (content === 'del' || content === 'backspace') {
//   cursorPosition = textArea.selectionStart;
// }

// this.elements.textarea.focus();
// this.elements.textarea.selectionStart = cursorPosition;
// }

// keyElement.setAttribute("data-key", key);

// keyElement.addEventListener("click", (event) => this.mouseClick(event));

// keyboardFragment.append(keyElement);

document.onkeydown = function (event) {
  console.log("event.code :>> ", event.code);
  //   let curKey = document.querySelector('')
  //   this.classList.add("asss");

  //   console.log("1 :>> ", 1);
};

let keyButton = document.querySelectorAll(".key");
// console.log(keyButton);

// keyButton.forEach((elem) => {
//   //   elem.addEventListener("click", (event) => {
//   //     //   this.mouseClick(event);
//   //     console.log("event.code :>> ", event.code);
//   //   });

//   elem.onclick = function (event) {
//     let code = this.getAttribute;
//     console.log("event.code :>> ", elem.);
//   };
// });

//     fcArray.forEach((fc) => {
//       let cards = document.createElement("div");
//       cards.classList.add("card");
//       cards.dataset.fc = `${fc}`;
//       let imgFront = document.createElement("img");
//       cards.append(imgFront);
//       imgFront.src = `./img/png/${fc}.png`;
//       imgFront.classList.add("front-face");
//       let imgBack = document.createElement("img");
//
