import { useState } from "react";

export function Person() {
    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 100
    });

    const handleIncreaseAge = () => {
        setPerson({...person, age: person.age + 1});
    }

    const handleFirstNameChange = (e) => {
        setPerson({
            ...person,
            firstName: e.target.value
        });
    };

    return (
        <>
            <h1>{person.firstName} {person.age}</h1>

            <input type="text" 
            value={person.firstName}
            onChange={handleFirstNameChange}
            />

            <button onClick={handleIncreaseAge}>age up</button>
        </>
    );
}