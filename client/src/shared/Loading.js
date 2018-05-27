import React from 'react';

const Loading = (props) => {
    const { isLoading } = props;
    return (
        <div>
            { isLoading
                ? <h1> Loading ... </h1>
                : props.children
            }
        </div>

    )
}

export default Loading;
