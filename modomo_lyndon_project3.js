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
	personObject = {},
	numOfWavesInSet = 4,	//a set is the number of continous waves before a noticable break with no waves.
	remainingWaveCnt = 0,
	surfers = [],
	slang1 = "Surf\'s Up Brah",
	slang2 = "Goofy footed",
	slangPhase = ""
;


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

				console.log ("(Number Function Task : Below is the Output From The While loop): Listing shows the number of hrs remaining before the surf is at it's best.");
				totalWaitTime = timeOfDay - currentTime;
				
				while (currentTime < timeOfDay) {
					timeRemaining = timeOfDay - currentTime;
					console.log ("Current time is " + currentTime +":00.  The ideal time to surf is at " + timeOfDay + ":00.  There is " + timeRemaining + " hrs. remaining till SURF TIME!!!");
					currentTime = currentTime + 1;
				};
				console.log ("Time to go SURFING!!!");
				return (totalWaitTime);	
			},  //end surfTime function
		

		//(JSON Object Argument, Returns a Javascript Object): Extracting the JSON data and returning a Javascript object	
		extractEarlierSignUps:
			function (json) {
				personObj = {};
				for (var key in json.competitors){
					var	competitor = json.competitors[key];

						personObj[key] = new Object ();
						personObj[key].id = competitor.id;
						personObj[key].name = competitor.name;
						personObj[key].age = competitor.age;
				};			
			return (personObj);  //returns the person Object
			},  //end Handle JSON Object function			

		//Add a new early signup surfer to the personObject
		addToEarlySignup:
			function (personObject, id, name, age) { 
				personObject[id] = new Object ();
				personObject[id].id = id;
				personObject[id].name = name;
				personObject[id].age = age;
				return (personObject);
			},		
		
/*			
		//Handle JSON ARRAY data
		handleJsonArrayData:
			function(json) {
				for (var i = 0; i < json.competitors.length; i++){
					var competitor = json.competitors[i];
					console.log ("Competitor ID: " + competitor.id + ", Name: " + competitor.name + ", Age: " + competitor.age);
				};
			},  //end Handle JSON ARRAY data

			
		//Handle JSON OBJECT function
		handleJsonObjectData:	
			function(json, surfer) {
				for (var key in json.competitors){
					var competitor = json.competitors[key];
					surfer.push(competitor.name);
				};			
			return (surfer);  //returns the surfer Array
			},  //end Handle JSON Object function			
*/

		//(Method Mutator): Add Competitors to the Array
		addCompetitor:
			function (surferArray, surferName) { 
				surferArray.push(surferName);
			}, //end addCompetitor

			
		//(Method Accessor): Get the new competitor's name who in line to catch the next wave
		getCompetitor:
				function (surferArray) { 
					return (surferArray[0]);
				}, 	//end getCompetitor
			

			
		//(Array Function Task): Surfers to catch wave in set.  Returns the number of remaining waves.
		catchWave:
			function (wavesInSet, surfer) { 
				var numOfWaves = 1,
					percentOfWavesInSet = 0,
					x = 1,
					totalNumOfSets = 2,
					i = 1,
					nextSurfer = ""
				;
				
				//Method Mutator : Pushes a new competitor into the end of the array.
				surfing.addCompetitor(surfer, "Bethany Hamilton");
				surfing.addCompetitor(surfer, "Lyndon Modomo");
				surfing.addCompetitor(surfer, "Rick Osborne");
				console.log ("(Method Mutator): added 3 more competitors");
				console.log (surfer);
				console.log ("(Array Function Task): Output surfer's catching waves in SET:");
				console.log ("There are " + wavesInSet + " waves in a set today, and there are " + surfer.length + " surfers ready to catch the waves. " + totalNumOfSets + " sets of waves and surfers listed below:");
				
				while (x <= totalNumOfSets) {   //loops through the number of SETs we want to run sample date on
					console.log ("SET OF WAVES: " + x);
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
				
				//Method Accessor: Gets the next surfer in line to catch the first wave in the next set of waves.
				nextSurfer = surfing.getCompetitor(surfer);
				console.log ("(Method Accessor) " + nextSurfer + " will be the next surfer to catch the first wave when the next set of waves arrive.");
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


// MAIN BODY AREA BELOW

//For Procedure Task.
surfing.goodBeachDay (niceBeachDay);

//For Boolean Function Task
idealSurfDay = surfing.goodSurfDay (sunnyDay, surfsUp);
console.log ("(Boolean Function Task / Returned Value):Is it a good day to surf : ", idealSurfDay);

//Extract the Competitors from a JSON Object, and return a Javascript object. Then add another competitor to the object
personObject = surfing.extractEarlierSignUps(json);
personObject = surfing.addToEarlySignup(personObject, 5, "Josh Donlan", 18);
console.log ("(JSON Object / Returned Javascript Object with a new competitor added)");
console.log (personObject);

//For Number Function Task
waitTime = surfing.surfTime(idealSurfTime);
console.log ("(Number Function Task / Returned Value): The total hours the surfer's had to wait before going surfing: ", waitTime +" hrs.");

//Handle JSON ARRAY data
//console.log ("(JSON ARRAY Data Output Below)");
//surfing.handleJsonArrayData(json2);

//Handle JSON OBJECT data : passing the JSON object to the surfing Object where the surf's names are being
//parsed and stored into any array that is returned and used in the Array Function Task below
console.log ("(JSON OBJECT used as the input.  The input is put into an Array which the contents are listed below.)");
surfers = surfing.handleJsonObjectData(json, surfers);
console.log (surfers);

//For Array Function Task
surfers = surfing.catchWave(numOfWavesInSet, surfers);
console.log ("(Array Function Task / Returned Value): Here is a list of competitors in the surf contest: ", surfers);

//For String Function Task
slangPhase = surfing.slangVerse(slang1, slang2);
console.log (slangPhase);

console.log (surfing);