// let button = document.querySelector("#parent");
// button.addEventListener("click", function (e) {
//   console.log("works", e);
// });

// setTimeout ka code ============= //////////

// setTimeout(function () {
//   console.log("hey");
// }, 1000);

// setInterval ka code ========= ////////////

// const humaraInterval = setInterval(function () {
//   console.log("Hey1");
//   clearInterval(humaraInterval);
// }, 1000);

// Fetch api ka code  =================== //////////

// fetch("https://randomuser.me/api/")
//   .then((raw) => raw.json())
//   .then((res) => console.log(res.results[0]));

// Axios ka code

// axios
//   .get("https://randomuser.me/api/")
//   .then((res) => console.log(res.data.results[0]));

// Promises ka code
// const data = new Promise(function (resolve, reject) {
//   fetch("https://randomuser.me/api/")
//     .then((raw) => raw.json())
//     .then((res) => {
//       if (res.results[0].gender === "male") {
//         resolve();
//       } else {
//         reject();
//       }
//     });
// });

// data
//   .then(() => {
//     console.log("gender is male ");
//   })
//   .catch(() => {
//     console.log("gender is female");
//   });

// Generators ka code
// function* printNums() {
//   console.log("Started");
//   yield 1;
//   console.log("Started 2");
//   yield 2;
//   console.log("Started 3");
//   yield 3;
// }

// const ans = printNums();
// ans.next();
// ans.next();
// ans.next();

// web workers
let nums = Array.from({ length: 10000 }, (a, b) => b + 1);
const worker = new Worker("worker.js");

worker.postMessage(nums);
