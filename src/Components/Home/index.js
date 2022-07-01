import React from 'react';
import './style.css';

/**
* @author
* @function Home
**/

const Home = () => {
    return (
        <>
            <div className='flex'>
                <button type="button">
                    Show All
                </button>
                <button type="button">
                    Show Complete
                </button>
                <button type="button">
                    Show Incomplete
                </button>
            </div>
            <div className='flex'>
                <form>
                    <input type="text" />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        </>
    )

}

export default Home;