const factor = 5;
//함수 선언
function calc(num) {
  return num * factor; // 에러 not define num
}

{
  const num = 10; // const, let 블럭범위 한정됨 //num 값이 const이여서 안되지만 매개변수로 주면 가능함
  let result = calc(num);
  //console.log("result : " +  result);
  console.log(`result : ${result}`);
}