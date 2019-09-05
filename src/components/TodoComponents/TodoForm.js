import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }
    handleChange= e => {
        this.setState({task: e.target.value});
        console.log(this.state.task);
    }
    handleSubmit= e => {
        this.props.addTask(e, this.state.task)
        this.state.task = '';
    }
    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input
                type='text'
                name='task'
                placeholder='Enter a Task'
                value={this.state.task}
                onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;