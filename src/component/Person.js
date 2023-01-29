import React from 'react';

const Person = ({name}) => {
    return (
        <div className="person" >
            <h1 className="btn btn-primary">{name}</h1>
            {/* <h3>Profession : {job}</h3> */}
            {/* <h2>They are Brothers</h2> */}
        </div>
    );
};

export default Person;