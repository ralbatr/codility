/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

//  实现一个函数，根据K次，把数组A最后的元素移动最前面。
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 0) {
        return 1;
    }

    if(A.length == 1) {
        if(A[0] == 1) {
            return 2;
        } else {
            return 1;
        }
    }

    A = A.sort((a,b) => {
        return a-b
    });

    let result
    for(let i =0 ;i<A.length; i++) {
        let target = i+1;
        result = target^A[i]
        // console.log('i + 1 = '+ target + '========A =' +A[i] + '=====' + result)
        if(result) {
            return i+1;
        }
    }
    if(result == 0) {
        return A.length+1;
    }
    
}
// 二分法 解决
function solutionB(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 0) {
        return 1;
    }

    if(A.length == 1) {
        if(A[0] == 1) {
            return 2;
        } else {
            return 1;
        }
    }

    if(A.length == 2) {
        if(!A.includes(1)) {
            return 1;
        }

        if(!A.includes(2)) {
            return 2;
        }

        if(!A.includes(3)) {
            return 3;
        }
    }

    // 排序
    A = A.sort((a,b) => {
        return a-b
    });


    if(A[0] != 1) {
        return 1;
    }

    if(A[A.length -1 ] != A.length+1) {
        return A.length+1
    }

    let low = 0;
    let high = A.length;
    let over = false
    let result ;
    // debugger
    while (!over) {
        // debugger
        // 向下取整
        let mid = Math.floor((low + high)/2)


        if( high-mid == 1) {
            if((A[mid]^(mid+1)) != 0) {
                result = mid+1;
            } else {
                result = mid+2;
            }
            over = true;
            return result;    
        }

        if( mid - low == 1) {
            if((A[mid]^(mid+1)) != 0) {
                result = mid+1;
            } else {
                result = mid+2;
            }
            over = true; 
            return result;  
        }

        if(A[mid] ^ (mid+1)) { // 不等于0 
            high = mid;
        }  else { // 等于 0 ，左侧正常 
            low = mid;
        }
    }

    return result
}
