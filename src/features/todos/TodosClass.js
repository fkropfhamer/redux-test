import React from "react";
import {connect} from "react-redux";
import {add} from "./todosSlice";

const mapStateToProps = state => ({todos: state.todos.value});

class TodosClass extends React.Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <button onClick={() => this.props.add({name: 'class'})}>add</button>
                {this.props.todos.map((todo, i) => <div key={i}>{todo.name}</div>)}
            </div>
        )
    }
}

export default connect(mapStateToProps, { add })(TodosClass)
