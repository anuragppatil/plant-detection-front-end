import React from 'react'
import Appbar from '../reuseableComponent/Appbar'


export default function Home() {
    return (
        <div>
            <Appbar></Appbar>
            <div className='outer-img'>
                <div className='image'> </div>
              
                <div className='text-div'>
                    <h1><span style={{ color: "#white", fontFamily: 'dancing-script', marginRight: '110px', fontSize: 80, fontWeight: 'bold' }}> Immunogenic Leaf Detection  </span> </h1>
                    <h1><span style={{ color: "#black", fontFamily: 'dancing-script', marginRight: '110px', fontSize: 60, fontWeight: 'bold' }}> and  </span> </h1>
                    <h1><span style={{ color: "#white", fontFamily: 'dancing-script', marginRight: '110px', fontSize: 80, fontWeight: 'bold' }}>Segmentation  </span> </h1>
                    {/* <h1><span style={{ color: "#F9CEEE",fontFamily: 'dancing-script', marginLeft: '120px', fontSize: 35 }}> Detection and Segmentation </span> </h1>
                  */}
                </div>
            </div>

        </div>


    )
}











