import {Headline, Scaffold} from "@qinetik/anique";
import StyledCounter from "~/components/StyledCounter";
import Navigation from "~/components/Navigation";
import WebAppBar from "~/components/AppBar";
import WorldIcon from "@qinetik/mdi/WorldIcon";

export default function Home() {
    return (
        <main>
            <Scaffold
                drawerContent={() => <Navigation/>}
                topBar={() => <WebAppBar/>}
            >
                <Headline>Hello w<WorldIcon/>rld!</Headline>
                <h1>Here's a styled counter</h1>
                <StyledCounter/>
            </Scaffold>
        </main>
    )
}
