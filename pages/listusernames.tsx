import { Container } from '../styles/Pages/listusernames'
import { GetServerSideProps } from 'next'

export default function ListUsername(props) {
    return (
        <Container>
            <h2>Usernames:</h2>
            {props.usernames.map((item) => <p>{item.username}a</p>)}
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await fetch('http://localhost:3000/api/read')
        .then((res) => {
            return res.json()
        })

    return {
        props: {
            usernames: data
        }
  }
}
