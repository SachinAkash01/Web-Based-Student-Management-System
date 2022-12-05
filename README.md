# Web-Based-Student-Management-System
Year2 Semester1 ETF Assignment 2: web-based Student Management System, which automates all the manual aspects of the conventional way of managing student records. Its friendly WEB UI allow users to handle students in a convenient, efficient, and simplified manner. The system has a REST API to manage the resources in the backend.

Problem description

This assignment introduces a web-based Student Management System, 
which automates all the manual aspects of the conventional way of 
managing student records. Its friendly WEB UI allow users to handle 
students in a convenient, efficient, and simplified manner. The system 
has a REST API to manage the resources in the backend.


REST API
• Insert Student
• Show all
• Find Student by SID
• Find Students by name
• Find Students by center
• Find Students registered in a specific Semester
• Find Students by specific cgpa
• Update by SID
• Delete by SID
• Delete by Email


Student record format (JSON Array)

{
"firstName": “Saman",
"lastName": “John",
"dateOfBirth": "1998-06-23",
"email": “saman@gmail.com",
“sid": “IT17236545”,
“center": “Kandy”, *Could be Kandy, Jaffna and Colombo
“semester": 1, *Could be 1 or 2
“cgpa”:3.5
}


Front End (HTML+CSS)
jQuery (5 different uses in the site)
Ajax (the data fetch from server)
JSON for communication
Back End (REST API)
