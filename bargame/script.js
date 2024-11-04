let wallContener = document.querySelector(".wall-cont");

const InputCont = document.querySelector(".input-cont");
const SubMitBtn = document.querySelector("#submitBtn");
const TextClass = document.querySelector(".text-class");
let WallCount = document.querySelector(".wall-count");
let LeftNo = document.querySelector(".left-no");
let RightNo = document.querySelector(".right-no");
let RestartGame = document.querySelector("#restart");

let leftPOint = 0;
let rightPoint = 0;

SubMitBtn.addEventListener("click", () => {
  WallCount.innerHTML = "";

  const height = TextClass.value
    .split("#")
    .filter((h) => h.trim() !== "")
    .map(Number);

  let walls = [];
  height.forEach((h, index) => {
    const wall = document.createElement("div");
    wall.className = wall;
    wall.style.height = `${h * 100}px`;
    wall.style.border = "2px solid black";
    wall.innerText = `wall${index + 1}`;
    console.log("click successfully", wall.style.height);

    WallCount.appendChild(wall);
    walls.push(h);
  });

  let leftVIsibleCount = 0;
  let maxLeftHeight = 0;

  for (let i = 0; i < walls.length; i++) {
    if (walls[i] > maxLeftHeight) {
      leftVIsibleCount++;
      maxLeftHeight = walls[i];
    }
  }

  let rightVisibleCount = 0;
  let maxRightHeight = 0;
  for (let i = walls.length - 1; i >= 0; i--) {
    if (walls[i] > maxRightHeight) {
      rightVisibleCount++;
      maxRightHeight = walls[i];
    }
  }

  leftPOint += leftVIsibleCount;
  rightPoint += rightVisibleCount;

  LeftNo.value = leftPOint;
  RightNo.value = rightPoint;

 alert(`Left can see ${leftVIsibleCount} wall(s). Right can see ${rightVisibleCount} wall(s).`);

  TextClass.value = "";
});

RestartGame.addEventListener("click", () => {
  WallCount.innerHTML = "";

  TextClass.value = "";
  leftPOint = 0;
  rightPoint = 0;
  LeftNo.value = leftPOint;
  RightNo.value = rightPoint;
});
