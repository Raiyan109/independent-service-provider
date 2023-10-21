import React from 'react';
import './DropdownMenu.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '../../context/AuthContext';

const DropdownMenu = () => {
    const { rkkAuth, setRkkAuth } = useAuth()
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {rkkAuth?.user?.name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default DropdownMenu;