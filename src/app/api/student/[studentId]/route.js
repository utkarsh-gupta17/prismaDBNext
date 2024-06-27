import { NextResponse } from "next/server.js";
import prisma from "../../../../../db.config.js";

export const GET = async(req, { params } ) => {
  const studentId = params.studentId;

  try {
    const student = await prisma.student.findFirst({
      where:{
        id:Number(studentId)
      },
    });
  
    return NextResponse.json({
      status: 200,
      data: student,
    })
  } catch (error) {
    console.log("Error getting a student!!");
    console.log(error);
  }
}

export const DELETE = async(req, { params }) => {
  const studentId = params.studentId;

  try {
    const student = await prisma.student.delete({
      where:{
        id:Number(studentId)
      },
    });
  
    return NextResponse.json({
      status: 200,
      message: "Student Deleted Successfully",
    })
  } catch (error) {
    console.log("Error deleting a student!!");
    console.log(error);
  }
}


export const PUT = async(req, { params })=>{
  const studentId = params.studentId;
  const { firstName,lastName,dob,email,departmentId} = req.body;

  try {
    await prisma.student.update({
      where:{
        id:Number(studentId),
      },
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
      message: "Student Updated",
    })
  } catch (error) {
    console.log("Error editing a student!!");
    console.log(error);
  }
}