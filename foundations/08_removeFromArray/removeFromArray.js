const removeFromArray = function (arr, ...value) {
    const ar = [];
    arr.forEach((item) => {
        if (!value.includes(item)) {
            ar.push(item)
        }
    }
    )
    return (ar)
};

// Do not edit below this line
module.exports = removeFromArray;
