import {A} from 'solid-start'
import {Centered, Headline} from "@qinetik/anique";
import FaceSadIcon from "@qinetik/mdi/FaceSadIcon";

export default function NotFound() {
    return (
        <Centered style={{ "flex-direction" : "column" }}>
            <Headline><FaceSadIcon size={72}/> Not Found</Headline>
            <p>
                Visit{' '}
                <a href="https://solidjs.com" target="_blank">
                    solidjs.com
                </a>{' '}
                to learn how to build Solid apps.
            </p>
            <p>
                <A href="/">
                    Home
                </A>
                {' - '}
                <A href="/about">
                    About Page
                </A>
            </p>
        </Centered>
    )
}
