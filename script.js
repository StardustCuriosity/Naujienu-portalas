function openForm() {
    document.getElementById("prenumeratosForma").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("prenumeratosForma").style.display = "none";
  }

function readingTime() {
    const text = document.getElementById("pagr1").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time").innerText = time;
  }
  readingTime();

  function readingTime2() {
    const text = document.getElementById("pagr2").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time2").innerText = time;
  }
  readingTime2();

  function readingTime3() {
    const text = document.getElementById("pagr3").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time3").innerText = time;
  }
  readingTime3();

  function readingTime4() {
    const text = document.getElementById("pagr4").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("time4").innerText = time;
  }
  readingTime4();
