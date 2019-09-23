import React from 'react';

const Controls = ({onStart, onHit, onStand}) => {
    return (<div className="controls">
        <button type="start" onClick={() => onStart()}>Start</button>
        <button type="button" onClick={() => onHit()}>Hit</button>
        <button type="button" onClick={() => onStand()}>Stand</button>
    </div>);
}

export default Controls;