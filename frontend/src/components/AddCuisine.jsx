import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddCuisine = (props) => {
    var navigate = useNavigate();
    console.log("props data",props.data)
    console.log("props method",props.method)

    var[inp,setInp] = useState(props.data);
   

    const inputHandler =(e)=>{
            const{name,value}=e.target;
            setInp((inp)=>({...inp,[name]:value}));
            console.log(inp)
        }
    const readHandler=()=>{
            console.log("clicked");
            if(props.method==="post"){
            axios.post("http://localhost:5050/addcuisne",inp)
            .then((response)=>{
                alert("Cuisine Added");
                navigate("/")
            })
            .catch(err=>console.log(err))
        };
    if(props.method==="put"){
            axios.put("http://localhost:5050/edit/"+inp._id,inp)
            .then((response)=>{
                alert("Cuisine Updated");
                window.location.reload(false)
            })
        }    
    }
    

  return (
    <div style={{paddingTop:'100px'}}>
        <TextField name='CuisineName' value={inp.CuisineName} onChange={inputHandler} label="Cuisine Name"/><br></br><br></br>
        <TextField name='Duration' value={inp.Duration} onChange={inputHandler} label="Duration of cooking"/><br></br><br></br>
        <TextField name='Servings' value={inp.Servings} onChange={inputHandler} label="No: of Servings"/><br></br><br></br>
        <TextField name='Image' value={inp.Image} onChange={inputHandler}label="Import Image"/><br></br><br></br><br></br>
        <Button variant='contained' onClick={readHandler}>Submit</Button>
    </div>
  )
}

export default AddCuisine