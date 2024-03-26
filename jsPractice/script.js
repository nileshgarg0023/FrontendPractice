// let btn = document.querySelector("#btn");
// let para = document.querySelector("#mainP");

// btn.addEventListener("click", () => {
//   para.textContent = "text changed";
// });

// let img1 = document.querySelector(".image1");
// let img2 = document.querySelector(".image2");

// document.querySelector(".swapbtn").addEventListener("click", () => {
//   let src1 = img1.src;
//   let src2 = img2.src;

//   img1.src = src2;
//   img2.src = src1;
// });

// let form = document.querySelector("form");
// let input1 = document.querySelectorAll('input[type="text"]');
// let heading = document.querySelector("h4");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   //   if (input1.value === "" || input2.value === "") {
//   //     heading.textContent = "Error! Values cannot be empty";
//   //     heading.style.color = "red";
//   //   } else {
//   //     heading.textContent = "form submitted";
//   //   }

//   for (let i = 0; i < input1.length; i++) {
//     if (input1[i].value.trim() === "") {
//       heading.textContent = "Error, some fields are empty";
//       heading.style.color = "red";
//       break;
//     }
//   }
// });

// let add = document.querySelector("#add");
// let remove = document.querySelector("#remove");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// let li;

// add.addEventListener("click", () => {
//   if (inp.value.trim() === "") {
//   } else {
//     li = document.createElement("li");
//     li.textContent = inp.value;
//     ul.appendChild(li);
//     inp.value = "";
//   }
// });

// remove.addEventListener("click", () => {
//   ul.removeChild(li);
// });

// let btn = document.querySelector("#start");
// let btn2 = document.querySelector("#pause");
// let btn3 = document.querySelector("#stop");
// let h3 = document.querySelector("h3");
// let pause = false;
// let count = 0;
// var int;

// btn.addEventListener("click", () => {
//   pause = false;
//   int = setInterval(() => {
//     if (!pause) {
//       h3.textContent = count;
//       count++;
//     }
//   }, 1000);
// });
// btn2.addEventListener("click", () => {
//   pause = true;
// });
// btn3.addEventListener("click", () => {
//   clearInterval(int);
// });

// {let home = document.querySelector("#home");
// let about = document.querySelector("#about");
// let content = document.querySelector("#content");

// let hometext = document.querySelector("#hometext");
// let abouttext = document.querySelector("#abouttext");
// let contenttext = document.querySelector("#contenttext");

// hometext.style.display = "block";
// hometext.style.width = "50%";

// home.addEventListener("click", () => {
//   removeall();
//   hometext.style.display = "block";
//   hometext.style.width = "50%";
// });
// about.addEventListener("click", () => {
//   removeall();
//   abouttext.style.display = "block";
//   abouttext.style.width = "50%";
// });
// content.addEventListener("click", () => {
//   removeall();
//   contenttext.style.display = "block";
//   contenttext.style.width = "50%";
// });

// function removeall() {
//   document.querySelectorAll("h3").forEach((h3) => {
//     h3.style.display = "none";
//   });
// }}

// let divs = document.querySelectorAll(".tab");
// let texts = document.querySelectorAll("h3");

// texts[0].style.display = "block";
// texts[0].style.width = "50%";

// divs.forEach((div, index) => {
//   div.addEventListener("click", () => {
//     hideAllText();
//     texts[index].style.display = "block";
//     texts[index].style.width = "50%";
//   });
// });

// function hideAllText() {
//   texts.forEach((text) => {
//     text.style.display = "none";
//   });
// }
