const ham = document.querySelector(".abs");
const ul = document.getElementById("list");

ham.addEventListener("click", handleClick);

function handleClick() {
  //   console.log(ul.classList);

  ul.classList.toggle("ul-ham");
}
// function fixNav() {
//   if (window.scrollY > nav.offsetHeight + 150) {
//     nav.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//   }
// }
