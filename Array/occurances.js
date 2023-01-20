
    const input = "aaaabbaaccccccccccccccccccde";

    // Output
    // {
    //     character: 'c',
    //     count: 18
    // }
    const result = (inputString,char) => {
        let array = inputString.split("");
        let obj = {};  
        for (i = 0; i <= array.length; i++) {
            let occurance = 0;
            for (j = 0; j <= array.length; j++) {
                if (array[i] === array[j]) {
                    occurance += 1;
                    obj[array[i]] = {
                        character: array[i],
                        count: occurance
                    }
                }
            }
        }
        return obj[char];
    };
    console.log(result(input,"b"));


