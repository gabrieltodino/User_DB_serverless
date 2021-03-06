import { Input } from '../components/inputBox/Input'
import { Container } from '../styles/Pages/Home'

import Link from 'next/link'

export default function Home() {

  return (
    <Container>
      <Input/>

      <Link href="/listusernames">
        <a>View list</a>
      </Link>
    </Container>
  )
}
