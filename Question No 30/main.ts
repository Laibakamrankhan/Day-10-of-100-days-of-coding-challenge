let userName : string[] =["admin","user1","user2","user3"] 
userName.forEach(userName =>{
    if (userName === "admin"){
        console.log("hello admin, would you like to see a status report?");
        
    }else{
        console.log(`hello ${userName}! Thankyou for loging in again`);
        
    }
})
