// const areas = document.querySelectorAll('map[name="image-map"] area');

// console.log(areas);
// areas.forEach((area) => {
//   area.addEventListener("click", function (event) {
//     event.preventDefault();
//     const title = this.title;
//     console.log(title);
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('area[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function () {
      const targetID = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        addEventListener("click", function () {
          targetElement.classList.add("highlight");
        });
        addEventListener("dblclick", function () {
          targetElement.classList.remove("highlight");
        });
        // targetElement.classList.add("highlight");
        // setTimeout(() => {
        //   targetElement.classList.remove("highlight");
        // }, 10000);
      }
    });
  });
});
