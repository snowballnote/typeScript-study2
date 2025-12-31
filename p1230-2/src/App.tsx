interface User{
    name: string;
    age: number;
}

export default function App() {
    /*
    const user: User = {
        name: "루피", 
        age: 17
    };
    */
    // 객체타입의 상태변수 생성
    const [user, setUser] = useState<User>({name: "guest", age: 0});

    let inputName = "";
    let inputAge = 0;
    
    const handler = () => {
        console.log("test");
        setUser({name: inputName, age: inputAge});
    };
    
    return (
        <>
            <h1>App Component</h1>
            <div>이름: {user.name}</div>
            <div>나이: {user.age}</div>

            <button type="button" onClick={handler}>
                User변경
            </button>
            이름: 
            <input type="test" onChange={
                (e)=> inputName = e.target.value
            }>
            </input>
            나이: <input type="number"></input>
        </>
    )
}