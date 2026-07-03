// let userName = "BackupCookie686";
// console.log(userName);

// let b = undefined;
// console.log(b);

// let c = NaN;
// console.log(c);

// let a = 10;
// console.log(a/userName);

// let n = null
// console.log("type is " + typeof(n));

const StudentList = [
    {
        stuName:"Anoushka",
        stuCourse:"Tier3",
        stuAge:17,
        stuCourse: {
            plan: "Tier3",
            courses:["C", "C++", "Java", "Python", "HTML", "CSS", "JS", "ReactJS", "NodeJS", "MongoDB", "SQL"]
        }
    },
    {
        stuName:"Adham",
        stuCourse:"Tier3",
        stuAge:17,
        stuCourse: {
            plan: "Tier3",
            courses:["C", "C++", "Java", "Python", "HTML", "CSS", "JS", "ReactJS", "NodeJS", "MongoDB", "SQL"]
        }
    },
    {
        stuName:"Santhosh",
        stuCourse:"Tier3",
        stuAge:17,
        stuCourse: {
            plan: "Tier3",
            courses:["C", "C++", "Java", "Python", "HTML", "CSS", "JS", "ReactJS", "NodeJS", "MongoDB", "SQL"]
        }
    },
    {
        stuName:"Sanjana",
        stuCourse:"Tier3",
        stuAge:17,
        stuCourse: {
            plan: "Tier2",
            courses:["C", "C++", "Java", "Python", "HTML", "CSS", "JS", "MongoDB", "SQL"]
        }
    }
]

console.log(StudentList);
console.log(StudentList[3]["stuCourse"])
console.log(StudentList[3].stuCourse.courses)