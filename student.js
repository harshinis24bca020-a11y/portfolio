// Create a student object
let student = {
    name: "Harshini",
    rollNo: "24BCA020",
    department: "BCA",
    marks: 85
};

// Display student details
console.log("Original Student Details:");
console.log("Name:", student.name);
console.log("Roll Number:", student.rollNo);
console.log("Department:", student.department);
console.log("Marks:", student.marks);

// Modify the properties
student.name = "Harshini S";
student.marks = 92;

// Display modified details
console.log("\nModified Student Details:");
console.log("Name:", student.name);
console.log("Roll Number:", student.rollNo);
console.log("Department:", student.department);
console.log("Marks:", student.marks);