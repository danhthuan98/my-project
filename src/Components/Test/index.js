import React from 'react';
import useUser from '../../hooks/useUser';
import { Link } from 'react-router-dom';

/**
* @author
* @function Test
**/

const Test = () => {

    const { data, name, setName } = useUser();
    return (
        <>
            <div className='flex'>
                {name}
                <input onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex'>
                <ul>
                    {data.map(todo => (
                        <li key={todo.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.complete}
                                />
                                {todo.task}
                            </label>
                        </li>
                    ))}
                </ul>
                <Link to='/'>Go to Home</Link>
            </div>
        </>
    )

}

export default Test;
