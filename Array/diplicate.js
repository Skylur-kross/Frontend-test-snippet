
 function removeDupliChar(inputStr) {
        let splitedStr = inputStr.split("");
        console.log(splitedStr);
        // let pushedStr = [];
        // pushedStr.push(splitedStr[0]);
        for (let i = 0; i < splitedStr.length; i++) {
          for (let j = 0; j < splitedStr.length; j++) {
            if (splitedStr[i].toUpperCase() === splitedStr[j].toUpperCase()) {
              splitedStr[i] = "";
            }
          }
        }

        return splitedStr;
      }
      console.log(removeDupliChar("MaheshPatidar"));
