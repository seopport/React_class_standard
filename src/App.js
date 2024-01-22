import "./App.css";
import { useState } from "react";

function App() {
  const initialArray = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  //useState 결과물은 배열이다.

  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit, idx) {
      tempResult += `${idx}: ${fruit}, `;
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
      return `${acc} + ${cur}`;
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

  //원본배열의 뒤 2개 아이템을 제거하여 출력
  const handleSlice = () => {
    const newArr = array.slice(0, -2);
    setResult(newArr.join(", "));
  };

  const handleSplice = () => {
    //원본배열의 가운데 아이템 2번째 부터 2개를 “kiwi”, “lime”으로 변경
    const middle = Math.floor(array.length / 2);
    array.splice(middle, 2, "kiwi", "lime");
    setResult(array.join(", "));
  };

  const handleIndexOf = () => {
    //1. input에 입력한 값과 일치하는 값이 있는 경우 **`해당 index`**를 출력
    //2. 없는 경우, `-1`을 출력
    const num = array.indexOf(query);
    setResult(num);
  };

  const handleIncludes = () => {
    //원본배열이 input에 입력한 값과 일치하는 정확한 과일명을 가지고있는 경우 true 출력, 그 외의 경우 false 출력
    if (array.includes(query)) {
      setResult("true");
    } else setResult("false");
  };

  const handleFind = () => {
    //원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 과일명을 출력, 그 외의 경우 “Not Found”를 출력
    const finded = array.find((item) => item.includes(query));

    finded !== undefined ? setResult(finded) : setResult("Not Found");
  };

  const handleSome = () => {
    //원본배열이 input에 입력한 값을 포함하는 과일명을 가지고있는 경우 true을 출력, 그 외의 경우 false 를 출력
    const result = array.some((item) => item.includes(query));
    result === true ? setResult("true") : setResult("false");
  };
  const handleEvery = () => {
    //모든 과일명이 5글자를 초과하는 경우 true를 출력, 그 외의 경우 false를 출력
    const result = array.every((item) => item.length > 5);
    result === true ? setResult("true") : setResult("false");
  };

  const handleSort = () => {
    //알파벳 내림차순 정렬 후 리스트 명을 “, “로 구분하여 출력
    const newArr = [...array];
    const sortedArr = newArr.sort();
    setResult(sortedArr.join(", "));
  };

  const handleJoin = () => {};

  return (
    <div className="main">
      <h1>Standard반 배열 API</h1>
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
        <button onClick={handleSlice}>slice</button>&nbsp;
        <button onClick={handleSplice}>splice</button>&nbsp;
        <button onClick={handleIndexOf}>indexOf</button>&nbsp;
        <button onClick={handleIncludes}>includes</button>&nbsp;
        <button onClick={handleFind}>find</button>&nbsp;
        <button onClick={handleSome}>some</button>&nbsp;
        <button onClick={handleEvery}>every</button>&nbsp;
        <button onClick={handleSort}>sort</button>&nbsp;
        <button onClick={handleJoin}>join</button>&nbsp;
      </div>
      <div className="origin">
        <strong>원본 배열</strong> : {array.join(", ")}
      </div>
      <div className="result">
        <strong>결과물</strong> : {result}
      </div>
    </div>
  );
}

export default App;
