import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getTodos, deleteTodo, toggleTodo, getAll } from '../../actions/todos';

class List extends Component {
    state = {
        isShowTable: false,
        
    }

    static propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    };



    allcomics() { 
        
        return <table className='table table-striped'>
                
                <h2>Комиксы</h2> 
                 
                        <thead>
                            <tr>
                                <th>title</th>
                                <th>description</th>
                                <th>done</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.todos.map(todo => (
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td><input
                                        onChange={this.props.toggleTodo.bind(this, todo)}
                                        type='checkbox' defaultChecked={todo.done} /></td>
                                    <td><button
                                        onClick={this.props.deleteTodo.bind(this, todo.id)}
                                        className='btn btn-danger btn-sm'>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
    
                
            
        
        
    }
    render() {
       
        
        return <>
        <button type='search' className='btn btn btn-outline-success' onClick={() => this.setState({isShowTable: true})}>Раскрыть Таблицу</button>
        <button type='cc' className='btn btn btn-outline-success' onClick={() => this.setState({isShowTable: false})}>Убрать</button>
        <div>{this.state.isShowTable && this.allcomics()}</div>
          </>
          
          }
}


const mapStateToProps = (state) => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos, deleteTodo, toggleTodo })(List);
