import type React from "react";
/*
    const name: string = props.name;
    const age: number = props.age;
    const handler: ()=> void = props.handler;
    const children: React.ReactNode = props.children; // 인수로 들어온 태그
*/
// 매개값을 구조분해할당
export default function Test({name, age, handler, children}) {
    return (
        <>
            <div>
                <h2>Test Conponent</h2>
                <button type="button" onClick={handler}>{name}/{age}</button>
                {children}
            </div>
        </>
    );
}