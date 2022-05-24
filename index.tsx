const React = {

    createElement: (tag, props, ...children) => {
        if (typeof tag === 'function') {
            return tag(props)
        }
        const element = {tag, props: {...props, children}}
        console.log(element)
        return element
    }

}

const App = () => (<div className={"container"}>
        <h1>Hello React</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus delectus dignissimos dolorem dolores eum,
            mollitia nulla praesentium similique sint veritatis? Animi
            architecto aut harum libero necessitatibus quae,
            quam saepe temporibus?
        </p>
    </div>
    );

<App />
