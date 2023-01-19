
    // /////////////////////////////////////1st approach////////////////////////////////////
//   let  input = [1,2,7,2,4,6,2];
//     // K = 8
//     // Output - [1,7]
//     let k = 8;
//     let r;
//     let result;
//     loop1:
//    for(i=0 ; i<=input.length; i++)
//    {
//         r = k-input[i];
        
//         loop2:
//         for(j=0 ; j< input.length ; j++)
//         {
//             if (input[j]=== r)
//             {
//                 result = [input[i],input[j]];
//                 break loop1;
//             }
//         }
//    }
//    console.log(result);

   /////////////////////////2nd approach/////////////////////////////////////

   const input = [1, 2, 7, 2, 4, 6, 2];
    const k = 8;
    let result;
    let newobj = {};
    for (i = 0; i <= input.length - 1; i++) {
        if (newobj[k - input[i]]) {
            result = [input[i], k - input[i]];
            break;
        }
        newobj[input[i]] = true;
    }
    console.log(result); 



// To find a first pair from a number array whose sum is K.
