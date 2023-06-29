import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import CourseDetails from './CourseDetails';
import { useEffect } from 'react';
function AddCourse() {

  const [form, setForm]=useState({})
  const [data,setData]=useState([])

  useEffect(()=>{
    get()
    console.log(data)
  },[data])

const handleClick=()=>{
  console.log("Hellow world")
  console.log(form)
  addf()
}

const onDelete=(id)=>{
  axios.delete(`http://localhost:3001/posts/${id}`)
  console.log("it is getting deleted",id);  
}
const addf=async()=>{
   const response=await axios.post("http://localhost:3001/posts",form)
}
const get =async()=>{
  const response=await axios.get("http://localhost:3001/posts")
  if(response && response.data){
    console.log(response.data);
  }
  setData(response.data)
}
const handleChange=(e)=>{
  console.log(e.target.name +" "+e.target.value)
  setForm({...form , [e.target.name]:e.target.value})
}
  return (
  <div className='overflow'>
    <div className="form">
        <h3 className='h3'>Course Management system</h3>
        <label className='label'>Course name</label>
        <input  className="input"type="  text"  name="coursename" onChange={handleChange}/>
        <label className='label'>Course duration</label>
        <input  className="input" type="text" name="courseduration" onChange={handleChange}/>
        <label className='label'>price</label>
        <input  className="input" type="text" name="price" onChange={handleChange}/>
        <button className='button'  onClick={handleClick}>submit</button>
      </div>
     <CourseDetails data={data} onDelete={onDelete}/>
        
  </div>
    
  );
}

export default AddCourse;
