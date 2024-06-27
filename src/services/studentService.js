import { httpAxios } from "@/httpAxios.js";

export async function getAllStudents(){
  try {
    const result = await httpAxios.get("/api/student").then((response)=>response.data);
    // console.log(result);
    return result;
  } catch (error) {
    console.log("Error in studentServices.js");
    console.log(error);
  }
}