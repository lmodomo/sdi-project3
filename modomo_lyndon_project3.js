// Author: Lyndon H Modomo
// Created for: SDI-O Online Course (SDI-O 1201) : Project 3 / Deliverable 3
// Created on: 01/05/12

/* Comment:  
In this lab I have first decided to refactor my code from Lab2, and put all the surfing content into an object, 
then in main body of the program, calls are made to items in the object.

In addition to the above I added the following:
	1.  I have added more math in the Array Function Task area.  I have added math to calculate the percentage 
		of waves that have passed.

	2. 	In the Array Function Task area, I added nested while loops and nested conditional statements so the surfers 
		who catch a wave are taken off (shift) from the front of the array and put (push) on the end of the array 
		(just so I could test the array methods).  If there are more surfers then waves in a wave SET (a SET is X 
		number of continuous waves before a noticable break with no waves.), then during the next SET you will see 
		the next surfer in line catching the wave.  AGAIN, I did this to test array methods.  NOT sure I would do 
		this in real life. In real life, I may opt to just move the index number.
*/

// Define & set Global variables for this JS file
var niceBeachDay = true,
	sunnyDay = true,
	surfsUp = true,
	idealSurfDay = false,
	idealSurfTime = 14,  	//for this lab I am just using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
	waitTime = 0,	
	numOfWavesInSet = 4,	//a set is the number of continous waves before a noticable break with no waves.
	remainingWaveCnt = 0,
	surfers = ["Kelly Slater", "Duke Kahanamoku", "Sunny Garcia", "Taj Burrow"],
	slang1 = "Surf\'s Up Brah",
	slang2 = "Goofy footed",
	slangPhase = ""
;


//Define the surfing Object
var surfing = {
		purpose: "",
						
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
				var numOfWaves = 1,
					percentOfWavesInSet = 0,
					x = 1,
					totalNumOfSets = 2,
					i = 1
				;
				
				console.log ("(Array Function Task): Output From the FOR Loop Listed Below:");
				surfer.push("Bethany Hamilton");  //to test .push method for an Array
				surfer.push("Lyndon Modomo"); //to test .push method for an Array
				surfer.push("Rick Osborne"); //to test .push method for an Array.  Added one more the then number of waves to test if there are more surfers then waves.
				console.log ("There are " + wavesInSet + " waves in a set today, and there are " + surfer.length + " surfers ready to catch the waves.");
				
				while (x <= totalNumOfSets) {   //loops through the number of SETs we want to run sample date on
					console.log ("SET OF WAVE NUMBER: " + x);
					if (surfer.length <= wavesInSet) {   //heck if there are less surfers then waves in a set
						while (i <= wavesInSet) {
							if (numOfWaves <= surfer.length) {
								percentOfWavesInSet = (((numOfWaves / wavesInSet).toFixed(2)) * 100);
								console.log (surfer [0] + " catches wave " + i + ". " + percentOfWavesInSet + "% of the waves in the SET have now passed." );
								surfer.push(surfer[0]);
								surfer.shift();
							}else {	
								percentOfWavesInSet = (((numOfWaves / wavesInSet).toFixed(2)) * 100);
								console.log ("NO SURFERS catching wave " + i + ". " + percentOfWavesInSet + "% of the waves in the SET have now passed." );
							};
							i++;
							numOfWaves++;
						};					
						
					}else {
						while (i <= wavesInSet) {
							percentOfWavesInSet = (((numOfWaves / wavesInSet).toFixed(2)) * 100);
							console.log (surfer [0] + " catches wave " + i + ". " + percentOfWavesInSet + "% of the waves in the SET have now passed." );
							surfer.push(surfer[0]);
							surfer.shift();
							i++;
							numOfWaves++;
						};
					};
					numOfWaves = 1;
					percentOfWavesInSet = 0;
					i = 1;
					x++;
				};
				return (surfer);	
			},  //end catchWave function


		//(String Function Task) Concatenated slang words.
		slangVerse:
			function (phase1, phase2) { 
				var phase = "";
				
				phase = "(String Function Task /Returned Value): Why do surfer's have such a strange language.  They say things like " + phase1 + ", " + phase2 + ", etc...";
				return (phase);	
			}  //end slangVerse function
};

//Handle JSON data
var handleData = function(json) {
	for (var i = 0; i < json.competitors.length; i++){
		var competitor = json.competitors[i];
		console.log ("Competitor ID: " + competitor.id + ", Name: " + competitor.name + ", Age: " + competitor.age);
	};
};


// MAIN BODY AREA BELOW

//Method Mutator
surfing.purpose = "The purpose of a surf Object is to have a container for storing surfing properties.  This helps to display the information below.";

//Method Accessor
console.log ("(Accessor / Returned Value): " + surfing.purpose);

//For Procedure Task.
surfing.goodBeachDay (niceBeachDay);

//For Boolean Function Task
idealSurfDay = surfing.goodSurfDay (sunnyDay, surfsUp);
console.log ("(Boolean Function Task / Returned Value):Is it a good day to surf : ", idealSurfDay);

//For Number Function Task
waitTime = surfing.surfTime(idealSurfTime);
console.log ("(Number Function Task / Returned Value): The total hours the surfer's had to wait to go surfing: ", waitTime +" hrs.");

//Handle JSON data
console.log ("(JSON Data Output)");
handleData (json2);

//For Array Function Task
surfers = surfing.catchWave(numOfWavesInSet, surfers);
console.log ("(Array Function Task / Returned Value):Array values: ", surfers);

//For String Function Task
slangPhase = surfing.slangVerse(slang1, slang2);
console.log (slangPhase);