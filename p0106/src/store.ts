// 전역상태변수(store) 설정
// zustand 패키지 사용
// create() 생성

import {create} from "zustand";

// 전역변수 타입 설정
interface CounterStore{
    count: number;
    setCount: (val: number)=> void;

}
export const useCounterStore = create<CounterStore>(
/*
    () => {}; // {}문을 실행하고 void반환
    () => {}; // 반환값이 {}객체인지?

    () => ({x:1, y:2}); // return {x:1, y:2}
    () => {x:1, y:2}; // return void 

    function(){ // return void 
        {x:1, y:2};
    }
    
    function(){ // return 객체
        return {x:1, y:2};
    }
*/
    // (값을 변경하는 함수) => 반환객체
    (set) => ({
        count: 0, 
        setCount: (val) => set({count: val})
    })
);