
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Number > 5 -> Way 1

//   const v1FilterLogicNF = function (data) {
//     console.log("@LN17: ", data);
//     if (data > 5) {
//       return true;
//     } else {
//       return false;
//     }
//   };
  //const resultsV1 = numbers.filter(v1FilterLogicNF);

  const resultsV2 = numbers.filter(function (data) {
    console.log("@LN27: ", data);
    if (data > 5) {
      return true;
    } else {
      return false;
    }
  });
  console.log(resultsV2);

  // Way 3 - Using Arrow Func

  const resultsV3 = numbers.filter((data) => {
    if (data > 5) {
      return true;
    } else {
      return false;
    }
  });

  //console.log("AF :", resultsV3);

  const resultsV4 = numbers.filter((data) => {
    return data > 5;
  });

  //console.log("AF :", resultsV4);

  const resultsV5 = numbers.filter((data) => data > 5);
  const resultsV6 = numbers.filter((data) => data % 2 === 0);

  console.log("AF :", resultsV5, resultsV6);
