import React, { useState } from 'react'
import InputField from './InputField'

export default function Timer({isOverlay}) {
    const [isEditing, setIsEditing] = useState(false);
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);

  return (
    <div>
        {isEditing ? (
            //Time Setup
            <div className='flex justify-center'>
        <div>
            <InputField label={"Hours"} value={hours} onChange={(e)=>setHours(parseInt(e.target.value))}></InputField>
            <InputField label={"Minutes"} value={minutes} onChange={(e)=>setMinutes(parseInt(e.target.value))}></InputField>
            <InputField label={"Seconds"} value={seconds} onChange={(e)=>setSeconds(parseInt(e.target.value))}></InputField>
            <button className='bg-blue-500 text-stone-200 px-20 py-1 rounded-xl text-xl mt-1 ml-1'
            onClick={()=>setIsEditing(false)}
            >&#10004;</button>
        </div>
            </div>
        ) : (
            //Timer related components
            <div>
            <div className='flex justify-center'>
                <h1 className='text-green-500 text-6xl'>{`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`}</h1>
            </div>
            <div id="timer-buttons" className='text-stone-500'>
                {isActive ? 
                (
                    <>
                    <button>pause</button>
                    <button>stop</button>
                    </>
                ) : (
                    <>
                    <button className='start text-5xl text-green'>&#9658;</button>
                    <button onClick={()=>setIsEditing(true)}>&#9998;</button>
                    </>
                )
                }
            </div>
            </div>
        )
        }

    </div>
  )
}
