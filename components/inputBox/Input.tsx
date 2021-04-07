import { InputContainer } from './InputBox'
import { useState, FormEvent } from 'react'
import axios from 'axios';

export function Input() {
    const [username, setUsername] = useState('')

    function handleInsertUsername(event: FormEvent) {
        event.preventDefault();

        setUsername('')
    
        axios.post('/api/insert', { username });
      }
    return (
        <InputContainer>
            <h3>Insert a new username into the list</h3>

            <div>
                <input 
                    type="text"
                    placeholder="Username"
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                />

                <button onClick={handleInsertUsername}>&#11166;</button>
            </div>
        </InputContainer>
    )
}