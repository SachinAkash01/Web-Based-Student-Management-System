var express = require("express");
let bodyParser = require('body-parser');
let cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Starting the server
app.listen(3000, () => {
console.log("Server running on port 3000");
});

let students =[{
	"firstName": "Saman",
	"lastName":"Kumara",
	"dateOfBirth": "2018-06-23",
	"email": "saman@gmail.com",
	"sid": "IT18236545",
	"center": "Kandy",
	"semester": 1,
	"cgpa": 3.5
},
{
	"firstName": "Manuja",
	"lastName":"Theekshana",
	"dateOfBirth": "2019-05-28",
	"email": "manuja@gmail.com",
	"sid": "IT19236545",
	"center": "Colombo",
	"semester": 1,
	"cgpa": 3.8		  
},
{
	"firstName": "Sachin",
	"lastName":"Akash",
	"dateOfBirth": "2019-12-22",
	"email": "sachin@gmail.com",
	"sid": "IT21351372",
	"center": "Colombo",
	"semester": 2,
	"cgpa": 3.95	
},
{
	"firstName": "Thaditha",
	"lastName":"Rodrigo",
	"dateOfBirth": "2019-12-15",
	"email": "thaditha@gmail.com",
	"sid": "IT21351440",
	"center": "Colombo",
	"semester": 2,
	"cgpa": 3.95
},
{
	"firstName": "Dinidu",
	"lastName":"Bandara",
	"dateOfBirth": "2019-07-21",
	"email": "dinidu@gmail.com",
	"sid": "IT21041560",
	"center": "Jaffna",
	"semester": 1,
	"cgpa": 3.79
}];

//Get all students
app.get("/students",(req,res) => {
	res.json(students);
});

//insert records
app.post("/student", (req, res)=> {
	const newstudent = req.body;
	students.push(newstudent);
	res.send('Student is added to the list');
	});

//Delete Student by sid
app.delete("/student/:sid", (req, res) => {
	let studentId = req.params.sid;
	let currentStudent = students.filter((x) => x.sid == studentId)[0];
	if (currentStudent) {
	students = students.filter((x) => x.sid != studentId);
	res.json({message: "Student Deleted Successfully!!!"});
	res.sendStatus(200);
	} else {
	res.json({message: "Student does not Exists!!!"});
	res.sendStatus(404);
	}
	});

//delete student by email
app.delete("/students/:email", (req, res) => {
	let studentEmail = req.params.email;
	let currentStudent = students.filter((x) => x.email == studentEmail)[0];
	if (currentStudent) {
	students = students.filter((x) => x.email != studentEmail);
	res.json({message: "Student Deleted Successfully!!!"});
	res.sendStatus(200);
	} else {
	res.json({message: "Student does not Exists!!!"});
	res.sendStatus(404);
	}
	});

//update student record by sid
app.put("/student/:id", (req, res)=> {
	let sid=req.params.id;
	let stu=req.body;
	let tempStu=students.filter((x) => x.sid ===sid)[0];
	if(tempStu){
	tempStu.firstName = stu.firstName;
	tempStu.lastName = stu.lastName;
	tempStu.dateOfBirth = stu.dateOfBirth;
	tempStu.email = stu.email;
	tempStu.sid = stu.sid;
	tempStu.center = stu.center;
	tempStu.semester = stu.semester;
	tempStu.cgpa = stu.cgpa;
	res.json({message: "Student Updated Successfully!!!"});
	res.sendStatus(200); 
	}
	else{
	res.json({message: "Student does not exists!!!"});
	res.sendStatus(404); 
	}
	});
	
//Find by SID
app.get("/students/id=:id", (req, res)=> {
	let stid=req.params.id;
	let tempStu=students.filter((x) => x.sid == stid);
	if(tempStu){
	res.json(tempStu);
	}
	else{
	res.json({message: "Student does not exists!!!"});
	res.sendStatus(404);
	}
	});
	
//Find by FName
app.get("/students/name=:name", (req, res)=> {
	let stname=req.params.name;
	let tempStu=students.filter((x) => x.firstName == stname);
	if(tempStu){
	res.json(tempStu);
	}
	else{
	res.json({message: "Student does not exists!!!"});
	res.sendStatus(404);
	}
	});

//Find by center
app.get("/students/center=:center", (req, res)=> {
	let stcenter=req.params.center;
	let tempStu=students.filter((x) => x.center == stcenter);
	if(tempStu){
	res.json(tempStu);
	}
	else{
	res.json({message: "Student does not exists!!!"});
	res.sendStatus(404);
	}
	});

//Find by semester
app.get("/students/semester=:semester", (req, res)=> {
	let stsemester=parseInt(req.params.semester);
	let tempStu=students.filter((x) => x.semester == stsemester);
	if(tempStu){
	res.json(tempStu);
	}
	else{
	res.json({message: "Student does not exists!!!"});
	res.sendStatus(404);
	}
	});

//Find by cgpa
app.get("/students/cgpa=:cgpa", (req, res)=> {
	let stcgpa=parseFloat(req.params.cgpa);
	let tempStu=students.filter((x) => x.cgpa == stcgpa);
	if(tempStu){
	res.json(tempStu);
	}
	else{
	res.json({message: "Student does not exists!!!"});
	res.sendStatus(404);
	}
	});