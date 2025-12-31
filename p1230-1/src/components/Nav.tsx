// 컴포넌트 함수의 매개값은 하나의 객체 타입으로(props) 받을 수도 있고
// 실무에서는 구조분해할당 문법을 많이 이용한다.
// const props = {id:"admin", pw:"1234"};
// export default function Nav(props) {}
// const {id, pw} = {id:"admin", pw:"1234"};
export default function Nav({id, pw}) {
  return (
    <div>
        <a href="">홈으로</a> |
        <a href="">고객센터</a> |
        <a href="">직원</a> |
        <a href="">학생</a> |
        {id}, 
        {pw}
    </div>
  );
}