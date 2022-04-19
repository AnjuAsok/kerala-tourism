function validation()
{
    var t1=document.getElementById('t1').value;
    var t2=document.getElementById('t2').value;
    var t3=document.getElementById('t3').value;
    var t4=document.getElementById('t4').value;
    var t5=document.getElementById('t5').value;

    var name=/^[A-Za-z]+$/;
    var email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var password=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var phonenumber=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(t1=="")
    {
        document.getElementById('username').innerHTML="*Please fill the name field";
        return false;
    }
    else if(!name.test(t1))
    {
        document.getElementById('username').innerHTML="*Name should be characters";
        return false;
    }
    else
    {
        document.getElementById('username').innerHTML="";

    }
    if(t2=="")
    {
        document.getElementById('emailid').innerHTML="*Please enter your emailid";
        return false;
    }
    else if(!email.test(t2))
    {
        document.getElementById('emailid').innerHTML="*Please enter a valid email id";
        return false
    }
    else
    {
        document.getElementById('emailid').innerHTML="";
    }
    if(t3=="")
    {
        document.getElementById('phno').innerHTML="*Please enter the phone number";
        return false;
    }
    else if(!phonenumber.test(t3))
    {
        document.getElementById('phno').innerHTML="*Please enter valid phone number ";
        return false; 
    }
    else
    {
        document.getElementById('phno').innerHTML="";
        
    }
    if(t4=="")
    {
        document.getElementById('pass').innerHTML="*Please fill the password ";
        return false;
    }
    else if(!password.test(t4))
    {
        document.getElementById('pass').innerHTML="*Minimum 8 characters, at least one uppercase,one lower case,and one special character must contain at least one number";
        return false; 
    }
    else
    {
        document.getElementById('pass').innerHTML="";   
        
    }
    if(t5=="")
    {
        document.getElementById('cpass').innerHTML="*Please reenter the password";
        return false;
    }
    else if(t4!=t5)
    {
        document.getElementById('cpass').innerHTML="*Password is not matching ";
        return false; 
    }
    else
    {
        document.getElementById('cpass').innerHTML="";   
    }

}

    
    
