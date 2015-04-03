var formValue="";
var toJSNStr ="";

function toJSONString()
{
toJSNStr =JSON.stringify(formValue);
alert("Converted Plain JavaScript Object to JSONString.Values are::"+toJSNStr);
}

function readFromJSONString()
{
var readJSON=JSON.parse(toJSNStr);
formValue = readJSON;
alert("Read from JSONString and loaded the registration object::"+readJSON.toString());
}

function isPhoneNumberFormatValid()
{
	  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	  var enteredPh = document.getElementById("phoneno").value;
	  alert("entered phhh"+enteredPh);
	  if(enteredPh.match(phoneno))
	        {
	      return true;
	        }
	      else
	        {
	         return false;
	        }
}


function isValidEmail(){
	
	var emailFrmt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var enteredEmail = document.getElementById("email").value;
	alert("enteredEmail:"+enteredEmail);
	if(enteredEmail.match(emailFrmt))
	{
	return true;
	}
	else
	{
	return false;
	}
}

function saveToSessionStorage()
{
	saveJSPlainObj();
	sessionStorage.setItem("firstname",formValue.firstname);
	sessionStorage.setItem("lastname",formValue.lastname);
	sessionStorage.setItem("email",formValue.email);
	sessionStorage.setItem("ssn",formValue.ssn);
	sessionStorage.setItem("phoneno",formValue.phoneno);
	sessionStorage.setItem("url",formValue.url);
	sessionStorage.setItem("password",formValue.password);
	sessionStorage.setItem("dob",formValue.date);
	sessionStorage.setItem("dobdt",formValue.dobdt);
	sessionStorage.setItem("creditcardno",formValue.creditcardno);
	readFromSessionStorage();
	}
	
function saveToLocalStorage()
{
	saveJSPlainObj();
	localStorage.setItem("firstname",formValue.firstname);
	localStorage.setItem("lastname",formValue.lastname);
	localStorage.setItem("email",formValue.email);
	localStorage.setItem("ssn",formValue.ssn);
	localStorage.setItem("phoneno",formValue.phoneno);
	localStorage.setItem("url",formValue.url);
	localStorage.setItem("password",formValue.password);
	localStorage.setItem("date",formValue.date);
	localStorage.setItem("dobdt",formValue.dobdt);
	localStorage.setItem("creditcardno",formValue.creditcardno);
	readFromLocalStorage();
	
}

function saveJSPlainObj()
{
	if(isPhoneNumberFormatValid() && isValidEmail())
	{	
		saveJSObj();
		toJSONString();
		readFromJSONString();
	}
else{
		if(!isPhoneNumberFormatValid())
		{
		alert("Phone number entered is invalid");
		}
		else
		{
		alert("Email entered is invalid");
		}
	}
}

function saveJSObj()
{
	var fn = document.getElementById("firstname").value;
	var ln = document.getElementById("lastname").value;
	var eml =document.getElementById("email").value;
	var ssnnum = document.getElementById("ssn").value;
	var ph = document.getElementById("phoneno").value;
	var ageVal =document.getElementById("age").value;
	var sexVal =document.getElementById("sex").value;
	var urlVal = document.getElementById("url").value;
	var pwd =document.getElementById("password").value;
	var date =document.getElementById("date").value;
	var dbdt =document.getElementById("dobdt").value;
	var crcrd=document.getElementById("creditcardno").value;
	
	var RegisformObj = {firstname:fn,lastname:ln,email:eml,ssn:ssnnum,phoneno:ph,age:ageVal,sex:sexVal,url:urlVal,password:pwd,date:date,dobdt:dbdt
			,creditcardno:crcrd};
	formValue = RegisformObj;
}

function evntOnOffNtwrk()
{
	alert("in event Handlers");
	//window.addEventListener('online',saveToSessionStorage);
	//window.addEventListener('offline',saveToLocalStorage);
	document.getElementById("progressbar").style.visibility="hidden";
	saveToSessionStorage();
	saveToLocalStorage();
}

function readFromLocalStorage()
{
	localStorage.getItem("firstname");
	localStorage.getItem("lastname");
	localStorage.getItem("email");
	localStorage.getItem("ssn");
	localStorage.getItem("phoneno");
	localStorage.getItem("url");
	localStorage.getItem("password");
	localStorage.getItem("date");
	localStorage.getItem("dobdt");
	localStorage.getItem("creditcardno");
	alert("firstname and email values read from localstorage:::::"+localStorage.getItem("firstname")+"::"+localStorage.getItem("email"));
	document.getElementById("regisform").reset();
}

function readFromSessionStorage()
{
	sessionStorage.getItem("firstname");
	sessionStorage.getItem("lastname");
	sessionStorage.getItem("email");
	sessionStorage.getItem("ssn");
	sessionStorage.getItem("phoneno");
	sessionStorage.getItem("url");
	sessionStorage.getItem("password");
	sessionStorage.getItem("dob");
	sessionStorage.getItem("dobdt");
	sessionStorage.getItem("creditcardno");
	alert("firstname and email values read from session storage:::::"+sessionStorage.getItem("firstname")+"::"+sessionStorage.getItem("email"));
	document.getElementById("regisform").reset();
}
