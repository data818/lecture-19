// let myArray = ["giorgi,ani"];

// let myObj = {
//   id: 15,
//   userName: "data",
//   age: 10,
// };
// console.log(myArray);
// console.log(myObj);
// let htmlElements = document.body;

// function addHelloClass() {}
// htmlElements.classList.toggle("hello");

// function godarkmode() {
//   htmlElements.classList.add("darkmode");
//   htmlElements.classList.remove("lightmode");
// }
// function golightmode() {
//   htmlElements.classList.add("lightmode");
//   htmlElements.classList.remove("darkmode");
// }
// let htmlElements = document.head;
// console.log(document.head);
// let myfirstTitle = document.getElementById(myTitle);

// let myTitleDifferentway = document.querySelector(h1);
// myTitleDifferentway.innnerHtml = "<h2>world</h2>";
// myTitleParrentDiv.textContent = "<h2>world</h2>";

//   გამოვიძახეთ img
const bulb = document.querySelector("#bulb");
//  გამოვიძახეთ btn
const toggleLight = document.querySelector("#toggleLight");

function toggleLightFunction() {
  //                                  ნათურა გათიშლია? output:false
  if (bulb.src.includes("https://www.w3schools.com/js/pic_bulboff.gif")) {
    //                                            ჩართული ნათრის სურათი
    bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    //                       btn-ის ტექსტი
    toggleLight.textContent = "Turn off";
  } else {
    //                                            ჩანაცვლე გათიშულით
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";

    //                        ჩანაცვლე ტექსტი turn on-ით
    toggleLight.textContent = "Turn on";
  }
}

toggleLight.addEventListener("click", toggleLightFunction);
