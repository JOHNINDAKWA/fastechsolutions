import './Clients.css';
import { useState } from 'react';
import { clientsData } from './ClientsData';

const Clients = () => {
    const [filter, setFilter] = useState('all');

    // Function to filter clients based on the selected type
    const filteredClients = clientsData.filter(client => 
        filter === 'all' || client.type === filter
    );

    return (
        <div className='client-section'>
            <h2 data-aos="zoom-in">Our Partners & Clients</h2>
            <div className='filter-buttons'>
                <button onClick={() => setFilter('all')} data-aos="fade-right">All</button>
                <button onClick={() => setFilter('client')} data-aos="zoom-in">Clients</button>
                <button onClick={() => setFilter('partner')} data-aos="fade-left">Partners</button>
            </div>
            <div className='client-logos'>
                {filteredClients.map((client, index) => (
                    <img key={index} src={client.src} alt={`Logo ${index}`} className='client-logo' data-aos="zoom-in"/>
                ))}
            </div>
        </div>
    );
}

export default Clients;
