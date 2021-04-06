import { InputContainer } from './InputBox'

export function Input() {
    return (
        <InputContainer>
            <h3>Insert a new username into the list</h3>

            <div>
                <input 
                    type="text"
                    placeholder="Username"
                />

                <button>&#11166;</button>
            </div>
        </InputContainer>
    )
}