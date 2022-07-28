/*
 * https://app.codility.com/demo/results/trainingDNC932-S45/# 
 * 1. LongestPassword
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    // 首先转成数组
    const tmpArray = S.split(' ')
    // console.log(tmpArray)

    // 
    let resultArray = [];
    for(let index = 0; index < tmpArray.length; index++) {
        if(onlyAlphanumericalAndCharacters(tmpArray[index])) {
            resultArray.push(tmpArray[index])
        }
    }

    // console.log(resultArray);

    let result2Array = [];
    for(let index = 0; index < resultArray.length; index++) {
        if(evenLetters(resultArray[index])) {
            result2Array.push(resultArray[index])
        }
    }

    // console.log(result2Array);

    let result3Array = [];
    for(let index = 0; index < result2Array.length; index++) {
        if(oddNumber(result2Array[index])) {
            result3Array.push(result2Array[index])
        }
    }

    // console.log(result3Array);

    let result = longestWord(result3Array)

    // console.log(result);
    return result.length;
}
// 找出最长的单词
function longestWord(resultArray) {
    let max = resultArray[0].length;
    let longestWordIndex = 0;
    for(let i=1;i<resultArray.length;i++) {
        if(max<resultArray[i].length) {
            max = resultArray[i].length;
            longestWordIndex = i;
        }
    }

    return resultArray[longestWordIndex];
}

// 条件三 是否 奇数个数字
function oddNumber(string) {
    const zeroASCII = '0'.charCodeAt()
    const nineASCII = '9'.charCodeAt()

    let tmpArray = [...string];
    let count = 0;
    for(let index = 0; index < tmpArray.length; index++) {
        const code = tmpArray[index].charCodeAt()
       if(code >= zeroASCII && code <= nineASCII) {
           count ++;
       }
    }

    return count%2 == 1;
}

// 条件二 是否 偶数个字母 包括0
function evenLetters(string) {
    const aASCII = 'a'.charCodeAt()
    const zASCII = 'z'.charCodeAt()
    const AASCII = 'A'.charCodeAt()
    const ZASCII = 'Z'.charCodeAt()
    const zeroASCII = '0'.charCodeAt()
    const nineASCII = '9'.charCodeAt()

    let tmpArray = [...string];
    let count = 0;
    for(let index = 0; index < tmpArray.length; index++) {
        const code = tmpArray[index].charCodeAt()
       if(code >= aASCII && code <= zASCII) {
           count ++;
       }

       if(code >= AASCII && code <= ZASCII) {
           count ++;
       }
    }

    return count%2 == 0;
}

// 条件一 是否只有数组和字母
function onlyAlphanumericalAndCharacters(string) {
    const aASCII = 'a'.charCodeAt()
    const zASCII = 'z'.charCodeAt()
    const AASCII = 'A'.charCodeAt()
    const ZASCII = 'Z'.charCodeAt()
    const zeroASCII = '0'.charCodeAt()
    const nineASCII = '9'.charCodeAt()

    let tmpArray = [...string];
    for(let index = 0; index < tmpArray.length; index++) {
        const code = tmpArray[index].charCodeAt()
       if(code >= aASCII && code <= zASCII) return true;
       if(code >= AASCII && code <= ZASCII) return true;
       if(code >= zeroASCII && code <= nineASCII) return true;
    }

    return false;
}
