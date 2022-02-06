
// You should implement your task here.

const matrix = [
    [1, 2],
    [3, 4],
];

module.exports = function towelSort (matrix) {
    if (!matrix) return [];
    let arr = [...matrix];
    let newArr = arr.map((innerArr, index) => {
        return innerArr = index % 2 === 0 ? innerArr : innerArr.reverse();
    });
    return newArr.flat();
};

