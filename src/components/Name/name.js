import React, { useEffect } from "react";
import "./name.css"
import { useNavigate} from 'react-router-dom'

const Name = ()=>{
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(() => {
            navigate('/home')
        }, 4500);
    },[])

    return (
        <div className="name-container">
            <div className="name-text">
                
                <h1 className="child1">RAVI KUMAR</h1>
                <h1 className="child2">RAVI KUMAR</h1>
                
            </div>
        </div>
    )
}

export default Name;