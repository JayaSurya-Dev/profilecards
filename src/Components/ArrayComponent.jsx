import React from 'react';
import PropTypes from 'prop-types';

export const ArrayComponent = (props) => {
    const { items } = props;
    return (
        <>
            <h2>Items List</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li> // Use item.id as key and item.name as the display text
                ))}
            </ul>
        </>
    );
};

ArrayComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ).isRequired,
};