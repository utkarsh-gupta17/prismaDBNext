"use client";
import { useState,React,useEffect }  from 'react'
import Card from './Card'
import { getAllStudents } from '@/services/studentService';

const ShowAll = () => {

  const [students, setStudents] = useState([]);

   async function loadStudents(){
    try {
      const res = await getAllStudents();
      console.log(res);
      console.log(res.data[0]);
      // const studentArrayofObjects = res.data;
      // console.log(studentArrayofObjects);
      setStudents(res.data);
      console.log(students);
    } catch (error) {
      console.log("Error in ShowAll.jsx file");
      console.log(error);
    }
   } 

  useEffect(() => {
    loadStudents();
  }, [])
  

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
                <h1 className="text-grey-darkest text-center">Students List</h1>
                <div className="flex mt-4">
                    <button className="p-2 rounded-lg font-bold hover:bg-blue-600 hover:bg-teal w-full bg-blue-500 text-white">Add New Student</button>
                </div>
            </div>
            <div>
                {/* <Card/> */}
                <ul>
                  {students.map(student=>(
                    <li key={student.id}>
                      <Card student={student}/>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ShowAll