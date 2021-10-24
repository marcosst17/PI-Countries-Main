import React from 'react';
// import axios from 'axios';
export default function Example({cities}) {
     return (
        <div>
        <h1>Example</h1>
            <div>
                {cities.map(ciudad => {
                    return (
                        <div key={ciudad.id}>
                            <h2>{ciudad.name}</h2>
                            <h3>{ciudad.id}</h3>
                            <p>{ciudad.flag}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}