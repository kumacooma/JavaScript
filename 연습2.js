// splice 연습
const fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
//코끼리 제거
fish.splice(5,1)
console.log(fish)
// 참치뒤에 다금바리 추가
fish.splice(4,0,'다금바리')
console.log(fish)
//돌고래 제거 후 옥돔, 갈치 추가
fish.splice(2,1,'옥돔','갈치')
console.log(fish)

//foreach문 연습
const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});

//map연습
const arr = [1, 2, 3];
const newArr = arr.map(function(item, index) {
    return item * index;
});

console.log(newArr);

//filter 연습
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr2 = arr2.filter(function(el) {
    return el % 2 === 0;
});

console.log(newArr2);

//객체 연습
const babaYaga = {
    name: "John Wick",
    age: 53,
    from: "벨라루스",
    askingHim: function(){
        console.log("Yeah, I'm thinking I'm back!");
    }
};
console.log(babaYaga.name);

// 생성자 연습
function TheNewFactory(name){
    this.name = name;
    this.sayYourName = function(){
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}
let newRobot = new TheNewFactory('브렌든');

// 객체지향 연습
const me = {
    name : '이도훈',
    address : '서울시 구의동',
    phoneNum : '010-0000-0000',
    cook : function(){
        console.log('요리를 한다.');
    },
    practice : function(skill){
        skill.levelUp();
    }
}

const myskill = {
    level: 1,
    levelUp : function(){
        this.level++;
    }
}
me.practice(myskill);