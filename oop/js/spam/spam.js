const input = document.querySelectorAll("[contenteditable='true']")[1];

function dispatch(input, message) {
  var evt = new InputEvent('input', {
    bubbles: true,
  });
  setTimeout(() => {
    input.innerHTML = message;
    input.dispatchEvent(evt);
    document.querySelector('span[data-icon="send"]').click();
  }, 3000)
}

function lyricsPrank(text) {
  let textArr = text.split(" ")

  for (let i = 0; i < textArr.length; i++) {
    dispatch(input, textArr[i])
  }
}

function bombPrank(message, count) {
  let i = 0;
  while (i < count) {
    dispatch(input, message);
    setInterval(() => {
      dispatch(input, message);
      i++;
    }, 3000)
  }
}

bombPrank('i love you', 10) // will send 'i love you' 100 times
lyricsPrank()