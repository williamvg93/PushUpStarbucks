console.log("funcionando");

const contIma = document.querySelector("#mainImg");
const mainInfo = document.querySelectorAll(".mainInfo");
const navHam = document.querySelector(".navHam");
const navClo = document.querySelector(".navClo");

document.querySelectorAll(".btn-carru").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    /* console.log(e.target.getAttribute("value")); */

    switch (e.target.getAttribute("value")) {
      case "carr1":
        contIma.src = "./img/img1.png";
        mainInfo.forEach((ele) => {
          ele.style.color = "var(--colorMainGreen)";
        });
        navHam.style.filter = "var(--colorSvgGreen)";
        navClo.style.filter = "var(--colorSvgGreen)";
        break;
      case "carr2":
        contIma.src = "./img/img2.png";
        mainInfo.forEach((ele) => {
          ele.style.color = "var(--colorMainBlue)";
        });
        navHam.style.filter = "var(--colorSvgBlue)";
        navClo.style.filter = "var(--colorSvgBlue)";
        break;
      case "carr3":
        contIma.src = "./img/img3.png";
        mainInfo.forEach((ele) => {
          ele.style.color = "var(--colorMainOrange)";
        });
        navHam.style.filter = "var(--colorSvgOrange)";
        navClo.style.filter = "var(--colorSvgOrange)";
        break;
      default:
        break;
    }
  });
});
  