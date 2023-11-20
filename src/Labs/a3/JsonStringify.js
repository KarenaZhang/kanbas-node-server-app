import React from 'react';

function MyComponent() {
    const squares = [1, 4, 16, 25, 36];
    const squaresString = JSON.stringify(squares);

    return (
        <div>
            <h3>JSON Stringify</h3>
            squares = {squaresString} <br />
        </div>
    );
}

export default MyComponent;
