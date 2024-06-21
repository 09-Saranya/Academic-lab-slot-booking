import React, { useState } from 'react';
import './BookSlot.css'

const BookSlot = () => {
    const [name, setName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [showSelectedSlots, setShowSelectedSlots] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleRollNoChange = (e) => {
        setRollNo(e.target.value);
    };

    const handleSlotSelection = (e) => {
        const slot = e.target.value;
        if (e.target.checked) {
            setSelectedSlots([...selectedSlots, slot]);
        } else {
            setSelectedSlots(selectedSlots.filter((selectedSlot) => selectedSlot !== slot));
        }
    };

    const handleSubmit = () => {
        setShowSelectedSlots(true);
    };

    return (
        <div className='book-slot'>
            <p>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} required/>
                
            </p>
            <p>
                <label htmlFor="rollNo">Roll No:</label>
                <input type="text" id="rollNo" value={rollNo} onChange={handleRollNoChange} required/>
            </p>
            <div>
                <p>21EE607-MICROCONTROLLER BASED SYSTEM DESIGN LABORATORY:</p>
                <p>
                    <label>
                        <input type="checkbox" value="23.05.2024[08.45AM-10.25AM]" onChange={handleSlotSelection} />
                        23.05.2024[08.45AM-10.25AM]
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" value="24.05.2024[08.45AM-10.25AM]" onChange={handleSlotSelection} />
                        24.05.2024[08.45AM-10.25AM]
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" value="25.05.2024[08.45AM-10.25AM]" onChange={handleSlotSelection} />
                        25.05.2024[08.45AM-10.25AM]
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" value="26.05.2024[08.45AM-10.25AM]" onChange={handleSlotSelection} />
                        26.05.2024[08.45AM-10.25AM]
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" value="27.05.2024[08.45AM-10.25AM]" onChange={handleSlotSelection} />
                        27.05.2024[08.45AM-10.25AM]
                    </label>
                </p>
            </div>

            <button onClick={handleSubmit}>Submit</button>

            {showSelectedSlots && (
                <div>
                    <p>Selected Slots:</p>
                    <ul>
                        {selectedSlots.map((slot) => (
                            <li key={slot}>{slot}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BookSlot;
