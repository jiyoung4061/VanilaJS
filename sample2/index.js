// class이름, 태그이름 사용하는 방법 . 차이!
const clock = document.querySelector(".clock");
const h1 = clock.querySelector("h1");
// console.log(h1);

function getTime() {
  const clockTest = new Date();
  // console.log(clockTest); //현재 시간나옴

  const hour = clockTest.getHours();
  const minute = clockTest.getMinutes();
  const second = clockTest.getSeconds();

  //innerText : h1태그 안에 text 바꿔줌
  h1.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute}:${
    second < 10 ? `0${second}` : second
  }`; //안에 value값을 정해줄수있음
}

function init() {
  getTime();
  setInterval(getTime, 1000); //1초마다 함수 호출
}

init();