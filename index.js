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
  "Backspace",
  "Tab",
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
  "Delete",
  "CapsLock",
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
  "Enter",
  "Shift",
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
  "ArrowUp",
  "Shift",
  "Control",
  "Meta",
  "Alt",
  "Space",
  "Alt",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "Control",
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
let keyButton = document.querySelectorAll("button");

// console.log("body :>> ", body);
// console.log("keyboard :>> ", keyboard);
function createKey() {
  keys.forEach((elem) => {
    let key = document.createElement("button");
    key.innerHTML = elem;
    key.classList.add("key");

    switch (elem) {
      case "Backspace":
        key.classList.add("backspace");
        break;
      case "Tab":
        key.classList.add("tab");
        break;
      case "Delete":
        key.innerHTML = "Del";
        break;
      case "CapsLock":
        key.classList.add("capslock");
        break;
      case "Enter":
        key.classList.add("enter");
        break;

      case "Shift":
        key.classList.add("shift");
        break;
      case "Control":
        key.classList.add("ctrl");
        key.innerHTML = "Ctrl";
        break;
      case "Alt":
        key.classList.add("alt");
        break;
      case "Meta":
        key.classList.add("win");
        key.innerHTML = "Win";
        break;
      case "Space":
        key.classList.add("space");
        key.innerHTML = "";
        break;
      case "ArrowUp":
        key.innerHTML = "↑";
        break;
      case "ArrowRight":
        key.innerHTML = "→";
        break;
      case "ArrowLeft":
        key.innerHTML = "←";
        break;
      case "ArrowDown":
        key.innerHTML = "↓";
        break;
    }
    // key.setAttribute("data-key", elem);
    key.setAttribute("id", elem);
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
  //   keyButton.forEach((button) => {
  //     button.classList.remove("active");
  //   });
  console.log("event.code :>> ", event.code);
  console.log("event.code :>> ", event.key);
  let activeKey = document.getElementById(event.key);
  console.log("activeKey :>> ", activeKey);

  if (activeKey === null) {
    if (event.code == "Space") {
      activeKey = document.getElementById(event.code);
    }
  }

  if (activeKey !== null) {
    activeKey.classList.add("active");
  }
};

document.onkeyup = function (event) {
  let activeKey = document.getElementById(event.key);
  if (activeKey === null) {
    if (event.code == "Space") {
      activeKey = document.getElementById(event.code);
    }
  }
  if (activeKey !== "null") {
    activeKey.classList.remove("active");
  }
};

// let keyButton = document.querySelectorAll("button");
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
