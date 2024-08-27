import { useEffect, useState } from "react";

function Usecallback1() {
  const [number, setNumber] = useState(0);

  const someFunction = () => {
    // 종속변수 안에 변수 -> 함수가 게속 생성이되어서 참조변수 주소값 정
    console.log(`someFunc: number: ${number}`);
  };

  useEffect(() => {
    console.log("somFuction이 변경되어습니다.");
  }, [someFunction]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>Cal someFunc</button>
    </div>
  );
}

export default Usecallback1;
