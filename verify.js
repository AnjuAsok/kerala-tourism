// function verify()
// {
//     var u=document.getElementById("user");
//     var p=document.getElementById("pwd");

//     if(u.value!="admin"||p.value!="Asd@1234")
//     {
//         alert("invalid user");
//         document.getElementById("user").value="";
//         document.getElementById("pwd").value="";
//         return false;
//     }
//     else{
//         alert("Welcome");
//         return true;
//     }
// }
function validation()
{
    var u=document.getElementById("user").value;
    var p=document.getElementById("pwd").value;

    var name=/^[A-Za-z]+$/;
    var password=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;

    var f1=0,f2=0;

    if(u=="")
    {
        document.getElementById('username').innerHTML="*Please fill the name field";
        //return false;
    }
    else if(!name.test(u))
    {
        document.getElementById('username').innerHTML="*Name should be characters";
       //return false;
    }
    else
    {
        document.getElementById('username').innerHTML="";
        f1=1;
    }
    if(p=="")
    {
        document.getElementById('pass').innerHTML="*Please fill the password ";
        // return false;
    }
    else if(!password.test(p))
    {
        document.getElementById('pass').innerHTML="*Invalid password";
        // return false; 
    }
    else
    {
        document.getElementById('pass').innerHTML="";  
        f2=1; 
        
    }
    if(f1==1&f2==1)
    {
        alert("Thank you for login");
        document.getElementById('user').value="";
        document.getElementById('pwd').value="";

    }

}