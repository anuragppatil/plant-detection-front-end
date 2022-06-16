import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


  


export default function Services(){

    return(
        <div>
             
            <Appbar></Appbar>
            
                <div className='service-outer-img'>
                <div className='image'> </div>
                
             <center>
            <div className='container'>
           
              <h1><span style={{ color: "black" }}> Upload Image </span> </h1>
              <TextField id="outlined-basic"  variant="outlined" type='file'/>
              <br></br>
              <br></br>
              <Button variant="contained" color="secondary">Submit</Button>
            </div>
            </center>
            </div>
            
            
         </div>
    )
}