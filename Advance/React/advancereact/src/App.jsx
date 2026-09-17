import React, { useState } from 'react'

function App(){
  let [count, setCount] = useState(0);
  let [bg, setBg] = useState("dark");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const handleCount = ()=>{
    // ++count;
    setCount(++count);
    console.log(count); 
  }

  const handleBg = ()=>{
    setBg(bg === "dark" ? "light" : "dark");
  }

  const handleUser = (e)=> {
    setUsername(e.target.value)
  }

  const handlePassword = (e)=> {
    setPassword(e.target.value)
  }

  

  const students = [
    { id: 1, name: "Arun Kumar", course: "Python", age: 21, city: "Chennai" },
    { id: 2, name: "Bala Kumar", course: "Java", age: 22, city: "Coimbatore" },
    { id: 3, name: "Charan", course: "React", age: 20, city: "Madurai" },
    { id: 4, name: "Deepak", course: "C++", age: 23, city: "Salem" },
    { id: 5, name: "Ezhil", course: "JavaScript", age: 21, city: "Trichy" },
    { id: 6, name: "Farhan", course: "Python", age: 22, city: "Vellore" },
    { id: 7, name: "Gokul", course: "Java", age: 20, city: "Erode" },
    { id: 8, name: "Hari", course: "React", age: 21, city: "Tirunelveli" },
    { id: 9, name: "Imran", course: "C++", age: 23, city: "Chennai" },
    { id: 10, name: "Jeeva", course: "Python", age: 22, city: "Coimbatore" },

    { id: 11, name: "Karthik", course: "Java", age: 21, city: "Madurai" },
    { id: 12, name: "Lokesh", course: "React", age: 20, city: "Salem" },
    { id: 13, name: "Manoj", course: "JavaScript", age: 22, city: "Trichy" },
    { id: 14, name: "Naveen", course: "Python", age: 23, city: "Vellore" },
    { id: 15, name: "Prakash", course: "C++", age: 21, city: "Erode" },
    { id: 16, name: "Rahul", course: "Java", age: 22, city: "Chennai" },
    { id: 17, name: "Saran", course: "React", age: 20, city: "Coimbatore" },
    { id: 18, name: "Sanjay", course: "Python", age: 21, city: "Madurai" },
    { id: 19, name: "Tamil", course: "JavaScript", age: 23, city: "Salem" },
    { id: 20, name: "Udhay", course: "C++", age: 22, city: "Trichy" },

    { id: 21, name: "Vasanth", course: "Python", age: 20, city: "Vellore" },
    { id: 22, name: "Vijay", course: "Java", age: 21, city: "Erode" },
    { id: 23, name: "Yashwanth", course: "React", age: 22, city: "Chennai" },
    { id: 24, name: "Ajay", course: "C++", age: 23, city: "Coimbatore" },
    { id: 25, name: "Ashwin", course: "Python", age: 21, city: "Madurai" },
    { id: 26, name: "Bharath", course: "Java", age: 20, city: "Salem" },
    { id: 27, name: "Dinesh", course: "React", age: 22, city: "Trichy" },
    { id: 28, name: "Ganesh", course: "JavaScript", age: 21, city: "Vellore" },
    { id: 29, name: "Harish", course: "Python", age: 23, city: "Erode" },
    { id: 30, name: "Kishore", course: "C++", age: 22, city: "Chennai" },

    { id: 31, name: "Madhan", course: "Java", age: 21, city: "Coimbatore" },
    { id: 32, name: "Nithin", course: "React", age: 20, city: "Madurai" },
    { id: 33, name: "Praveen", course: "Python", age: 22, city: "Salem" },
    { id: 34, name: "Ramesh", course: "JavaScript", age: 23, city: "Trichy" },
    { id: 35, name: "Rohit", course: "C++", age: 21, city: "Vellore" },
    { id: 36, name: "Sachin", course: "Python", age: 20, city: "Erode" },
    { id: 37, name: "Surya", course: "Java", age: 22, city: "Chennai" },
    { id: 38, name: "Tharun", course: "React", age: 21, city: "Coimbatore" },
    { id: 39, name: "Varun", course: "JavaScript", age: 23, city: "Madurai" },
    { id: 40, name: "Abhishek", course: "Python", age: 22, city: "Salem" },

    { id: 41, name: "Aditya", course: "C++", age: 20, city: "Trichy" },
    { id: 42, name: "Akash", course: "Java", age: 21, city: "Vellore" },
    { id: 43, name: "Anand", course: "React", age: 22, city: "Erode" },
    { id: 44, name: "Aravind", course: "Python", age: 23, city: "Chennai" },
    { id: 45, name: "Dhanush", course: "JavaScript", age: 21, city: "Coimbatore" },
    { id: 46, name: "Kavin", course: "C++", age: 20, city: "Madurai" },
    { id: 47, name: "Mithun", course: "Java", age: 22, city: "Salem" },
    { id: 48, name: "Ranjith", course: "React", age: 21, city: "Trichy" },
    { id: 49, name: "Saravanan", course: "Python", age: 23, city: "Vellore" },
    { id: 50, name: "Yogesh", course: "JavaScript", age: 22, city: "Erode" }
  ];
  // <table></table>
  {/* thead th tr td tbody->one time  */}
  {/* filter like search bar a */}
  {/* {dropdown ->5,10,20,35,50} */}

  let title = Object.keys(students[0]);
  console.log(title);

  let options = [5, 10, 20, 35, 50];

  let [search, setSearch] = useState("");
  const filteredStudents = students.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
    );
  
  const handleSearching = (e)=>{
    setSearch(e.target.value);
  }

  let [rows, setRows] = useState(50);

  const handleRows = (e)=> {
    setRows(e.target.value);
  }
  
  return (
    <div className='App' style={{height:"100%", width:"100%", backgroundColor:bg=="dark"?"black":"white"}}>
      <button onClick={handleCount}>Add {count}</button>
      <button onClick={handleBg}>{bg}</button>
      <input type='text' placeholder='Enter userName' onChange={(e)=>setUsername(e.target.value)}></input>
      <input type='text' placeholder='Enter userName' onChange={handlePassword}></input>
      <p>{username}</p>
      <p>{password}</p>

      <input type='text' placeholder='Filter' onChange={handleSearching}></input>
      <select value={rows} onChange={handleRows}>
        {options.map((item)=>(<option value={item}>{item}</option>))}
      </select>

      <table>
        <thead>
          <tr>
            {title.map((item)=>(<th>{item}</th>))}
          </tr>
        </thead>

        <tbody>
          {filteredStudents.slice(0, rows).map((row)=>(
            <tr>
              {title.map((key)=>(
                <td>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;