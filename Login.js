   
   import { useRef } from "react";
   import { useNavigate} from "react-router-dom";
  
  
  
  function Login()
  {
  
       let userCred ={} ;
      
       let navigate=useNavigate()
  
       function readValue(property,value)
       {
               userCred[property]=value;
               
       }
        
       function login()
       {
          fetch("http://localhost:8000/users/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userCred)
          })
          .then((response)=>response.json())
          .then((data)=>{
           //  console.log(data);
            if(data.success===true)
            {
               localStorage.setItem("login_details",data.token)
              
               navigate("/homepage");
               
            }
            // if(responseData.success===true)
            // {
            //     localStorage.setItem("login_details",JSON.stringify(responseData))
            //     // navigate(/homepage)
            // }
            else
            {
                 console.logr(data)
            }
          })
          .catch((err)=>{
            console.log(err);
          })
       }
    
  
  
        
       
  
  
     return(
        <div className="container" >
       
         <input type="email" className="form-control" placeholder="Email" onChange={(event)=>{
            readValue("email",event.target.value);
         }}/>
         <input type="password" className="form-control" placeholder="Password" onChange={(event)=>{
            readValue("password",event.target.value);
         }}/>
         
        
          <button  className="btn btn-danger" onClick={login}>Login</button>
        </div>
     )
  }
  
  export default Login;
  
  
           
   