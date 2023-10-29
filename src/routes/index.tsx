import {Headline, Scaffold} from "@qinetik/anique";
import StyledCounter from "~/components/StyledCounter";
import Navigation from "~/components/Navigation";
import WebAppBar from "~/components/AppBar";

export default function Home() {
    return (
        <main>
            <Scaffold
                drawerContent={() => <Navigation/>}
                topBar={() => <WebAppBar/>}
            >
                <Headline>Hello world!</Headline>
                <h1>Here's a styled counter</h1>
                <StyledCounter/>
            </Scaffold>
        </main>
    )
}
