function readingTime() {
    const text = document.getElementById("sport1").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  }
  readingTime();

  function readingTime2() {
    const text = document.getElementById("sport2").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time2").innerText = time;
  }
  readingTime2();

function readingTime3() {
    const text = document.getElementById("sport3").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time3").innerText = time;
  }
  readingTime3();

  function readingTime4() {
    const text = document.getElementById("sport4").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time4").innerText = time;
  }
  readingTime4();