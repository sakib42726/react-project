import { useState } from "react";


const Content = () => {
   
    const [data,setData]= useState()
    const [print,setPrint]= useState()

    const getData = (val) => {
    
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <div>
            <div className="content_sec">
                <div className="input_area">
                    <input type="text" onChange={getData} />
                    <button onClick={()=>setPrint(true)}>Click Here</button>
                </div>
                <div className="input_display">
                      {
                            print?<div className="output"><h1>{data}</h1></div> :null
                        }
                    
                      
                    
                </div>
           </div>
        </div>
    );
};

export default Content;