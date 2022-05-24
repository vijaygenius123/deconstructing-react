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
        console.log(element);
        return element;
    }
};
const App = ()=>/*#__PURE__*/ React.createElement("div", {
        className: "container",
        __source: {
            fileName: "index.tsx",
            lineNumber: 14,
            columnNumber: 20
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 15,
            columnNumber: 9
        },
        __self: this
    }, "Hello React"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 16,
            columnNumber: 9
        },
        __self: this
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus delectus dignissimos dolorem dolores eum, mollitia nulla praesentium similique sint veritatis? Animi architecto aut harum libero necessitatibus quae, quam saepe temporibus?"))
;
/*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "index.tsx",
        lineNumber: 26,
        columnNumber: 1
    },
    __self: this
});

//# sourceMappingURL=index.ad9a7e97.js.map
