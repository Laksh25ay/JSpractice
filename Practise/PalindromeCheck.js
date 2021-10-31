let str1 = "madam";
let str2 = "Lakshay";

function isPalindrome(str){
    let rev = str.split('').reverse().join('');
    return (rev === str) ? true : false;
};

console.log(isPalindrome(str2));
