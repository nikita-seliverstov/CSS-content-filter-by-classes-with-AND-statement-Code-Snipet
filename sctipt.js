/*
To work with script you to add class that all elements contain and need to make event listener
to some element like checkbox and call main function and give class name to it or 
call it by something like html onclick.

Problems and possible solutions:
caching of the form 
for a example :
after refreshing page checkboxes keeps their condition
solution:
Add html inputs into form and disable autocomplete
example: <form autocomplete = "off">
*/

//Array that handles all classes checked to show
var unHiddenCategories = [];
//Name of the class that all elements have 
var classForAllElements = 'fusion-portfolio-post';
//Function to make elements visible 
function show($class){
	var appBanners = document.getElementsByClassName($class), i;
	for (var i = 0; i < appBanners.length; i ++)
	{
		// If element contain all needed classes - show
		if(containsAllClasses(unHiddenCategories, appBanners[i].className.split(' '))){
    		appBanners[i].style.visibility = 'visible';
		}
	}
}
function hide($class){
	var appBanners = document.getElementsByClassName($class), i;
	for (var i = 0; i < appBanners.length; i ++)
	{
		// If element do not contain all needed classes - hide
		if(!containsAllClasses(unHiddenCategories, appBanners[i].className.split(' ')))
		{
    		appBanners[i].style.visibility = 'hidden';
    	}
	}
}
//This function makes AND statement
//Check that element contains all classes it need to show. return true or false. 
function containsAllClasses (classesToShow, allElementClasses){
return classesToShow.every(function(val) {
    return allElementClasses.indexOf(val) !== -1;
	});
}
// Main function that works with all functions  
function mainPortFilter($class){
	//Delete from unHiddenCategories class because it already there that means it was unpicked 
	if(unHiddenCategories.includes($class))
	{
		unHiddenCategories.splice(unHiddenCategories.indexOf($class), 1)
		// if no classes picked - show all
		if(unHiddenCategories.length == 0)
		{
			show(classForAllElements);
		}
		// if classes picked hide all classes and show classes from array
		else
		{
			hide(classForAllElements);
			for(var z = 0; z <= unHiddenCategories.length; z++)
			{
				show(unHiddenCategories[z]);
			}
		}
	}
	// if class not in unHiddenCategories add it  
	else
	{
		unHiddenCategories.push($class);
		hide(classForAllElements);
		for(var z = 0; z <= unHiddenCategories.length; z++){
			show(unHiddenCategories[z]);
		}
	}
}
