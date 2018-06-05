function countletters(input){
	var lettertable = {};
	
	var nospace = input.split(' ').join('');
	for(var i = 0; i < nospace.length; i++){
		//initialize a new object element
		if(!lettertable[nospace[i]]){
			lettertable[nospace[i]] = [];
		}	
		lettertable[nospace[i]].push(i);
		
		
	}
	return lettertable;
}

//test conditions
console.log(countletters("lighthouse in the house"));
