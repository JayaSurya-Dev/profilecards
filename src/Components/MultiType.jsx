import React from 'react';

export const MultiType = (props) => {
    const { value } = props;

    return (
        <div>
            <li>
                <h1>The value is: {value}</h1>
            </li>
        </div>
    );
};