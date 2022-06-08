const compute = document.querySelector('.computeStep');
compute.addEventListener('click', KaprekarsConstant);

//function to test if the user's input meet Kaprekar's Uniqueness requirement
function kaprekarUnique(number){
	number = number.toString();
	number = number.split('');
	for(let i = 0; i < number.length; i++){
		let distinctDigit = 0;
		for(let j = 0; j < number.length; j++){
			if(number[i] === number[j]){
				distinctDigit += 1;
			}
		}//end inner loop
		if (distinctDigit > 2){
			return false;
		}
	}//end outer loop
	return true;
}

let number;
function KaprekarsConstant(number){
	let error;
	number = document.getElementById('userInput').value;
	let originalNumber = number;
	let result;
	let count = 0;

	//Validating the user's input
	let validInput = /^[0-9]{4}$/;
	let validate = validInput.test(number);
	if(!validate){
		error = `Kindly enter a valid 4-digit number to proceed`;
		document.getElementById('result').innerHTML = '';
		return document.getElementById('error').innerHTML = error;
	}

	//Test if the user's input meet Kaprekar's Uniqueness requirement
	if(! kaprekarUnique(number)){
		error = `The number you entered does not meet the Kapreka's Constant uniqueness requirement`;
		document.getElementById('result').innerHTML = '';
		return document.getElementById('error').innerHTML = error;
	}//End of Uniqueness testing
	
	while(result !== 6174){
		number = number.toString();
		number = number.split('');

		//if there's no error the error div should not display anything
		if(!error){
			document.getElementById('error').innerHTML = '';
		}

		let smallest = [];
		let biggest = [];
		//turning the character array back to number
		for(let i = 0; i < number.length; i++){
			number[i] = parseInt(number[i]);
		}

		//sorting the number in ascending order using bubble sort
		for(let i = 0; i < number.length; i++){
			for(j = 0; j < number.length; j++){
				if(number[i] > number[j]){
					let temp = number[i];
					number[i] = number[j];
					number[j] = temp;
				}
			}
		}//array has been fully sorted in ascending order at this stage
		
		biggest = number;
		smallest = number.slice().reverse();//getting the smallest by reversing the sorted array

		// turning the array back to string 
		biggest = biggest.join('');
		smallest = smallest.join('');
		
		//performing mathematical caluculation on the string using the parseInt()method
		result = parseInt(biggest - smallest);
		count+= 1;
		if(result === 6174){
			return document.getElementById('result').innerHTML =
			 `Result: ${originalNumber} becomes a kaprekar's constant in ${count} steps`; 
		}
		number = result;
	}//end while
}//end function KaprekarsConstant