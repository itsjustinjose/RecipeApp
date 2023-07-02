import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddCuisine from './AddCuisine';

const Viewcuisine = () => {
    var[cuisine,setCuisine]=useState([]);
    var[update,setUpdate] = useState(false);
    var[singleValue,setSingleValue]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5050/viewcuisine")
        .then((response)=>{
            setCuisine(response.data);
        })
    },[])
    var deleteValues=(id)=>{
        console.log(id);
        axios.delete("http://localhost:5050/deletecuisine/"+id)
        .then((response)=>{
            alert("Cuisine Deleted");
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }

    const updateValues=(value)=>{
        console.log("Update Clicked")
        setUpdate(true);
        setSingleValue(value)
    }
    var finalJSX=<Grid style={{paddingTop:'100px'}} container spacing={2}>
    {cuisine.map((val, i) => (
    <Grid item xs={12} sm={6} md={3} key={i}>
    <Card>
         <CardMedia component="img" height="140" image={val.image} alt={val.Image} />
         <CardContent>
            <Typography variant="h6">{val.CuisineName}</Typography>
            <Typography>Duration: {val.Duration}</Typography>
            <Typography>Servings: {val.Servings}</Typography>
        </CardContent>
        <Button variant="outlined" color="primary"onClick={()=>updateValues(val)}>Update</Button>
        <Button variant="outlined" color="secondary"onClick={()=>deleteValues(val._id)}>Delete</Button>
    </Card>
  </Grid>
    ))}
</Grid>

if(update)finalJSX = <AddCuisine data={singleValue} method='put'/>
  return finalJSX;
  
}

export default Viewcuisine