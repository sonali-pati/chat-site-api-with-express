    

       import { useRef } from "react";




       function Register()
       {
     
            let user ={} ;
           
         
     
            function readValue(property,value)
            {
                    user[property]=value;
                    
            }
             
            function register()
            {
               fetch("http://localhost:8000/users/",{
                 method:"POST",
                 headers:{
                     "Content-Type":"application/json",
                 },
                 body:JSON.stringify(user)
               })
               .then((response)=>response.json())
               .then((data)=>{
                 console.log(data);
                 
                 
               })
               .catch((err)=>{
                 console.log(err);
               })
            }
         
     
     
             
            
     
     
          return(
             <div className="container" >
              <input type="text" className="form-control" placeholder="Name" onChange={(event)=>{
                 readValue("name",event.target.value);
              }}/>
              <input type="email" className="form-control" placeholder="Email" onChange={(event)=>{
                 readValue("email",event.target.value);
              }}/>
              <input type="password" className="form-control" placeholder="Password" onChange={(event)=>{
                 readValue("password",event.target.value);
              }}/>
              <input type="text" className="form-control" placeholder="Contact" onChange={(event)=>{
                 readValue("contact",event.target.value);
              }}/>
              <input type="text" className="form-control" placeholder="City" onChange={(event)=>{
                 readValue("city",event.target.value);
              }}/>
              <input type="number" className="form-control" placeholder="Pincode" onChange={(event)=>{
                 readValue("pincode",event.target.value);
              }}/>
               <button  className="btn btn-danger" onClick={register}>Register</button>
             </div>
          )
       }
     
       export default Register;