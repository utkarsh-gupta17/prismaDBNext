import React from 'react'

const Card = (student) => {
  return (
    <div className="flex my-8 items-center border-2 rounded-lg border-black p-4">
      <div className='w-4/5'>
        <p className="w-full text-grey-darkest">id: <span>{student.id}</span></p>
        <p className="w-full text-grey-darkest">First Name: <span>{student.firstName}</span></p>
        <p className="w-full text-grey-darkest">Last Name: <span>{student.lastName}</span></p>
        <p className="w-full text-grey-darkest">DOB: <span>{student.dob}</span></p>
        <p className="w-full text-grey-darkest">Email: <span>{student.email}</span></p>
        <p className="w-full text-grey-darkest">Department Id: <span>{student.departmentId}</span></p>
      </div>
      <div className='w-1/5 flex flex-col'>
        <button className="m-2 p-2 rounded-lg text-white bg-green-500 hover:bg-green-600">Edit</button>
        <button className="m-2 p-2 rounded-lg text-white bg-red-500 hover:bg-red-600">Remove</button>
      </div>
    </div>
  )
}

export default Card