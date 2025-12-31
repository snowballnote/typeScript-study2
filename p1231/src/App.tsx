import { useState, type MouseEvent } from "react";

interface CalculatorState { // 자바의 VO타입 이라고...
    currentNumber: string;
    previousNumber: string;
    operation: string | null; // union 타입 : string or null 일 수 있다.
    isNewNumber: boolean;
}

export default function App() {
    const [state, setState] = useState<CalculatorState>({
        currentNumber: "0",
        previousNumber: "",
        operation: null,
        isNewNumber: true,
    });

    // 숫자 클릭시 작동하는 함수
    // e 상세타입을 명시하면 . 자동완성기능을 사용 할 수 있다.
    const handleNumberClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const value = e.currentTarget.value; //지금 클릭된 버튼의 value 값을 가져오기

        // 상태를 변경하기 위해 setState 사용
        // prev는 "이전상태"(가장 최신 상태를 보장)
        setState(prev => {
            // 지금이 '새 숫자 입력 시작' 상태인지 확인
            if(prev.isNewNumber){
                // 새 숫자 시작이면
                // 기존 숫자를 버리고, 지금 누른 숫자로 덮어쓴다.
                return{
                    ...prev, // 기존 상태는 그대로 복사
                    currentNumber: value, // 화면에 보여줄 숫자를 지금 누른 값으로 변경
                    isNewNumber: false, // 이제 새 숫자 상태가 아님(입력 중 상태)
                };
            }

            // 새 숫자 시작이 아니라면(이미 입력중)
            return{
                ...prev, // 기존 상태 유지
                // 현재 숫자가 "0"이면
                // "0" + "5" -> "05"가 되지 않게
                // 그냥 "5"로 교체
                currentNumber:
                    prev.currentNumber == "0"
                        ? value // "0"이면 덮어쓰기
                        : prev.currentNumber + value, // 아니면 뒤에 숫자 붙이기
            };
        });
    };

    const handleOperatorClick = (e: React.MouseEvent<HTMLInputElement>) => {
        const operator = e.currentTarget.value;

        setState(prev => {
            if(operator == "="){
                const a = Number(prev.previousNumber);
                const b = Number(prev.currentNumber);
                let result = 0;

                switch(prev.operation){
                    case "+":
                        result = a + b;
                        break;
                    case "-":
                        result = a - b;
                        break;
                    case "*":
                        result = a * b;
                        break;
                    case "/":
                        result = b != 0 ? a / b : 0;
                        break;
                    default:
                        return prev; // 계산할 게 없으면 그대로
                }

                return{
                    currentNumber: String(result), 
                    
                }
            }

            return {
                ...prev, // 다른건 그대로 두고
                previousNumber: prev.currentNumber, // 숫자 저장
                operation: operator, // 연산자 저장
                isNewNumber: true, // 새 숫자 시작
            };
        });
    };

    const handleClear = () => {
        alert("clear!");

        setState(() => {
            return {
                currentNumber: "0",
                previousNumber: "",
                operation: null,
                isNewNumber: true,
            };
        });
    };

    const handleDot = (e: React.MouseEvent<HTMLInputElement>) => {
        alert("Dot: " + e.currentTarget.value);
    };

    const divClass: string="flex justify-center items-center h-screen bg-[#1A1A1C]";

    return (
        <div className={divClass}>
        {/* flex justify-center items-center: 화면을 가로/세로 중앙에 배치 */}
        {/* h-screen: 화면 전체 높이 사용 */}
        {/* bg-[#1A1A1C]: 카카오 앱 느낌의 다크 배경색 */}

        <article className="w-[287px] border border-[#333] bg-[#FFF7C2] p-2 rounded-lg shadow-lg">
            {/* w-[287px]: 계산기 전체 너비를 287px로 고정 */}
            {/* border border-[#333]: 어두운 테두리 */}
            {/* bg-[#FFF7C2]: 카카오 옐로에 가까운 부드러운 배경 */}
            {/* p-2: 내부 여백 */}
            {/* rounded-lg: 모서리 크게 둥글게 */}
            {/* shadow-lg: 큰 그림자 효과 */}

            <form className="grid grid-cols-4 auto-rows-[65px] gap-1.5">
            {/* grid: CSS Grid 레이아웃 사용 */}
            {/* grid-cols-4: 가로 4개 열 구성 */}
            {/* auto-rows-[65px]: 모든 행 높이를 65px로 고정 */}
            {/* gap-1.5: 버튼 사이 간격 */}

            {/* 디스플레이 창 */}
            <input
                type="text"
                value={state.currentNumber}
                readOnly
                className="col-span-4 text-right px-2 border-2 border-[#E5C200] text-lg rounded-md bg-white"
            />
            {/* col-span-4: grid 4칸을 전부 차지(한 줄 꽉 채움) */}
            {/* text-right: 숫자 오른쪽 정렬 */}
            {/* px-2: 좌우 padding */}
            {/* border-2 border-[#E5C200]: 2px 두께 + 카카오 옐로 대비 테두리 */}
            {/* text-lg: 큰 글자 */}
            {/* rounded-md: 중간 둥근 모서리 */}
            {/* bg-white: 흰색 배경 */}
            {/* readOnly: 키보드 입력 방지, 출력 전용 */}

            {/* C 버튼 */}
            <input
                type="button"
                value="C"
                onClick={handleClear}
                className="col-span-3 bg-[#3A3A3C] text-white font-bold border-2 border-[#2A2A2C] rounded-md hover:shadow-md cursor-pointer"
            />
            {/* col-span-3: 3칸 차지 */}
            {/* bg-[#3A3A3C]: 카카오 스타일의 뉴트럴 다크 */}
            {/* text-white: 글자 흰색 */}
            {/* font-bold: 글자 굵게 */}
            {/* cursor-pointer: 클릭 가능 포인터 표시 */}

            {/* 나누기 버튼 */}
            <input
                type="button"
                value="/"
                onClick={handleOperatorClick}
                className="bg-[#FEE500] text-black border-2 border-[#E5C200] rounded-md hover:shadow-md cursor-pointer"
            />
            {/* bg-[#FEE500]: 카카오 대표 옐로 */}
            {/* text-black: 글자 검정 */}

            {/* 숫자 버튼들 1,2,3 */}
            {["1", "2", "3"].map((num) => (
                <input
                key={num}
                type="button"
                value={num}
                onClick={handleNumberClick}
                className="bg-[#FFFBEA] border-2 border-[#E5D97A] rounded-md hover:shadow-md cursor-pointer"
                />
            ))}
            {/* map()으로 1,2,3 버튼 반복 생성 */}
            {/* bg-[#FFFBEA]: 카카오 웜톤 화이트 */}

            {/* 곱하기 버튼 */}
            <input
                type="button"
                value="*"
                onClick={handleOperatorClick}
                className="bg-[#FEE500] text-black border-2 border-[#E5C200] rounded-md hover:shadow-md cursor-pointer"
            />

            {/* 숫자 버튼들 4,5,6 */}
            {["4", "5", "6"].map((num) => (
                <input
                key={num}
                type="button"
                value={num}
                onClick={handleNumberClick}
                className="bg-[#FFFBEA] border-2 border-[#E5D97A] rounded-md hover:shadow-md cursor-pointer"
                />
            ))}

            {/* 더하기 버튼 */}
            <input
                type="button"
                value="+"
                onClick={handleOperatorClick}
                className="bg-[#FEE500] text-black border-2 border-[#E5C200] rounded-md hover:shadow-md cursor-pointer"
            />

            {/* 숫자 버튼들 7,8,9 */}
            {["7", "8", "9"].map((num) => (
                <input
                key={num}
                type="button"
                value={num}
                onClick={handleNumberClick}
                className="bg-[#FFFBEA] border-2 border-[#E5D97A] rounded-md hover:shadow-md cursor-pointer"
                />
            ))}

            {/* 빼기 버튼 */}
            <input
                type="button"
                value="-"
                onClick={handleOperatorClick}
                className="bg-[#FEE500] text-black border-2 border-[#E5C200] rounded-md hover:shadow-md cursor-pointer"
            />

            {/* 소수점 버튼 */}
            <input
                type="button"
                value="."
                onClick={handleDot}
                className="bg-[#FEE500] text-black border-2 border-[#E5C200] rounded-md hover:shadow-md cursor-pointer"
            />

            {/* 숫자 0 */}
            <input
                type="button"
                value="0"
                onClick={handleNumberClick}
                className="bg-[#FFFBEA] border-2 border-[#E5D97A] rounded-md hover:shadow-md cursor-pointer"
            />

            {/* = 결과 버튼 */}
            <input
                type="button"
                value="="
                onClick={handleOperatorClick}
                className="col-span-2 bg-[#FDD835] text-black font-bold border-2 border-[#E5C200] rounded-md hover:shadow-md cursor-pointer"
            />
            {/* col-span-2: 2칸 차지 */}
            {/* bg-[#FDD835]: 강조된 카카오 옐로 계열 */}
            {/* font-bold: 강조 굵은 글자 */}
            </form>
        </article>
        </div>
    );
}
