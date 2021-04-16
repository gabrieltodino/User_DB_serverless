import { Container } from '../styles/Pages/listusernames'
import { GetServerSideProps } from 'next'

interface listUsernameProps {
    usernames: Array<listUsernameObjectProps>;
}
interface listUsernameObjectProps {
    username: string,
}

export default function ListUsername(props: listUsernameProps) {
    return (
        <Container>
            <h2>Usernames:</h2>
            {props.usernames.map((item) => <p>{item.username}</p>)}
        </Container>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await fetch('https://username-list-serverless.vercel.app/api/read')
        .then((res) => {
            return res.json()
        })

    return {
        props: {
            usernames: data
        }
  }
}
