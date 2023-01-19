
    let outarray = [];
    Array.prototype.flattenArray = function () {
        this.filter((current) => {
            if (Array.isArray(current)) {
                index.flattenArray();
            }
            else {
                outarray.push(current);
            }
        })
      return outarray;
    }
    const array = [1, 2, 3, [1, 2, 3, 1, [1,[1,2,7,8,9], 2]], 1, [1, 2]];
    const output = array.flattenArray();
    console.log(output)

