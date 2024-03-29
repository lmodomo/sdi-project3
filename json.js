// JS Data Structure
// Author: Lyndon H Modomo
// Data File
// Created on: 01/06/12	

// an Object of JSON data

/* 
The data in this file represent those surfers who have signed up early for the surfing competition.  This 
file only contains ID, name and age. For the lab purpose it does not contain all the real life data items.
*/

var json = {
	"competitors" : {
		"1" : {
			"id": 1,
			"name": "Kelly Slater", 
			"age": 30,
			"board" : { make : "Town & Country", size : 6.5, nose : "pointed"} 
		},
		
		"2" : {
			"id": 2,
			"name": "Duke Kahanamoku", 
			"age": 100,
			"board" : { make : "Dick Brewer", size : 9, nose : "blunt"} 
		},
		
		"3" : {
			"id": 3,
			"name": "Sunny Garcia", 
			"age": 75,
			"board" : { make : "BoardMaker", size : 10, nose : "blunt"} 
		},
		
		"4" : {
			"id": 4,
			"name": "Bethany Hamilton",
			"age": 30,
			"board" : { make : "Town & Country", size : 5, nose : "pointed"} 
		}
	}
};


// an Array of JSON data
var json2 = {
	"competitors": [
		{
			"id": 1,
			"name": "Kelly Slater", 
			"age": 30
		},
		{
			"id": 2,
			"name": "Duke Kahanamoku", 
			"age": 100
		},
		{
			"id": 3,
			"name": "Sunny Garcia", 
			"age": 75
		},
		{
			"id": 4,
			"name": "Taj Burrow", 
			"age": 30
		}
	]
};