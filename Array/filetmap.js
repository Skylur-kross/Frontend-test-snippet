

  const arr = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

  // Filter divided by 3 then multiply by 2

  // Normally
  const updatedArrV1 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      updatedArrV1.push(arr[i] * 2);
    }
  }

  console.log("updatedArrV1", updatedArrV1);

  // Map & filter

  const filteredNums = arr.filter((item) => item % 3 === 0);
  const mappedArr = filteredNums.map((item) => item * 2);
  

  console.log("mappedArr", mappedArr);

  // Method chaining
  const result = arr
    .filter((item) => item % 3 === 0)
    .map((item) => item * 2)
    .filter((item) => item < 7);
  console.log("result", result);
