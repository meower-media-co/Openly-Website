//Theme Buttons Left Position

function interval() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.overflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer.parentNode.removeChild(outer);
  document.getElementById("theme").style.left = window.innerWidth - scrollbarWidth - (window.innerHeight * .1) + "px";
}
window.onresize = () => {interval();}
interval();
//Dark Mode

//Keyboard Inputs
let a = [];

//The status of keydown input
let delta = document.addEventListener("keydown", check0);

window.onload = () => {
  delta = "";
  a = [];
  delta = document.addEventListener("keydown", check0);
}

const button = document.getElementById("theme");
let news;
if (document.getElementById("news")) {
  news = [document.getElementById("news"), document.getElementById("news1"), document.getElementById("news2")];
}
if (document.getElementById("news3")) {
  news.push(document.getElementById("news3"));
}

if (localStorage.getItem("darkm") == "true") {
  if (news) {
    for (let z = 0; z < news.length; z++) {
      news[z].className = "newsdark";
    }
  }
  button.innerHTML = "<center><img style='filter: invert(1)' src = 'assets/sun.svg' style='height:6vh; width:6vh;'></img></center>";
  document.body.style.backgroundColor = "#202124";
  document.body.style.color = "#fff";
  document.getElementById("create").style.background = "linear-gradient(180deg, #52C1FF 0%, #618dd4 100%)";
} else {
  if (news) {
    for (let z = 0; z < news.length; z++) {
      news[z].className = "news";
    }
  }
  button.innerHTML = "<center><img  style='filter: invert(1)' src = 'assets/moon.svg' style='height:6vh; width:6vh;'></img></center>";
}


function check0(e) {
  a.push(e.key);
  check();
}
function check() {
  for (let i = 0; i < a.length; i++) {
    if (a[i-3]=="h" && a[i-2]=="o" && a[i-1]=="m" && a[i]=="e") {
      window.location.href = "home.html";
    }
    if (a[i - 5] == "o" && a[i - 4] == "p" && a[i - 3] == "e" && a[i - 2] == "n" && a[i - 1] == "l" && a[i] == "y") {
      if (localStorage.getItem("darkm") == "true") {
        if (news) {
          for (let z = 0; z < news.length; z++) {
            news[z].className = "news";
          }
        }
        button.innerHTML = "<center><img  style='filter: invert(1)' src = 'assets/moon.svg' style='height:6vh; width:6vh;'></img></center>";
        localStorage.setItem("darkm", "false");
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "black";
        document.getElementById("create").style.background = "linear-gradient(180deg, #52C1FF 0%, #00F0FF 100%)";
      } else {
        if (news) {
          for (let z = 0; z < news.length; z++) {
            news[z].className = "newsdark";
          }
        }
        button.innerHTML = "<center><img  style='filter: invert(1)' src = 'assets/sun.svg' style='height:6vh; width:6vh;'></img></center>";
        localStorage.setItem("darkm", "true");
        document.body.style.backgroundColor = "#202124";
        document.body.style.color = "#fff";
        document.getElementById("create").style.background = "linear-gradient(180deg, #52C1FF 0%, #618dd4 100%)";
      }
      a = [];
    }
  }
}


