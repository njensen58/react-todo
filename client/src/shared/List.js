import React from 'react';

const List = props => {
    const { data, className, render } = props;
    return (
        <div className={className}>
            { data && data.map((item, i) => render({ item, i, key: i })) }
        </div>
    )
}

export default List;
