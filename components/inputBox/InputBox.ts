import styled from 'styled-components'

export const InputContainer = styled.div`
    background-color: #313536;
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    margin-bottom: 30px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
    }
    
    div input {
        background-color: #1e1f20;
        border: 1px solid #efefef;
        padding: 10px 20px;
        border-radius: 20px;
        color: #fff;
        outline: none;
    }

    div button {
        width: 30px;
        height: 30px;
        background-color: rgba(0,0,0,0);
        border: none;
        color: #efefef;
        font-size: 1.55rem;
        outline: none;
    }
`