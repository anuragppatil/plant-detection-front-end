import React from 'react'
import Appbar from '../reuseableComponent/Appbar'
import '../pages/style.css'
import Image from '../images/about.jpg';

export default function AboutPage() {
    return (
        <div>
            <Appbar></Appbar>
            

            <div className='home-outer-div'>
                <div className="image">
                    <img src={Image} alt="" width='600px' height='400px' />
                </div>
                <div className='text-div'>
                    <h1><span style={{ color: "#001d3d", marginRight: '100px', fontSize: 70, fontWeight: 'bold' }}> About Us </span> </h1>
                    {/* <h1><span style={{ color: "#001d3d", fontFamily: 'dancing-script', marginLeft: '130px', fontSize: 70, fontWeight: 'bold' }}>Classification</span> </h1> */}
                    <p style={{ fontSize: 20, textAlign: 'left' }}>To detect the immunogenic plant leaves based on the image that are captured and that are beneficial in providing immunity which inturn help in fighting covid virus and the related symptoms.Using the images of the plant leaves the processing of the image takes place which helps in recognition of the plants.</p>
                      </div>
            
            </div>


        </div>

    )
}