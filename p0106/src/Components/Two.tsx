import { useCounterStore } from "../store";

export default function Two() {
    // useCountStore 구독
    const count = useCounterStore((s) => s.count);
    const setCount = useCounterStore((s) => s.setCount);

    return (
        <>
            <div className="bg-blue-300">
                <h1>Two</h1>
                <button onClick={()=> setCount(0)}>
                    Two button(count 초기화)
                </button>
            </div>
        </>
    )
}
