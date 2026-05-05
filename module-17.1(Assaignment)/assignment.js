/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
const divideAsset = area / 2;
console.log(divideAsset);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (let i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`${i} - medicine`);
  } else {
    console.log(`${i} - rest`);
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jgp";
//write your code here
if (
  fileName.endsWith(".pdf") ||
  fileName.endsWith(".docx") ||
  fileName.startsWith("#")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - PH Email Generator */
const user = { name: "Shaon", roll: 632, department: "BBA" };
console.log(
  `${user.name.toLowerCase() + user.roll}.${user.department.toLowerCase()}@ph.ac.bd`,
);

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
var increment = 0.05;
//write your code here
for (let i = 1; i <= experience; i++) {
  let increased = startingSalary * increment;
  startingSalary += increased;
}
console.log(startingSalary.toFixed(2));
