import { createResource, createSignal } from 'solid-js'
import {Headline, TextField} from "@qinetik/anique";

const WelcomeComponent = () => {
  const [name, setName] = createSignal('TEST')

  return (
    <>
      <Headline>{"Welcome"}</Headline>
      <TextField
        value={"Type your name here"}
        onChange={(event) => setName(event.currentTarget.value)}
      />
    </>
  )
}

export default function About() {
  return (
    <main>
      <WelcomeComponent />
    </main>
  )
}
