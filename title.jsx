import React from 'react';

const Title = ({ text }) => {
    return (
        <>
            <div className='container'></div>
            <h2 className='text-center mt-3'>{!text ? 'text' : text}</h2>
        </>
    )
}

export default Title