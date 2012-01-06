// Author: Lyndon H Modomo
// Created for: SDI-O Online Course (SDI-O 1201) : Project 3 / Deliverable 3
// Created on: 01/05/12

// Comment:  I am using my Lab2 for Lab3.  I first refactored my code from Lab2 to include objects.

// Define & set Global variables for this JS file
var niceBeachDay = true,
	sunnyDay = true,
	surfsUp = true,
	idealSurfDay = false,
	idealSurfTime = 14,  	//for this lab I am just using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
	waitTime = 0,	
	numOfWavesInSet = 6,	//a set is the number of continous waves before a noticable break with no waves.
	remainingWaveCnt = 0,
	surfers = ["Kelly Slater", "Duke Kahanamoku", "Sunny Garcia", "Taj Burrow"],
	slang1 = "Surf\'s Up Brah",
	slang2 = "Goofy footed",
	slangPhase = ""
;

/*
var surfers = {
	name: "Kelly Slater",
	age: "",
	height: "",
	stance: "",
	boardLength: "",
	bestSurfMove: [
	]
};
*/

//Define the surfing Object
var surfing = {

		// (Procedure Task): Check to see if it is a nice beach day or not
		goodBeachDay: 
			function (goodDay) { 
				if (goodDay === true) {   
					console.log ("(Procedure Task): It is a great day for the beach!!");
				}else {
					console.log ("(Procedure Task): It is NOT a great day for the beach, bummer dude...");
				}
			},  //end goodDayForBeach function

		// (Boolean Function Task): Check to see if it will be a sunny day and check to see if "Surf's Up!"
		goodSurfDay:
			function (sunny, niceWaves) { 
				if (sunny && niceWaves) {   
					console.log ("(Boolean Function Task): It is a great day to surf because the sun is out and Surf's Up Brah!!");
					return (true);
				}else {     
					console.log ("(Boolean Function Task): It is NOT a great day to surf.");
					return (false);
				}
			},  //end goodSurfDay function

		//(Number Function Task): Determine if it is the ideal time of day to go out and surf
		surfTime:
			function (timeOfDay) { 
				var	currentTime = 8,		//for this lab this should be less then "timeOfDay". Using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
					timeRemaining = 0,
					totalWaitTime = 0
				;

				console.log ("(Number Function Task) Output From The While Loop Listed Below:");
				totalWaitTime = timeOfDay - currentTime;
				
				while (currentTime < timeOfDay) {
					timeRemaining = timeOfDay - currentTime;
					console.log ("Current time is " + currentTime +":00.  The ideal time to surf is at " + timeOfDay + ":00.  There is " + timeRemaining + " hrs. remaining till SURF TIME!!!");
					currentTime = currentTime + 1;
				};
				console.log ("Time to go SURFING!!!");
				return (totalWaitTime);	
			},  //end surfTime function
			
		//(Array Function Task): Surfers to catch wave in set.  Returns the number of remaining waves.
		catchWave:
			function (wavesInSet, surfer) { 
				var wavesLeft = wavesInSet;
				
				console.log ("(Array Function Task): Output From the FOR Loop Listed Below:");
				surfer.push("Bethany Hamilton");  //to test .push method for an Array
				surfer.push("Lyndon Modomo"); //to test .push method for an Array
				surfer.push("Rick Osborne"); //to test .push method for an Array.  Added one more the then number of waves to test if there are more surfers then waves.
				// console.log (surfer.length);
				console.log ("There are " + wavesInSet + " waves in a set today, and there are " + surfer.length + " surfers ready to catch the waves.");
				
				if (surfer.length <= wavesInSet) {
					for (var i = 0, j = surfer.length; i < j; i++) {
						wavesLeft--;
						console.log (surfer [i] + " catches wave " + (i+1));
					}
				}else {
					for (var i = 0, j = wavesInSet; i < j; i++) {
						wavesLeft--;
						console.log (surfer [i] + " catches wave " + (i+1));
					}
				}
				return (surfer);	
			},  //end catchWave function


		//(String Function Task) Concatenated slang words.
		slangVerse:
			function (phase1, phase2) { 
				var phase;
				
				phase = "(String Function Task /Returned Value): Why do surfer's have such a strange language.  They say things like " + phase1 + ", " + phase2 + ", etc...";
				return (phase);	
			}  //end slangVerse function
};

/*
//(Number Function Task): Count the number of waves in each set.  A set is x number
//	of continuous waves before a temporary break with no waves.
var sets = function (continuousWaves) { 
	var wavesInSet = continuousWaves,
		i = 1,
		numOfWaves = 0,
		percentOfWavesInSet = 0
	;
	
	console.log ("(Number Function Task) Output From The While Loop Listed Below:");
	while (i <= wavesInSet) {
		numOfWaves++;
		// percentOfWavesInSet = ((numOfWaves / continuousWaves).toFixed(2)) * 100;
		console.log ("Wave number " + i + " in the set of waves just passed by. " + percentOfWavesInSet + "% of the waves in the SET have now passed." );
		i++;
	};
	return (numOfWaves);	
};  //end sets function
*/

//For Procedure Task.
surfing.goodBeachDay (niceBeachDay);

//For Boolean Function Task
idealSurfDay = surfing.goodSurfDay (sunnyDay, surfsUp);
console.log ("(Boolean Function Task / Returned Value):Is it a good day to surf : ", idealSurfDay);

//For Number Function Task
waitTime = surfing.surfTime(idealSurfTime);
console.log ("(Number Function Task / Returned Value): The total hours the surfer's had to wait to go surfing: ", waitTime +" hrs.");

//For Array Function Task
surfers = surfing.catchWave(numOfWavesInSet, surfers);
console.log ("(Array Function Task / Returned Value):Array values: ", surfers);

//For String Function Task
slangPhase = surfing.slangVerse(slang1, slang2);
console.log (slangPhase);