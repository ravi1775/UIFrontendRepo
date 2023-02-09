function palindrome(num){
    let temp1 = 0;
    
    let temp2 = num;
    let r;
    while(num > 0){
        r = num % 10;  // 2
       temp1 = (temp1 * 10) + r; // 2
       num = num / 10 // 122.1
       num = parseInt(num);// 122
    }
    if(temp1 == temp2){
        console.log("Palindrome")
    }else{
        console.log("Not Palindrome")
    }
}
var num = 1221;
palindrome(num);