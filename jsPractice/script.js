// let btn = document.querySelector("#btn");

// let input = document.querySelector("input");

// let data = [
//   {
//     name: "harsh",
//     src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "nilu",
//     src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "pilu",
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D",
//   },
//   {
//     name: "gilu",
//     src: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D",
//   },
// ];

// var pers = "";

// data.forEach((elem) => {
//   pers += `<div class="person">
//     <div class="img">
//         <img src=${elem.src}
//             alt="">
//     </div>
//     <h4>${elem.name}</h4>
// </div>`;
// });

// document.querySelector(".people").innerHTML = pers;

// input.addEventListener("input", () => {
//   let matching = data.filter((e) => {
//     return e.name.startsWith(input.value);
//   });

//   var newusers = "";
//   matching.forEach((elem) => {
//     newusers += `<div class="person">
//       <div class="img">
//           <img src=${elem.src}
//               alt="">
//       </div>
//       <h4>${elem.name}</h4>
//   </div>`;
//   });

//   document.querySelector(".people").innerHTML = newusers;
// });

let textarea = document.querySelector("textarea");
let counter = document.querySelector("#counter");

textarea.addEventListener("input", () => {
  counter.textContent = textarea.value.length;
});
