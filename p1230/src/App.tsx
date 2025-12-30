function add(a: number, b: number, c: number): number {
  return a + b + c;
}

export default function App() {
  const result1 = add(1, 6, 10);
  const arr = [1, 3, 5];
  const result2 = add(arr[0], arr[1], arr[2]);
  // 스프레드 연산 사용
  const result3 = add(...arr);

  // 코드 주석 부분
  /* 코드 주석 부분 */
  const num: number = 777;
  const x = 10;
  const y = 5;

  const num7th: number = 3;
  let gender: string = "";
  if(num7th % 2 == 1) {
    gender = "남";
  } else {
    gender = "여";
  }

  // 변수명에 참조연산자가 많으면 JSX에서 긴 변수명 줄이려고 
  // "구조분해할당 문법"을 많이 사용
  const user: {name, age} = {name:"홍길동", age:20};
  // 한번에 두개이상의 변수값에 대입
  const {name, age} = {name:"루피", age:17};
  // 배열을 구조분해
  const [one, two, three] = [99, 100, 80];

  const names = ["루피", "조로", "나미"];

  return (
    <>
      {/* HTML 문법과 비슷하지만 JSX 문법 */}
      {/* JSX(Javascript XML)부분 주석 */}
      <h1>Hello, Vite! {num}</h1> {/* 표현식은 중괄호 안에 */}
      {/* 모든 태그는 종료태그가 필요 */}
      <br/>
      {/* 
        HTML과 속성이름이 다르다. 
        TS키워드 동일한 속성이름, 두단어 이상의 속성이름은 카멜표현, ...
      */}
      <label htmlFor="name">이름 : </label>
      <input type="text" id="name" value={x+y} readOnly></input>
      <div>
        성별(if): {gender}
      </div>
      {/* TS조건문 보다는 JSX 삼항연산자 많이 사용 */}
      <div>
        성별(?:): {num7th % 2 == 1? "남" : "여"}
      </div>

      {/* JSX에서 반복문 */}
      <div>
        <ol>
          {
            names.map((e) => (<li>{e}</li>))
          }
        </ol>
      </div>

      {/* 
        인라인 CSS 사용방법 다르다. 
        더블중괄호 표현식 사용, 속성명은 카멜표현식 사용
      */}
      <div style={{
            color:"yellow", 
            backgroundColor:"black"
        }}>
        CSS TEST
      </div>
      <div>
        이름: {user.name}<br/>
        나이: {user.age}
      </div>
      <div>
        이름: {name}<br/>
        나이: {age}
      </div>
      <div>
        이름: {name}<br/>
        나이: {age}
      </div>
      <div>
        배열을 구조분해: {one},{two},{three}
      </div>
      <div>
        result1: {result1}<br/>
        result2: {result2}<br/>
        result3: {result3}<br/>
      </div>
    </>
  );
}
