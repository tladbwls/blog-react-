/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  function 함수() {
    따봉변경(따봉 + 1);
  }
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button
        onClick={() => {
          let copy1 = [...글제목];
          copy1.sort(function ascending(a, b) {
            return a < b ? -1 : a == b ? 0 : 1;
          });
          글제목변경(copy1);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      {/* <div className="list">
        <h4>
          {글제목[0]} <span onClick={함수}>👍🏻</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4>{글제목[i]}</h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal === true ? <Modal></Modal> : null}
      {/* if 대신 삼항연산자 */}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
