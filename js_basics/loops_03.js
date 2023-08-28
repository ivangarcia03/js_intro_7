
/*
Write a program that outputs numbers from 1 to 30 (both inclusive)
1
2
3
.
.
.
29
30
*/
for(let i = 1; i <= 30; i++){
    console.log(i);
}


/*
Write a program that outputs numbers from 1 to 30 (both inclusive)
        If number is divided by 3, then output "Fizz" instead of number
        if number is divided by 5, then output "Buzz" instead pf number
        if number is divided by both 3 and 5, then output "FizzBuzz"
1
2
Fizz
4
Buzz
.
.
29
FizzBuzz
*/

for(let i = 1; i <= 30; i++){ // 15 or 30
    if(i % 15 === 0) console.log('FizzBuzz');
    else if(i % 3 === 0) console.log('Fizz');
    else if(i % 5 === 0) console.log('Buzz');
    else console.log(i);
}