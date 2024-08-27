// 자바스크립트의 모듈 문법은
// 기본적으로 export 와 import 입니다.
// export const title = "kosmoPrinter";

// export function print(value) {
//   console.log(value);
// }

// export function printArr(arr) {
//   arr.forEach((el, i)=>{
//     console.log(`${i + 1}. ${el}`);
//   });
// }
//======================================
export const title = "kosmoPrinter";

function print(value) {
  console.log(value);
}

function printArr(arr) {
  arr.forEach((el, i)=>{
    console.log(`${i + 1}. ${el}`);
  });
}

export default printArr;

export {title as printerTitle, print};