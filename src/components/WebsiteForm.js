// src/components/WebsiteForm.js

import React, { useState } from 'react';
import axios from 'axios';

function WebsiteForm() {
    const [url, setUrl] = useState('');
    const [summary, setSummary] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/summarize', { url });
            setSummary(response.data.summary);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter Website URL" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    required 
                />
                <button type="submit">Summarize</button>
            </form>
            {summary && <div>{summary}</div>}
        </div>
    );
}

export default WebsiteForm;
