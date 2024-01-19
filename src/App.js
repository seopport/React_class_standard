import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialArray = [
    "apple",
    "banana",
    "cherry",
    "elderberry",
    "watermelon",
    "grape",
  ];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  //useState 결과물은 배열이다.

  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit}, `;
    });
    setResult(tempResult.slice(0, -2));
  };

  const handleFilter = () => {
    const filteredList = array.filter((fruit) => {
      //얘를 필터링을 할지 말지 결정
      if (fruit.includes(query)) {
        //query 포함하면 true
        return true;
      } else return false;

      //여기서 결정한다.
    });
    setResult(filteredList.join(", "));
  };

  const handlMap = () => {
    const mappedList = array.map((fruit) => {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };

  const handleReduce = () => {
    const reducedListText = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
      //1. [apple, banana] = acc
      //2. [apple, banana,] cherry,
    });
    setResult(reducedListText);
    // array.reduce((acc, cur) => {
    // console.log("acc", acc);
    // console.log("cur", cur);

    // return "a"
    // const testArr = [4, 1, 2, 10, 5];

    // acc에 계속해서 누적된 값을 더해주자
    // return acc + cur;
    //acc 는 4, cur은1 해서 acc가 5가됨
    //acc 는 5, cur은 2 해서 acc가 7이 됨 .. 반복
  };

  const handlePush = () => {
    if (!query) {
      alert("값 없음");
      return false;
    }
    let newArray = [...array, query];
    setArray(newArray); //이거 안하면 추가된 끝값만 변경됨
    setResult(newArray.join(", "));
  };

  const handlePop = () => {
    //pop은 원본배열을 수정한다.
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  return (
    <div>
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>&nbsp;
        <button onClick={handleFilter}>filter</button>&nbsp;
        <button onClick={handlMap}>map</button>&nbsp;
        <button onClick={handleReduce}>reduce</button>&nbsp;
        <button onClick={handlePush}>push</button>&nbsp;
        <button onClick={handlePop}>pop</button>&nbsp;
      </div>
      <div>
        <strong>Array</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>Result</strong> : {result}
      </div>
    </div>
  );
}

export default App;
