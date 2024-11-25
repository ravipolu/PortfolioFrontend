import React, { useState } from "react";
import "./contact.css"



const Contact = ()=>{

    const [name,setNmae] = useState("")
    const [mail,setMail] = useState("")
    const [message,setMessage] = useState("")
    
    const base_url = 'http://loaclhost:4000'

    const handle_submit = async(e)=>{
        e.preventDefault();
    
        // console.log(mail,name,message)
 // http://localhost:4000/api/send
        await fetch(`https://protfoliobackend-4j0n.onrender.com/api/send`,    
            {
                method: "POST",
                body: JSON.stringify({
                    mail,
                    name,
                    message
                }),
                headers:{'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
            }
        )

    }

    return(
        <div className="contact-container" id="contact-container">
            <h1>CONTACTs</h1>
            <div className="bar"></div>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            <div className="container">
                <form className="contact_form" onSubmit={handle_submit}>
                    <label className="form_label">Name</label>
                    <input type="text" placeholder="Enter Your Name" className="form_input" onChange={(e)=>setNmae(e.target.value)}/>
                    <label className="form_label">Email</label>
                    <input type="email" placeholder="Enter Your Email" className="form_input" onChange={(e)=>setMail(e.target.value)}/>
                    <label className="form_label textarea">Message</label>
                    <textarea cols={30} rows={20} placeholder="Enter Your Message" className="form_input textarea" onChange={(e)=>setMessage(e.target.value)}/>
                    <button type="submit" className="form_button">SUBMIT</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;