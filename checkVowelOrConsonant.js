
/**
Step 1: crate an array of all the vowels
step 2: take a string as input and convert 
step 3: run a loop for the vowels array 
step 4: compare every instance of the array to the string
step 4.1: if matches then it is a vowels 
step 5: if not then its a consonant. 
**/

const checkVowelOrConsonant = (input) => {
    // Step 1: crate an array of all the vowels
    const vowelstr = input;
    vowelstr.toLowerCase();
    if(!input || typeof input !== String)
    {
        return "invalid input";
    }
    if(vowelstr==="a"||vowelstr==="e"||vowelstr==="i"||vowelstr==="o"||vowelstr==="u" ){
        return "It is a Vowel";
    }
    else{
       return "It is a Consonant";
    }
};

