var students = ["H","L","L","E","O"];  
              
ReactDOM.render(  
    <ul>  
        {  
            students.map(function(username){  
                return <li>{username}</li>  
            })  
        }  
    </ul>,  
    document.getElementById("loop")  
) 

