import {A} from 'solid-start'
import {Headline} from "@qinetik/anique";
import StyledCounter from "~/components/StyledCounter";

export default function Home() {
    return (
        <main>
            <Headline>Hello world!</Headline>
            <h1>Here's a styled counter</h1>
            <StyledCounter/>
        </main>
    )
}
