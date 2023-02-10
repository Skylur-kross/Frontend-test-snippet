
    const input = "aaaabbaaccccccccccccccccccde";

    // Output
    // {
    //     character: 'c',
    //     count: 18
    // }
    const maxOccurance = (inputString) => {
        let array = inputString.split("");
        let obj = {};  
        let maxOccur = 0 ;
        for (i = 0; i <= array.length; i++) {
            let occurance = 0;
            for (j = 0; j <= array.length; j++) {
                if (array[i] === array[j]) {
                    occurance += 1;
                    if(maxOccur < occurance){
                        maxOccur = occurance;
                        obj = {
                        character: array[i],
                        count: occurance
                    }
                    }
                }
            }
        }
        return obj;
    };
    console.log(maxOccurance(input));


