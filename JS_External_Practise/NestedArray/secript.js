const nestedArray = [1, 2, [3, 4, [5, 8, 10, [11, 12, 13]]]];

// Accessing values
const value1 = nestedArray[0];                              // 1
const value2 = nestedArray[1];                              // 2
const innerArray = nestedArray[2];                          // [3, 4, [5, 8, 10, [11, 12, 13]]]
const value3 = innerArray[0];                               // 3
const value4 = innerArray[1];                               // 4
const deepArray = innerArray[2];                            // [5, 8, 10, [11, 12, 13]]
const value5 = deepArray[0];                                // 5
const value8 = deepArray[1];                                // 8
const value10 = deepArray[2];                               // 10
const innermostArray = deepArray[3];                        // [11, 12, 13]
const value11 = innermostArray[0];                          // 11
const value12 = innermostArray[1];                          // 12
const value13 = innermostArray[2];                          // 13

console.log(value1, value2, value3, value4, value5, value8, value10, value11, value12, value13);
