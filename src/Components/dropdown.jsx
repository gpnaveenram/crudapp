import React, { useState } from 'react';

const Dropdown = () => {
    const items = ["Add User", "Edit User", "Delete User"]
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        // onSelect(item); // You can pass the selected item to a callback function if needed
    };

    return (
        <div className="dropdown">
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedItem ? selectedItem.label : 'Select an item'}
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {items.map((item) => (
                        <li key={item.id} onClick={() => handleSelect(item)}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
