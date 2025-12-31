export default function Body() {
  return (
    <>
        <div>
            안녕하세요.
            <br/>
            무엇을 도와드릴까요?
        </div>
        <div>
          <button type="button" onClick={(e) => console.log("클릭!")}>
            이벤트 처리 연습
          </button>
        </div>
    </>
  );
}