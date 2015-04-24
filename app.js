var shoutOutArray1 = ["I want to thank the random Nerdery staff that stopped in to sprinkle some knowledge from their mighty brains on us.", "Scott for sitting down with me today. Tracy, Vince for talking to me after I shared my story. They were supportive.", "Tracey for convincing Alicia and i we were wrong about -- and ++ being altered on the global level.", "You all were great. I'm just glad to be here.", "Mary did a great job at catching logical errors going through the challenge today.", "Thanks to Erik!  He taught me how to mirror my displays, great start to the day.", "Every one was super helpful. Aaron and Kaitlin were great partners. Vince was very welcoming to start the first day.", "I am feeling really thankful that everyone on our team is so nice and open.", "Shout out to the guest speaker from the nerdery for doing such a wonderful job! I'm also really appreciate the thoughtful and supportive comments from Clare. She is always super kind and supportive!"];

var shoutOutArray2 = ["Alicia, for helping me to feel a little less overwhelmed.", "I would like to thank Steve Martin and Kaitlin Muth. They both took the time to help me understand how to use indices.", "Everyone! I couldn't ask for a better first day or a better cohort", "I would thank Clare for being my table/row partner and teammate in the challenge, she is very sweet and welcoming. I thank Joseph and Scott and Mark and Fred, all of them contribute greatly to the mood and learning environment in their own ways.  I thank Chelsea and Brian for some moments of comic relief. I thank everyone for being very nice, positive, and friendly.", "Michelle for letting me walk through our challenge and understand it. Casey, Cody, Kaitlin were also big helps. We really worked hard and problem solved like crazy today.", "Yeah, Michael and Clare. You guys were awesome teammates today! We complimented each other very well and were super supportive of one another. You communicated well and helped me to understand things I didn't before. Thanks!", "I want to thank my team, because it felt really good to go back and forth and work together and correct each other, and listen to each other (Brian and Alicia). Also, I want to thank Aaron for driving me to get lunch. It was good to have a conversation with someone about what brought us to this program and our feelings and hopes.", "I would like to thank Jeanne and Chelsea for helping me be more comfortable with the group. Throughout the rest of the day, they would make jokes and laugh with me and that really helped me feel welcome.", "Scott was fantastic about measuring the temperature of the cohort today and having us stop work on the group project. Our group was doing well, but we were definitely at a point of increasing fatigue and diminishing returns. It was really helpful to stop -- we will be more effective and fresh for it today.", "To Brian & Tracy -- Thank you for being constructively supportive during the group assignment. You help me look at things from a different angle and that really made things more clear to me."];
var shoutOutArray3 = [];
var shoutOutArray4 = [];
var i = 0;



$(document).ready(function(){

$("#shoutOut2").hide();
$("#shoutOut3").hide();
$("#shoutOut4").hide();
$("#shoutOut5").hide();


$("#shoutOut").on("click", function(){
	console.log("Hi");
	for(var i = 0; i < shoutOutArray1.length; i++) {
		$("#firstDiv").append("<li>"+shoutOutArray1[i]+"</li>");
		console.log(shoutOutArray1[i]);
	}
	$("#shoutOut").fadeOut("slow");
	$("#shoutOut2").fadeIn();
});


//click button will load shout outs - fade in 
//button changes to "more shout outs" loads 5 more should outs

});