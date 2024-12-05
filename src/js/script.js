// const preloader = document.getElementById("preloader");

// window.addEventListener("load", function () {
//   preloader.style.display = "none";
// });

// (function () {
//   emailjs.init({
//     publicKey: "Ag8llMuFZRilCcglW",
//     // Do not allow headless browsers
//     blockHeadless: true,
//     blockList: {
//       // Block the suspended emails
//       list: ["foo@emailjs.com", "bar@emailjs.com"],
//       // The variable contains the email address
//       watchVariable: "userEmail",
//     },
//     limitRate: {
//       // Set the limit rate for the application
//       id: "app",
//       // Allow 1 request per 10s
//       throttle: 10000,
//     },
//   });
// })();

let loading = document.getElementById("loading");
window.addEventListener("load", function () {
  loading.style.display = "none";
});
this.document.querySelector("body").classList.remove("overflow-hidden");
this.document.querySelector("#hero").classList.remove("hidden");
this.document.querySelector("#about").classList.remove("hidden");
this.document.querySelector("#portfolio").classList.remove("hidden");

let loginForm = document.getElementById("loginForm");
let buttonSend = document.querySelector(".button-send");
let loadingButton = document.querySelector(".loading-button");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  buttonSend.disabled = true;
  loadingButton.classList.remove("hidden");
  loadingButton.classList.add("block");
  const data = new FormData(loginForm);

  emailjs.init({
    publicKey: "Ag8llMuFZRilCcglW",
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ["foo@emailjs.com", "bar@emailjs.com"],
      // The variable contains the email address
      watchVariable: "userEmail",
    },
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  // return false;

  var templateParams = {
    from_name: data.get("name"),
    to_name: "Reusmana Sujani",
    reply_to: data.get("email"),
    message: data.get("message"),
  };
  emailjs.send("service_dwdfvtj", "template_kg4kkn5", templateParams).then(
    (result) => {
      alert("Pesan Terkirim");
      buttonSend.disabled = false;
      loadingButton.classList.add("hidden");
      loadingButton.classList.remove("block");
      e.target.reset();
    },

    (error) => {
      alert("Pesan Gagal Terkirim");
      buttonSend.disabled = false;
      loadingButton.classList.add("hidden");
      loadingButton.classList.remove("block");
      e.target.reset();
    }
  );
});

const element = document.getElementById("hamburger");
const navmenu = document.querySelector("#nav-menu");
element.addEventListener("click", function () {
  element.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});

// navbar ffixed
window.onscroll = function () {
  const totop = document.querySelector("#totop");
  const header = document.querySelector("header");
  const fixnav = header.offsetTop;

  if (window.pageYOffset > fixnav) {
    header.classList.add("navbar-fixed");
    totop.classList.remove("hidden");
    totop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    totop.classList.remove("flex");
    totop.classList.add("hidden");
  }
};

// next
window.addEventListener("click", function (e) {
  if (e.target != element && e.target != navmenu) {
    element.classList.remove("hamburger-active");
    navmenu.classList.add("hidden");
  }
});

const darktoggle = document.querySelector("#darktoggle");
const html = document.querySelector("html");

darktoggle.addEventListener("click", function () {
  if (darktoggle.checked) {
    localStorage.theme = "dark";
    html.classList.add("dark");
  } else {
    localStorage.theme = "light";
    html.classList.remove("dark");
  }
});

//move toogle
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darktoggle.checked = true;
} else {
  darktoggle.checked = false;
}

// animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entri) => {
    if (entri.isIntersecting) {
      if (entri.target.classList.contains("hidden-animate-l")) {
        entri.target.classList.add("show-animate-l");
      } else if (entri.target.classList.contains("hidden-animate-r")) {
        entri.target.classList.add("show-animate-r");
      } else {
        entri.target.classList.add("show-animate");
      }
    } else {
      // entri.target.classList.remove("show-animate");
    }
  });
});

const hiddenSection = document.querySelectorAll(".hidden-animate");
// observe all hidden element
hiddenSection.forEach((intercetion) => observer.observe(intercetion));
const hiddenSectionL = document.querySelectorAll(".hidden-animate-l");
// observe all hidden element
hiddenSectionL.forEach((intercetion) => observer.observe(intercetion));
const hiddenSectionR = document.querySelectorAll(".hidden-animate-r");
// observe all hidden element
hiddenSectionR.forEach((intercetion) => observer.observe(intercetion));

const sticky = [...document.querySelectorAll(".sction")];

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < sticky.length; i++) {
    tranform(sticky[i]);
  }
});

function tranform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".cards");
  // console.log(offsetTop); //jarak stciki scroll to parent top
  // console.log(window.scrollY); //trigger scroll
  // console.log(window.innerHeight); //trigger scroll
  let percent = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  // console.log("pe" + percent);
  percent = percent < 0 ? 0 : percent > 121 ? 121 : percent;
  scrollSection.style.transform = `translateX(${-percent}vw)`;
  // scrollSection.style.transform = "rotate(180deg)";
  // console.log(scrollSection);
}
