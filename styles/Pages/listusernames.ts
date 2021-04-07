import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 20px;
    }
    
    @media (max-width: 780px) {
        & {
            max-width: 700px;
        }
        section {
            grid-template-columns: 1fr;
        }
    }
`