const React = {
    createElement: (tag, props, ...children)=>{
        if (typeof tag === 'function') return tag(props);
        const element = {
            tag,
            props: {
                ...props,
                children
            }
        };
        return element;
    }
};
let states = [];
let stateCursor = 0;
const useState = (initialState)=>{
    const CURSOR = stateCursor;
    states[CURSOR] = states[CURSOR] || initialState;
    const setState = (newState)=>{
        console.log(states);
        states[CURSOR] = newState;
        rerender();
    };
    stateCursor++;
    return [
        states[CURSOR],
        setState
    ];
};
const App = ()=>{
    const [name, setName] = useState('React');
    const [count, setCount] = useState(0);
    return /*#__PURE__*/ React.createElement("div", {
        className: "container",
        __source: {
            fileName: "index.tsx",
            lineNumber: 30,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 31,
            columnNumber: 9
        },
        __self: this
    }, "Hello ", name), /*#__PURE__*/ React.createElement("input", {
        value: name,
        placeholder: "Name",
        onchange: (e)=>setName(e.target.value)
        ,
        __source: {
            fileName: "index.tsx",
            lineNumber: 32,
            columnNumber: 9
        },
        __self: this
    }), /*#__PURE__*/ React.createElement("h2", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 34,
            columnNumber: 9
        },
        __self: this
    }, count), /*#__PURE__*/ React.createElement("button", {
        onclick: ()=>setCount(count + 1)
        ,
        __source: {
            fileName: "index.tsx",
            lineNumber: 35,
            columnNumber: 9
        },
        __self: this
    }, "+"), /*#__PURE__*/ React.createElement("button", {
        onclick: ()=>setCount(count - 1)
        ,
        __source: {
            fileName: "index.tsx",
            lineNumber: 36,
            columnNumber: 9
        },
        __self: this
    }, "-"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 37,
            columnNumber: 9
        },
        __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus dignissimos dolorem dolores eum, mollitia nulla praesentium similique sint veritatis? Animi architecto aut harum libero necessitatibus quae, quam saepe temporibus?"));
};
const render = (reactElement, container)=>{
    if ([
        "string",
        "number"
    ].includes(typeof reactElement)) {
        container.appendChild(document.createTextNode(reactElement));
        return;
    }
    const actualDomElement = document.createElement(reactElement.tag);
    if (reactElement.props) Object.keys(reactElement.props).filter((c)=>c !== 'children'
    ).forEach((p)=>actualDomElement[p] = reactElement.props[p]
    );
    if (reactElement.props.children) reactElement.props.children.forEach((c)=>render(c, actualDomElement)
    );
    container.appendChild(actualDomElement);
};
const rerender = ()=>{
    document.querySelector('#root').firstChild.remove();
    stateCursor = 0;
    render(/*#__PURE__*/ React.createElement(App, {
        __source: {
            fileName: "index.tsx",
            lineNumber: 68,
            columnNumber: 12
        },
        __self: this
    }), document.querySelector('#root'));
};
render(/*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "index.tsx",
        lineNumber: 72,
        columnNumber: 8
    },
    __self: this
}), document.querySelector('#root'));

//# sourceMappingURL=index.ad9a7e97.js.map
