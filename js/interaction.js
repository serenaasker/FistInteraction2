
window.addEventListener('load', function() {
	toggleHide("paragraph");
})


var factNumber = 0; //Which fact # we're currently on. Arrays start at 0.
var facts = [
			"This fist in combination with alcohol will cost a total of 31 million dollars in Medical Expenses just in one year.",
			"When alcohol is consumed, around 33% of it gets absorbed immediately into the blood, through the stomach lining.",
			"The remaining alcohol is absorbed more slowly into the blood, through the small intestine.",
			"Once in the bloodstream, alcohol diffuses into almost every biological tissue in the body, because cell membranes are highly permeable.",
			"When one consumes more alcohol than his or her body can handle, that person's blood alcohol level (BAL) increases.",
			"The presence of alcohol in the blood at all will have effects on the body. A higher BAL simply means greater risk.",
			"The recommended maximum intake of alcohol is 2 drinks per day for men and 1 drink per day for women. Consuming more than this is considered problematic drinking.",
			"Five or more drinks per day for men, (four for women), is considered binge drinking.",
			"Right from the first sip, alcohol affects the body. ",
			"Starting with the brain, what follows is an explanation of the effects alcohol has on various parts of the body.",
			"The amount of damage alcohol causes to the brain is incomprehensible. ",
			"Those little moments you don't remember from the crazy night before - that's temporary amnesia.",
			"While drinking you won't be able to form new memories. You'll mumble involuntarily. Your eyes will twitch constantly.",
			"Links between alcohol and crime are well established. ",
			"Intoxication of both perpetrator and victims has been noted in a high percentage of instances of homicide and sexual assault",
			"76% of all rape defendants had been drinking at the time of the alleged offence",
			"Alcohol has been identified as a contributory factor in 97% of public order offenses.",
			"One in eleven, or approximately 318,000 of the full adult population, said that they or a family member were assaulted by someone under the influence of alcohol in the past year.",
			"Half of the perpetrators of homicide were intoxicated when the crime was committed",
			"Each year, more than 600,000 students between the ages of 18 and 24 are assaulted by another student who has been drinking.",
			"95% of all violent crime on college campuses involves the use of alcohol by the assailant, victim or both.",
			"90% of acquaintance rape and sexual assault on college campuses involves the use of alcohol by the assailant, victim or both.",
			"This fist is mostly used by men (80-90% of perpetrators are men, although the proportion of woman increases every day.",
			"Because of this fist, 24,000 alcohol-related cases each year end up in the emergency department.",
			"This fist is used by 70% of young people between 12-25 years old."
			];




function enlargeImage(){

	var enlarge = setInterval(function() {
		fist = document.getElementById('fist');
		
		
		if(fist.clientHeight > 900){
		clearInterval(enlarge);
		transition();
		}else{
		
		fist.height = fist.clientHeight+8;
		fist.width = fist.clientWidth+8;
		
		}
	}, 4); //Speed of enlargement. smaller = faster, higher = slower.

	
}


function transition(){
	
	document.body.style.backgroundColor = "white";
	//document.getElementById("bottomLeft1").style.color = "black";
	//document.getElementById("bottomLeft2").style.color = "black";
	//document.getElementById("bottomRight1").style.color = "black";
	//document.getElementById("bottomRight2").style.color = "black";
	
	toggleHide("fist");
	toggleHide("paragraph");
	

	if(facts[factNumber] === undefined){
		//If the array returns undefined, then that means that we've gone through all of the facts and are now trying to get a nonexistant one.
		
		document.body.style.backgroundColor = "black";
		document.getElementById("currentfact").innerHTML = "Did you get the point?";
		document.getElementById("currentfact").style.color = "white";

		document.getElementById("reload").innerHTML = "No, take me back!";
		document.getElementById("reload").style.color = "white";

		toggleHide("nextbutton");


	}else{
		document.getElementById("currentfact").innerHTML = facts[factNumber];
	}

	//Increase the number so that we can move on to the next fact, but only if it's not more than what we have in the array. If we go further, we will get undefined.
	factNumber++; 
}


function restore(){
	
	document.body.style.backgroundColor = "black";
	//document.getElementById("bottomLeft1").style.color = "white";
	//document.getElementById("bottomLeft2").style.color = "white";
	//document.getElementById("bottomRight1").style.color = "white";
	//document.getElementById("bottomRight2").style.color = "white";
	
	toggleHide("fist");
	toggleHide("paragraph");
	
	
	//Restore the fist's height.
	fist = document.getElementById('fist');
	fist.height = 600;
	fist.width = 800;
}


function reloadPage() {
    location.reload();
}

function toggleHide(id) {
    var object = document.getElementById(id);
    if (object.style.display === "none") {
        object.style.display = "block";
    } else {
        object.style.display = "none";
    }
}