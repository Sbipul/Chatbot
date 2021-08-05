// for validation 


function bipul(){
	var pas = 12345;
	var name = document.getElementById('uname');
	var pass = document.getElementById('pass');
	if(name.value.trim() ==""){
		alert("Enter name first");
		name.style.border = "1px solid red";
		return false;
	}
	else if (name.value.trim().length<4) {
		alert("Too short charractar");
		return false;
	}
	else if (pass.value.trim() =="") {
		alert("Enter password first");
		pass.style.border = "1px solid red";
		return false;
	}
	else if (pass.value.trim() != pas) {
		alert("password not match");
		pass.style.border = "1px solid red";
		return false;
	}
	else{
		return true;
	}
}







// for chatboot 


var btn = document.getElementById("btn");
var inp = document.querySelectorAll("input");
var ps = document.querySelectorAll("p");
btn.addEventListener("click",function(event){
    // event.preventDefault();
    if(inp[0].value == ""){
        alert("write something Sir/Madam");
    }

    else if(inp[0].value == "hello" || inp[0].value == "hlw" || inp[0].value == "hi"){
		ps[0].innerHTML= "Hello";
    }

    else if(inp[0].value == "what is your name?" || inp[0].value == "who are you?" || inp[0].value == "who are you" || inp[0].value == "what is your name" || inp[0].value == "what's your name?" || inp[0].value == "what's your name" || inp[0].value == "tor nam ki?" || inp[0].value == "tomar nam ki?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "My name is POO.<br/> version 6.1.0.4 and Bipul Chandro Roy is my Creator.";
    }

    else if(inp[0].value == "how are you?" || inp[0].value == "how is going on?" || inp[0].value == "what's up?" || inp[0].value == "tumi kemon acho?" || inp[0].value == "kemon acho?" || inp[0].value == "kemon acho" || inp[0].value == "ki obostha?" || inp[0].value == "ki obostha"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Well...what about you?";
    }

    else if(inp[0].value == "are you a girl?" || inp[0].value == "boy or girl" || inp[0].value == "are you girl?" || inp[0].value == "you are girl?" || inp[0].value == "are you a girl or boy?" || inp[0].value == "are you a boy?" || inp[0].value == "are you a boy" || inp[0].value == "gender?" || inp[0].value == "what is your gender?" || inp[0].value == "girl or boy?" || inp[0].value == "girl or boy" || inp[0].value == "boy or girl?" || inp[0].value == "boy?" || inp[0].value == "girl?" || inp[0].value == "male?" || inp[0].value == "female" || inp[0].value == "are you female?" || inp[0].value == "you are male?" || inp[0].value == "vagina?" || inp[0].value == "penis?" || inp[0].value == "sex?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Well...I am a machine.i have no sex.My creator created me by javascript only.I have no metalpart and i am a machine name POO";
    }

    else if(inp[0].value == "i love you." || inp[0].value == "i love you" || inp[0].value == "ami tomake valobasi" || inp[0].value == "ami tomake valobashi" || inp[0].value == "ami toke valobashi" || inp[0].value == "ami tore valobashi"){
		ps[0].innerHTML= "<i class='fas fa-smile'></i>" + '   ' + '<br>' + "Well...thank you..but i want to make sure that all the conversion is going between you and me is storing in database and my creator can read this.";
    }

    else if(inp[0].value == "hi sonai?" || inp[0].value == "sonai" || inp[0].value == "hi kuchipu" || inp[0].value == "sonai" || inp[0].value == "oi?" || inp[0].value == "oi"){
		ps[0].innerHTML= "<i class='fas fa-smile'></i>" + '   ' + '<br>' + "kire sonai?";
    }

    else if(inp[0].value == "hi chika?" || inp[0].value == "chika" || inp[0].value == "chika." || inp[0].value == "vodai" || inp[0].value == "vodai." || inp[0].value == "gadha"){
		ps[0].innerHTML= "<i class='fas fa-angry'></i>" + '   ' + '<br>' + "tomar bap egula sob";
    }

    else if(inp[0].value == "madarchod" || inp[0].value == "kire madarchod" || inp[0].value == "kire madarchod?" || inp[0].value == "kire madarchod." || inp[0].value == "motherfucker" || inp[0].value == "chudbo" || inp[0].value == "chudbo." || inp[0].value == "fuck you." || inp[0].value == "fuck you" || inp[0].value == "tore chudi" || inp[0].value == "goa mara kha" || inp[0].value == "dhon kha" || inp[0].value == "dhon" || inp[0].value == "bal" || inp[0].value == "voda" || inp[0].value == "khanki" || inp[0].value == "magi"){
		ps[0].innerHTML= "<i class='fas fa-angry'></i>" + '   ' + '<br>' + "Go fuck yourself bitch.";
    }

    else if(inp[0].value == "you know me?" || inp[0].value == "do you know me?" || inp[0].value == "you know who i am?" || inp[0].value == "you know who am i?" || inp[0].value == "amake chino?" || inp[0].value == "amare chinos?" || inp[0].value == "amare chinos tui?" || inp[0].value == "amake chino tumi?" || inp[0].value == "tumi ki amake chino?" || inp[0].value == "amar nam ki?" || inp[0].value == "ami k?" || inp[0].value == "what about me?" || inp[0].value == "what is my name?" || inp[0].value == "you know about me?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "I don't know anything about you...but i believe you are a good man/women.";
    }

    else if(inp[0].value == "good" || inp[0].value == "good." || inp[0].value == "fine." || inp[0].value == "fine" || inp[0].value == "well" || inp[0].value == "well." || inp[0].value == "excellent" || inp[0].value == "excellent." || inp[0].value == "fantastic" || inp[0].value == "fantastic." || inp[0].value == "valo achi." || inp[0].value == "valo achi" || inp[0].value == "valo" || inp[0].value == "choltese arki."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Ok.Thats fine.";
    }

    else {
        var input0Data = inp[0].value;
        ps[0].innerHTML= "" + '   ' + "<br/>" + "Make sure you are using lowercase text.and i am a baby chatbot.so maybe i can't reply for all question of yours.my creator is upgrading me...";
    }
    
});
