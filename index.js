const keysEn = [
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
  "ShiftLeft",
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
  "ShiftRight",
  "ControlLeft",
  "Meta",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

const keysRu = [
  "ё",
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
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "\\",
  "Delete",
  "CapsLock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  "э",
  "Enter",
  "ShiftLeft",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
  "ArrowUp",
  "ShiftRight",
  "ControlLeft",
  "Meta",
  "AltLeft",
  "Space",
  "AltRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowRight",
  "ControlRight",
];

let keys = keysEn;
let bool = true;
let caps = false;

let p = document.createElement("p");
p.classList.add("title");
p.innerHTML = "RSS Виртуальная клавиатура";
document.body.appendChild(p);

let textarea = document.createElement("textarea");
textarea.classList.add("textarea");
textarea.autofocus = true;
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
    if (caps == "true") {
      key.classList.add("caps");
    }

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
      case "ShiftRight":
      case "ShiftLeft":
        key.classList.add("shift");
        key.innerHTML = "Shift";
        break;
      case "ControlLeft":
      case "ControlRight":
        key.classList.add("ctrl");
        key.innerHTML = "Ctrl";
        break;
      case "AltLeft":
      case "AltRight":
        key.classList.add("alt");
        key.innerHTML = "Alt";
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
      default:
        if (caps == true) {
          key.innerHTML = elem.toUpperCase();
          elem = elem.toUpperCase();
        } else {
          key.innerHTML = elem;
        }
        break;
    }

    key.setAttribute("id", elem);

    keyboard.appendChild(key);
  });
}

document.onkeydown = function (event) {
  console.log("event.code :>> ", event.code);
  console.log("event.key :>> ", event.key);
  let activeKey = document.getElementById(event.key);

  if (activeKey === null) {
    if (event.code == "Space") {
      activeKey = document.getElementById(event.code);
    }
  }

  if (
    event.key == "Shift" ||
    event.key == "Control" ||
    event.key == "Alt" ||
    event.key == "AltGraph"
  ) {
    activeKey = document.getElementById(event.code);
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

  if (
    event.key == "Shift" ||
    event.key == "Control" ||
    event.key == "Alt" ||
    event.key == "AltGraph"
  ) {
    activeKey = document.getElementById(event.code);
  }

  if (activeKey !== null) {
    activeKey.classList.remove("active");
  }
};

document.addEventListener("keydown", function (event) {
  if (event.shiftKey && event.ctrlKey) {
    bool = !bool;
    if (bool == false) {
      keys = keysRu;
    } else {
      keys = keysEn;
    }
    keyboard.innerHTML = "";
    createKey(keys);
  }

  if (event.key == "CapsLock") {
    caps = !caps;
    keyboard.innerHTML = "";
    createKey(keys);
    document.getElementById("CapsLock").classList.add("active");
  }
});

let footer = document.createElement("p");
footer.classList.add("footer");
footer.innerHTML =
  "Клавиатура создана на операционной системе Windows Для переключения языка комбинация Ctrl + Shift";
document.body.appendChild(footer);
