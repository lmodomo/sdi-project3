// Author: Lyndon H Modomo
// Created for: SDI-O Online Course (SDI-O 1201) : Project 3 / Deliverable 3
// Created on: 01/05/12

/* Comment:  
SEE THE ITEMS I CHANGE FROM LAB2 IN THE OUTPUT OF MY SDI-PROJECT3.HTML FILE.
*/

// Define & set Global variables for this JS file

var	niceBeachDay = true,
	idealSurfDay = false,
	personObject = {},
	idealSurfTime = 14,  //using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
	surfers = [], 
	nextSurfer = "",
	slang1 = "Surf\'s Up Brah",
	slangPhase = ""
;


//Define the SURFING OBJECT
var surfing = {						
		sunnyDay: true,
		surfsUp: true,
		personObj: {},
		surferArray: [],
		numOfWavesInSet: 4,	//a set is X number of continuous waves before a noticeable break with no waves.
		numOfCompetitors: 0,
		slang2: "Goofy footed",
		
		// (Method Function): Check to see if it is a nice beach day or not
		goodBeachDay: 
			function (goodDay) { 
				if (goodDay === true) {   
					console.log ("(Method Function): It is a great day for the beach!!");
				}else {
					console.log ("(Method Function): It is NOT a great day for the beach, bummer dude...");
				}
			return (goodDay); 	
			},  //end goodDayForBeach function

			
		// (Method Function): Check to see if it will be a sunny day and check to see if "Surf's Up!"
		goodSurfDay:
			function () { 
				if (this.sunnyDay && this.surfsUp) {   
					console.log ("(Method Function): It is a great day for a surf meet because the sun is out and Surf's Up Brah!!! THE SURF MEET IS ON!!");
					return (true);
				}else {     
					console.log ("(Method Function): It is NOT a great day to surf, nor is it a great day for a surf meet.");
					return (false);
				}
			},  //end goodSurfDay function
		

		//(JSON Object Argument, Returns a Javascript Object): Extracting the JSON data and returning a Javascript object	
		extractEarlierSignUps:
			function (json) {			
				for (var key in json.competitors){
					var	competitor = json.competitors[key];
						this.personObj[key] = new Object (); 
						this.personObj[key].id = competitor.id;
						this.personObj[key].name = competitor.name;
						this.personObj[key].age = competitor.age;
				};			
			return (this.personObj);  //returns the person Object
			},  //end extractEarlierSignUps function


		//Add one new early signup surfer to the personObject
		addToEarlySignup:
			function (personObject, id, name, age) { 
				personObject[id] = new Object ();
				personObject[id].id = id;
				personObject[id].name = name;
				personObject[id].age = age;
				return (personObject);
			},	//end addToEarlySignup function	

				
		//(Method Procedure): Determine if it is the ideal time of day to go out and surf
		surfTime:
			function (timeOfDay) { 
				var	currentTime = 8,		//for this lab this should be less then "timeOfDay". Using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
					timeRemaining = 0
				;

				console.log ("((Method Procedure): Below is the Output From The While loop): Listing shows the number of hrs remaining before the surf is at it's best.");
				totalWaitTime = timeOfDay - currentTime;
					
				while (currentTime < timeOfDay) {
					timeRemaining = timeOfDay - currentTime;
					console.log ("Current time is " + currentTime +":00.  The ideal time to surf is at " + timeOfDay + ":00.  There is " + timeRemaining + " hrs. remaining till SURF TIME!!!");
					currentTime = currentTime + 1;
				};
				console.log ("Time to go SURFING!!!");
			},  //end surfTime function


		//extract the list of early signups for the surf competition
		getEarlySignUpsOfSurfers:
			function (personObject) {
				for (var key in personObject){
					this.surferArray.push(personObject[key].name);
			};			
		return (this.surferArray);  //returns the array of Surfers from the early sign ups.
		},  //end getEarlySignUpsOfSurfers function	
			
			
		//(Method Mutator): Add Competitors to the Array
		addCompetitor:
			function (surferArray, surferName) { 
				surferArray.push(surferName);
			}, //end addCompetitor

			
		//(Method Accessor): Get the number of surfers in the competition	
		getNumOfSurfers:
			function (surfer) {
				return (surfer.length);
			}, //end getNumOfSurfers
			 
			
		//(Method Accessor): Get the new competitor's name who is in line to catch the next wave
		getCompetitor:
				function (surfersArray) { 
					return (surfersArray[0]);
				}, 	//end getCompetitor	

			
		//(Array Function / Returned Array): Surfers to catch wave in set.  Returns the number of remaining waves.
		catchWave:
			function (surfer) { 
				var numOfWaves = 1,
					percentOfWavesInSet = 0,
					x = 1,
					totalNumOfSets = 2,
					i = 1
				;
				
				console.log ("(Array Function Task): Surfer's catching waves in SET.  A SET is X number of continuous waves before a noticeable break with no waves.");
				this.numOfCompetitors = surfing.getNumOfSurfers (surfer);
				console.log ("There are " + this.numOfWavesInSet + " waves in a set today, and there are " + this.numOfCompetitors + " surfers ready to catch the waves. " + totalNumOfSets + " sets of waves and surfers listed below:");
				
				while (x <= totalNumOfSets) {   //loops through the number of SETs we want to run sample date on
					console.log ("SET OF WAVES: " + x);
					if (surfer.length <= this.numOfWavesInSet) {   //heck if there are less surfers then waves in a set
						while (i <= this.numOfWavesInSet) {
							if (numOfWaves <= surfer.length) {
								percentOfWavesInSet = (((numOfWaves / this.numOfWavesInSet).toFixed(2)) * 100);
								console.log (surfer [0] + " catches wave " + i + ". " + percentOfWavesInSet + "% of the waves in the SET have now passed." );
								surfer.push(surfer[0]);
								surfer.shift();
							}else {	
								percentOfWavesInSet = (((numOfWaves / this.numOfWavesInSet).toFixed(2)) * 100);
								console.log ("NO SURFERS catching wave " + i + ". " + percentOfWavesInSet + "% of the waves in the SET have now passed." );
							};
							i++;
							numOfWaves++;
						};					
						
					}else {
						while (i <= this.numOfWavesInSet) {
							percentOfWavesInSet = (((numOfWaves / this.numOfWavesInSet).toFixed(2)) * 100);
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
			function (phase1) { 
				var phase = "";
				
				phase = "(String Function Task /Returned Value): Why do surfer's have such a strange language.  They say things like " + phase1 + ", " + this.phase2 + ", etc...";
				return (phase);	
			}  //end slangVerse function
};


// MAIN BODY AREA BELOW

//Calls a "Method Function"
if (surfing.goodBeachDay (niceBeachDay)) {

	//Calls a "Method Function"
	idealSurfDay = surfing.goodSurfDay ();
	if (idealSurfDay) {
		console.log ("(Method Function):Is it a good day for a surf meet: ", idealSurfDay);

		//Extract the Competitors from a JSON Object, and return a Javascript object. Then add one competitor to the object
		personObject = surfing.extractEarlierSignUps(json);
		personObject = surfing.addToEarlySignup(personObject, 5, "Josh Donlan", 18);
		console.log ("((Returned Object) : JSON Object Argument / Returned an Object with a new competitor added): ", personObject);

		//Calls a "Method Procedure"
		surfing.surfTime(idealSurfTime);
		// console.log ("(Number Function Task / Returned Value): The total hours the surfer's had to wait before going surfing: ", waitTime +" hrs.");

		//(Creates an array, from an object, of those surfers who signed up early for the surf meet
		surfers = surfing.getEarlySignUpsOfSurfers (personObject);
		console.log ("(Return Array): Created an ARRAY, from an OBJECT, of those surfers who signed up early for the surf meet.  See array below.");
		console.log (surfers);

		//Call a "Method Mutator" : Pushes a new competitor into the end of the array.
		surfing.addCompetitor(surfers, "Lyndon Modomo");
		surfing.addCompetitor(surfers, "Rick Osborne");
		console.log ("(Method Mutator / Returned Array): added 2 more competitors: This represents surfers who are signing up during the day of the surf meet.");
		console.log (surfers);

		//Array Argument / Returned Array
		surfers = surfing.catchWave(surfers);
		console.log ("(Array Argument / Returned Array): Here is a list of competitors in the surf contest: ", surfers);

		//Calls a "Method Accessor": Gets the next surfer in line to catch the first wave in the next set of waves.
		nextSurfer = surfing.getCompetitor(surfers);
		console.log ("(Method Accessor) " + nextSurfer + " will be the next surfer to catch the first wave when the next set of waves arrive.");

		//For String Function Task
		slangPhase = surfing.slangVerse(slang1);
		console.log (slangPhase);

	};
};