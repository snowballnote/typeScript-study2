import Nav from "./Nav";

export default function Header() {
  const gd = {
    name: "구디아카데미", 
    address: "가산", 
    age: 15
  };
  return (
    <>
        <h1>{gd.name}</h1>
        {/* 
          부모 컴포넌트에서 자식 컴포넌트로 매개값을 넘길 때
          부모 컴포넌트는 속성으로 넘기고(문자를 제외한 모든값은 표현식사용),
          자식 컴포넌트는 함수의 매개변수로 받는다.
        */}
        {/* }Nav name={name} address="가산동"  age={15}/> */}
        {/* 속성값은 하나의 객체타입으로 묶여서 인수로 넘겨진다 */}
        {/* name:"구디아카데미", address="가산동", age=15 */}
        <Nav id="admin" pw="1234" />
          {/* 
            const props = {id:"admin", pw:"1234"};
            const {id, pw} = {id:"admin", pw:"1234"};
          */}
    </>
  );
}
