import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import './style.css';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


/**
* @author
* @function Home
**/


const Home = () => {

    const { data, setData } = useUser();
    const [task, setTask] = useState('');
    const [filter, setFilter] = useState('ALL');

    const handleSubmit = e => {
        e.preventDefault();
        if (task) {
            let element = { id: uuidv4(), task, complete: false };
            setData([...data, element]);
            setTask('');
        }
    }

    const handleChangeCheckbox = todo => {
        setData(prev => (
            prev.map((item) =>
                item.id === todo.id ? { ...item, complete: !item.complete } : item)
        ))
    }

    const filteredTodos = data.filter(todo => {
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
            </div>
            <div className='flex'>
                {
                    filteredTodos.length > 0 ?
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
                        </ul> : <p> No Task</p>
                }

            </div>
            <div className='flex'>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                    <button type="submit" style={{ marginLeft: 5 }}>Add Todo</button>
                </form>
            </div>
            <div className='flex'>
                <Link to='/test'>Go to Test Page</Link>
            </div>
        </>
    )


}

export default Home;