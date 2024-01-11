
// 함수 표현식1
function sum(x, y){
    return x + y;
}
// 함수 표현식2
let sumXY = function(x, y){
    return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));


// if 문 연습
let x=50
if(x>50){
    console.log('언더입니다')
}
else if (x<50){
    console.log('오버입니다')
}
else {
    console.log('그냥 50!')
}

//if문 연습
const x =parseInt(prompt("나이를 입력하세요"));

if(x>=18){
    console.log("안녕하세요!");
}
else if (x>=10){
    console.log("안녕! 반가워 꼬마친구!");
}
else {
    console.log("부럽다...");
}

//삼항연산자 연습
const score =parseInt(prompt("성적을 입력하세요"));
score>=90 ? : console.log("A") : score>=80 ? : console.log("B") : score>=70 ? : console.log("C") : score>=60 ? : console.log("D") : console.log("강해져서 돌아와라");

//switch-case 문 연습
const score =parseInt(prompt("성적을 입력하세요"))
switch (true) {
    case score>=90:
        document.write('A');
        break;
    case score>=80:
        document.write('B');
        break;
    case score>=70:
        document.write('C');
        break;
    case score>=60:
        document.write('D');
        break;
    default:
        document.write('강해져서 돌아와라');
}

// 배열 연습
const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text = "";

text += '<section><h2>' + cars[0] + '</h2></section>';
text += '<section><h2>' + cars[1] + '</h2></section>';
text += '<section><h2>' + cars[2] + '</h2></section>';
text += '<section><h2>' + cars[3] + '</h2></section>';
text += '<section><h2>' + cars[4] + '</h2></section>';

console.log(text)

//for문 연습
const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = ''
for (let i = 0; i < cars2.length; i++) {
    text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
console.log(text2)

// // 수업 중 과제3 (5단 만들기)
for (let i=5,j=1; j<10; j++){
    document.write(`${i} X ${j} = ${i*j} <br>`);
}

//continue 연습 , 숫자 건너뛰고 출력하기
let i = 0
while(i<10){
    i++
    if(i===4){
        continue;}
    else if(i===7){
        continue;}
    document.write(i);
}