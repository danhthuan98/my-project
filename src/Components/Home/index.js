import React, { useReducer, useState } from 'react';
import todoReducer from '../../reducers/todoReducer';
import useUser from '../../hooks/useUser';
import './style.css';

/**
* @author
* @function Home
**/


const Home = () => {

    const { data, setData } = useUser();
    const [todos, dispatchTodos] = useReducer(todoReducer, data);
    const [task, setTask] = useState('');
    const [filter, setFilter] = useState('ALL');

    const handleChangeCheckbox = todo => {
        dispatchTodos({
            type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
            id: todo.id
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (task) {
            dispatchTodos({
                type: 'ADD_TODO',
                task
            });
        }
        setTask('');
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'ALL') {
            return true;
        }
        if (filter === 'COMPLETE' && todo.complete) {
            return true;
        }
        if (filter === 'INCOMPLETE' && !todo.complete) {
            return true;
        }
        return false;
    });

    return (
        <>
            <div className='flex'>
                <button type="button" onClick={() => setFilter('ALL')} className={filter !== 'ALL' ? 'button' : 'button-active'}>
                    Show All
                </button>
                <button type="button" onClick={() => setFilter('COMPLETE')} className={filter !== 'COMPLETE' ? 'button' : 'button-active'}>
                    Show Complete
                </button>
                <button type="button" onClick={() => setFilter('INCOMPLETE')} className={filter !== 'INCOMPLETE' ? 'button' : 'button-active'}>
                    Show Incomplete
                </button>
                <button type="button" onClick={() => setData([])} className='button'>
                    refresh list
                </button>
            </div>
            <div className='flex'>
                <ul>
                    {filteredTodos.map(todo => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.complete}
                                    onChange={() => handleChangeCheckbox(todo)}
                                />
                                {todo.task}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex'>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                    <button type="submit" style={{ marginLeft: 5 }}>Add Todo</button>
                </form>
            </div>
        </>
    )

}

export default Home;