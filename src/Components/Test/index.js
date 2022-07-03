import React from 'react';
import useUser from '../../hooks/useUser';

/**
* @author
* @function Test
**/

const Test = () => {

    const { data } = useUser();
    return (
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
        </div>
    )

}

export default Test;
