//Find all the topics and tasks which are thought in the month of October
db.topics.find({month:"october"})


// Find Company_drives
db.company_drives.find({date:{$gt:new Date("2020-10-15"),$lt:new Date("2020-10-31")}})

//Find all the company drives and students
db.company_drives.find().forEach(function(value){
    print("COmpany Name: "+value.company_name);
    print("Students Appeared :"+value.students_appeared);
})

//Find the number of problems solved by the user in codekata
db.codekata.find().forEach(function(value){
    print("Name : "+value.user_name);
    print("Problems Solved :"+value.problems_solved)
}) 

//Find all the mentors with who has the mentee's count more than 15
db.mentors.find({mentees_count:{$gt:15}})

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.usertask.find({date:{$gt:new Date(2020-10-15),$lt:new Date("2020-10-31")}}).forEach (function(value){
    print("Name : "+value.user_name);
    print("Attendance : "+value.Attendance);
    print("Task : "+value.task_submission);
})