

export function App() {
    const age = rvar(0);
    const items = rvar([11]);

    setTimeout(() => {
        items.set([1, 2, 3]);
    }, 5000);
    setTimeout(() => {
        age.set(10);
    }, 1000);

    const e = <div>
        <div>{items}, {age}</div>
        <div>{age}</div>
        <div>{age}{age}</div>
    </div>;
    console.log(age);
    return e;
}

document.body.append(<App />)