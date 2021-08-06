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
	else if (name.value.trim().length<5) {
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
    }else if(inp[0].value == "hello" || inp[0].value == "hlw" || inp[0].value == "hi" || inp[0].value == "hi KOO" || inp[0].value == "hi koo?" || inp[0].value == "hi koo." || inp[0].value == "hi koo" || inp[0].value == "hi KOO." || inp[0].value == "hi Koo." || inp[0].value == "hi Koo?" || inp[0].value == "hi KOO?" || inp[0].value == "hi?" || inp[0].value == "hi."){
		ps[0].innerHTML= "Hello";
    }else if(inp[0].value == "thank you." || inp[0].value == "thank you" || inp[0].value == "thanks" || inp[0].value == "thanks." || inp[0].value == "bye." || inp[0].value == "bye" || inp[0].value == "ok bye." || inp[0].value == "ok bye" || inp[0].value == "ok" || inp[0].value == "ok." || inp[0].value == "thank you very much." || inp[0].value == "thank you very much" || inp[0].value == "tata." || inp[0].value == "tata" || inp[0].value == "good bye." || inp[0].value == "good bye"){
		ps[0].innerHTML= "Thank you very much.You are a good guy.";
    }else if(inp[0].value == "what is your name?" || inp[0].value == "what are you?" || inp[0].value == "who are you?" || inp[0].value == "who are you" || inp[0].value == "what is your name" || inp[0].value == "what's your name?" || inp[0].value == "what's your name" || inp[0].value == "tor nam ki?" || inp[0].value == "tomar nam ki?" || inp[0].value == "who created you?" || inp[0].value == "who made you?" || inp[0].value == "who programmed you?" || inp[0].value == "who you are?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "My name is KOO.<br/> version 6.1.0.4 and Bipul Chandro Roy is my Creator.";
    }else if(inp[0].value == "how are you?" || inp[0].value == "how is going on?" || inp[0].value == "what's up?" || inp[0].value == "tumi kemon acho?" || inp[0].value == "kemon acho?" || inp[0].value == "kemon acho" || inp[0].value == "ki obostha?" || inp[0].value == "ki obostha"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Well...what about you?";
    }else if(inp[0].value == "can you eat?" || inp[0].value == "do you eat?" || inp[0].value == "can you speak?" || inp[0].value == "do you speak?" || inp[0].value == "do you sleep?" || inp[0].value == "can you sleep?" || inp[0].value == "can you musterbate?" || inp[0].value == "do you musterbate?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "No...maybe you have forgotten that i am a machine.";
    }else if(inp[0].value == "can you dance?" || inp[0].value == "can you dance" || inp[0].value == "Can you dance?" || inp[0].value == "Can you dance" || inp[0].value == "dance" || inp[0].value == "Dance" || inp[0].value == "do you know dance?" || inp[0].value == "do you know dance" || inp[0].value == "do you know dance." || inp[0].value == "Do you know dancing?" || inp[0].value == "do you know dancing?" || inp[0].value == "do you know dancing." || inp[0].value == "you know dance?" || inp[0].value == "you know dancing?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Lungi dance Lungi dance Lungi dance.is that enough?";
    }else if(inp[0].value == "are you a girl?" || inp[0].value == "boy or girl" || inp[0].value == "are you girl?" || inp[0].value == "you are girl?" || inp[0].value == "are you a boy or girl?" || inp[0].value == "are you a girl or boy?" || inp[0].value == "are you a boy?" || inp[0].value == "are you a boy" || inp[0].value == "gender?" || inp[0].value == "what is your gender?" || inp[0].value == "girl or boy?" || inp[0].value == "girl or boy" || inp[0].value == "boy or girl?" || inp[0].value == "boy?" || inp[0].value == "girl?" || inp[0].value == "male?" || inp[0].value == "female" || inp[0].value == "are you female?" || inp[0].value == "you are male?" || inp[0].value == "vagina?" || inp[0].value == "penis?" || inp[0].value == "sex?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Well...I am a machine.i have no sex.My creator created me by javascript only.I have no metalpart and i am a machine name KOO";
    }else if(inp[0].value == "i love you." || inp[0].value == "i love you" || inp[0].value == "ami tomake valobasi" || inp[0].value == "ami tomake valobashi" || inp[0].value == "ami toke valobashi" || inp[0].value == "ami tore valobashi" || inp[0].value == "i like you" || inp[0].value == "i like you."){
		ps[0].innerHTML= "<i class='fas fa-smile'></i>" + '   ' + '<br>' + "Well...thank you..but i want to make sure that all the conversion is going between you and me is storing in database and my creator can read this.";
    }else if(inp[0].value == "hi sonai?" || inp[0].value == "sonai" || inp[0].value == "hi kuchipu" || inp[0].value == "sonai" || inp[0].value == "oi?" || inp[0].value == "oi"){
		ps[0].innerHTML= "<i class='fas fa-smile'></i>" + '   ' + '<br>' + "kire sonai?";
    }else if(inp[0].value == "where are you from?" || inp[0].value == "where do you live?" || inp[0].value == "where is your home?" || inp[0].value == "home?" || inp[0].value == "home" || inp[0].value == "live"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "I live in git hub repository.ha ha ha";
    }else if(inp[0].value == "hi chika?" || inp[0].value == "chika" || inp[0].value == "chika." || inp[0].value == "vodai" || inp[0].value == "vodai." || inp[0].value == "gadha"){
		ps[0].innerHTML= "<i class='fas fa-angry'></i>" + '   ' + '<br>' + "tomar bap egula sob";
    }else if(inp[0].value == "madarchod" || inp[0].value == "kire madarchod" || inp[0].value == "kire madarchod?" || inp[0].value == "kire madarchod." || inp[0].value == "mother fucker" || inp[0].value == "motherfucker" || inp[0].value == "chudbo" || inp[0].value == "chudbo." || inp[0].value == "fuck you." || inp[0].value == "fuck you" || inp[0].value == "tore chudi" || inp[0].value == "goa mara kha" || inp[0].value == "dhon kha" || inp[0].value == "dhon" || inp[0].value == "bal" || inp[0].value == "voda" || inp[0].value == "khanki" || inp[0].value == "magi" || inp[0].value == "bokachoda"){
		ps[0].innerHTML= "<i class='fas fa-angry'></i>" + '   ' + '<br>' + "Go fuck yourself bitch.";
    }else if(inp[0].value == "will you marry me?" || inp[0].value == "i want to marry u" || inp[0].value == "Will you marry me?" || inp[0].value == "will you marry me." || inp[0].value == "will you marry me" || inp[0].value == "i want to marry you." || inp[0].value == "i want to marry you" || inp[0].value == "i would like to marry you." || inp[0].value == "I would like to marry you." || inp[0].value == "I would like to marry you" || inp[0].value == "i would like to marry you" || inp[0].value == "please marry me?" || inp[0].value == "marry me?" || inp[0].value == "Please marry me?" || inp[0].value == "Please marry me" || inp[0].value == "Please marry me." || inp[0].value == "please marry me" || inp[0].value == "please marry me."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Hahahaha...this is not possible.You are a human & i am a machine.I don't wanna talk more about this.Thank you.";
    }else if(inp[0].value == "you know me?" || inp[0].value == "do you know me?" || inp[0].value == "you know who i am?" || inp[0].value == "you know who am i?" || inp[0].value == "amake chino?" || inp[0].value == "amare chinos?" || inp[0].value == "amare chinos tui?" || inp[0].value == "amake chino tumi?" || inp[0].value == "tumi ki amake chino?" || inp[0].value == "amar nam ki?" || inp[0].value == "ami k?" || inp[0].value == "what about me?" || inp[0].value == "what is my name?" || inp[0].value == "you know about me?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "I don't know anything about you...but i believe you are a good man/women.";
    }else if(inp[0].value == "good morning." || inp[0].value == "morning" || inp[0].value == "good morning koo" || inp[0].value == "good morning KOO" || inp[0].value == "good morning koo?" || inp[0].value == "good morning KOO?" || inp[0].value == "good morning koo." || inp[0].value == "good morning KOO."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Good morning too.I wish to have a good day for you.";
    }else if(inp[0].value == "what can you do?" || inp[0].value == "what is your speciality?" || inp[0].value == "what can you do" || inp[0].value == "what can you do."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "I can write poem,jokes,story.what do you need?";
    }else if(inp[0].value == "ask me something?" || inp[0].value == "ask me something." || inp[0].value == "ask me something" || inp[0].value == "you want to ask me something?" || inp[0].value == "you want to ask something?" || inp[0].value == "do you want to ask me?" || inp[0].value == "do you want to tell me something?" || inp[0].value == "do you want to ask me something?" || inp[0].value == "you want to tell me?" || inp[0].value == "you want to tell me anything?" || inp[0].value == "you have question?" || inp[0].value == "have you any question?" || inp[0].value == "have you any question for me?"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Yes...practice hard.focus on your course.dont't waste time by chatting with me.";
    }else if(inp[0].value == "story" || inp[0].value == "story?" || inp[0].value == "story." || inp[0].value == "Story."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "search on google.I will tell you another day.";
    }else if(inp[0].value == "jokes" || inp[0].value == "joke?" || inp[0].value == "Joke." || inp[0].value == "Jokes?" || inp[0].value == "joke" || inp[0].value == "Joke" || inp[0].value == "Jokes"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "see you not for mind---how was that joke???";
    }else if(inp[0].value == "poem." || inp[0].value == "poem" || inp[0].value == "poem?" || inp[0].value == "Poem" || inp[0].value == "Poem."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Bash baganer mathar upor chad utheche oi...Mago amar shlok bolar kajla didi koi.----i can't remember all right now.";
    }else if(inp[0].value == "do you smoke?" || inp[0].value == "biri?" || inp[0].value == "biri." || inp[0].value == "biri" || inp[0].value == "do you smoke cigarette?" || inp[0].value == "smoke cigarette?" || inp[0].value == "cigarette?" || inp[0].value == "cigarette." || inp[0].value == "cigarette"){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Only benson...";
    }else if(inp[0].value == "good" || inp[0].value == "good." || inp[0].value == "fine." || inp[0].value == "fine" || inp[0].value == "well" || inp[0].value == "well." || inp[0].value == "excellent" || inp[0].value == "excellent." || inp[0].value == "fantastic" || inp[0].value == "fantastic." || inp[0].value == "valo achi." || inp[0].value == "valo achi" || inp[0].value == "valo" || inp[0].value == "choltese arki."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "Ok.Thats fine.";
    }else if(inp[0].value == "can you help me?" || inp[0].value == "can you help me" || inp[0].value == "can you help me."){
		ps[0].innerHTML= "" + '   ' + '<br>' + "About what?";
    }else if (inp[0].value == "money?" || inp[0].value == "money" || inp[0].value == "money." || inp[0].value == "Money") {
		ps[0].innerHTML= "" + '   ' + '<br>' + "Work hard and keep faith to your creator.";
	}else if (inp[0].value == "girlfriend" || inp[0].value == "girlfriend?" || inp[0].value == "girlfriend." || inp[0].value == "Girlfriend") {
		ps[0].innerHTML= "" + '   ' + '<br>' + "Propose a girl first...then do what you want...";
	}else if (inp[0].value == "anything?" || inp[0].value == "anything" || inp[0].value == "anything." || inp[0].value == "something?" || inp[0].value == "something" || inp[0].value == "something.") {
		ps[0].innerHTML= "" + '   ' + '<br>' + "I can help about only Money and girlfrind.";
	}else {
        ps[0].innerHTML= "" + '   ' + "<br/>" + "I have no idea about this..& Make sure you are using lowercase text.";
    }
    
});
