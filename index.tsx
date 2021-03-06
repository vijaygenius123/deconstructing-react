const React = {

    createElement: (tag, props, ...children) => {
        if (typeof tag === 'function') {
            return tag(props)
        }
        const element = {tag, props: {...props, children}}
        return element
    }
}


const App = () => {

    return (<div className={"container"}>
        <h1>Hello React</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus delectus dignissimos dolorem dolores eum,
            mollitia nulla praesentium similique sint veritatis? Animi
            architecto aut harum libero necessitatibus quae,
            quam saepe temporibus?
        </p>
    </div>)
};


const render = (reactElement, container) => {
    if (["string", "number"].includes(typeof reactElement)) {
        container.appendChild(document.createTextNode(reactElement))
        return
    }
    const actualDomElement = document.createElement(reactElement.tag)
    if (reactElement.props) {
        Object.keys(reactElement.props).filter(c => c !== 'children').forEach(p =>
            actualDomElement[p] = reactElement.props[p]
        )
    }
    if (reactElement.props.children) {
        reactElement.props.children.forEach(c => render(c, actualDomElement))
    }
    container.appendChild(actualDomElement)
}

render(<App/>, document.querySelector('#root'))

