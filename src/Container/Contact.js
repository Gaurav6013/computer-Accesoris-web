import React, { useState } from "react";

function Contact(props) {
  const[messanger,setMessanger]=useState([]);
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[number,setNumber]=useState('');
  const[message,setMessange]=useState('');

  const handleChange=(e,value)=>{
    console.log(e.target.value);
       if(e!==undefined){
          if(value==="name"){
            setName(e.target.value)
          }else if(value==="email"){
            setEmail(e.target.value)
          }else if(value==="number"){
            setNumber(e.target.value)
          }else if(value==="message"){
            setMessange(e.target.value)
          }
       }
  }
  const submitData=(value)=>{
    setMessanger(value,"Submitted");
  }

  return (
    <div  className="main-layout inner_posituong computer_page">
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Now</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input
                      className="contactus"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e)=>handleChange(e,"name")}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e)=>handleChange(e,"email")}
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="number"
                      name="number"
                      value={number}
                      onChange={(e)=>handleChange(e,"number")}
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      message="message"
                      value={message}
                      onChange={(e)=>handleChange(e,"message")}
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn" type="submit" onClick={(e)=>submitData(e)}>Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
