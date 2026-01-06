import { useCounterStore } from "../store";

export default function One() {
    // useCountStore 구독
    const count = useCounterStore((s) => s.count);
    const setCount = useCounterStore((s) => s.setCount);

    return (
        <>
            <div className="bg-amber-300">
                <h1>One(count: {count})</h1>
                <button onClick={()=> {setCount(count * count)}}>
                    One button
                </button>
            </div>
        </>
    )
}
