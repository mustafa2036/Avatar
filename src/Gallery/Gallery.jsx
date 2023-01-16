import React, { useEffect, useState } from 'react'

export default function Gallery() {
    let [count , setCount] = useState(0);
    let [name , setName] = useState("Mostafa")

    function ChangeCount(){
        setCount(Math.random());
    }
    function ChnageName(){
        setName("Ahmed");
    }
    useEffect(()=>{
        console.log('Component did Mounting');
    } , []);

    useEffect(()=>{
        if(count === 0 && name === 'Mostafa')
            return;
        console.log('Component did Mounting Updating');
    } , [count , name])

  return (
    <div>
        <h1 className='text-center py-1'>Gallery Component</h1>
        <p className='text-center py-1 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, id.</p>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h4>Count : {count}</h4>
                    <button onClick={() => ChangeCount()} className='btn btn-outline-info py-3'>Change Count</button>
                </div>
                <div className="col-md-6">
                    <h4>Name : {name}</h4>
                    <button onClick={() => ChnageName()} className='btn btn-outline-info py-3'>Change Count</button>
                </div>
            </div>
        </div>
    </div>
  )
}
