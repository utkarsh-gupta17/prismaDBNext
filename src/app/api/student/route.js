import { NextResponse } from "next/server.js";
import prisma from "../../../../db.config.js";

// function to get data of all students
export const GET = async(req) => {
  try {
    const students = await prisma.student.findMany({});
  
    return NextResponse.json({
      status: 200,
      data: students,
    })
  } catch (error) {
    console.log("Error fetching all students!!");
    console.log(error);
  }
}

// function to create a student
export const POST = async(req) => {
  const { firstName,lastName,dob,email,departmentId} = req.body;
  try {
    const newStudent = await prisma.student.create({
      data:{
        firstName:firstName,
        lastName:lastName,
        dob:new Date(dob),
        email:email,
        departmentId:departmentId,
      }
    });
    return NextResponse.json({
      status: 200,
      data: newStudent,
      message: "Student Created",
    });
  } catch (error) {
    console.log("Error creating a student!!");
    console.log(error);
  }

}