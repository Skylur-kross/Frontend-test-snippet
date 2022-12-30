/**
 * Step 1: take two array as input
 * step 2: declare a new array
 * step 3: run a loop for first array
 * step 3: run second loop for second array
 * step 3.1: check if the value of two array match
 * step 4: remove the instances from both array if match
 * step 5: store the ramaining in new array
 * Step 6: print tne new array
 */

function unionOfArray(a,b){
    let c = [];
    let i = 0;
    let j = 0;
    for(i=0 ; i <a.length; i++){
        if(a[i] !== a[i+1]){
            c[i] = a[i];
        }
    }
}