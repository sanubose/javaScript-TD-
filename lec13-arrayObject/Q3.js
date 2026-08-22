// Question 3 — Employee System 👨‍💻
// let employees = [
//     { name: "A", salary: 40000, experience: 2 },
//     { name: "B", salary: 70000, experience: 5 },
//     { name: "C", salary: 30000, experience: 1 },
//     { name: "D", salary: 90000, experience: 7 }
// ];

// Task: Sirf woh employees nikalo jinki salary ₹50,000 se zyada hai.
//Task: find list of emplyee 

let employees = [
    { name: "A", salary: 40000, experience: 2 },
    { name: "B", salary: 70000, experience: 5 },
    { name: "C", salary: 30000, experience: 1 },
    { name: "D", salary: 90000, experience: 7 }
];

let above50k = employees.filter((obj)=>{
   return  obj.salary>50000
})
console.log(above50k)

let allEmp =employees.map((obj)=>{
            console.log(obj.name)
})