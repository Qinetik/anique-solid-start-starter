import {DrawerItem, StaticDrawer} from "@qinetik/anique";
import {A, useLocation} from "solid-start";
import {styled} from "@qinetik/emotion";
import HomeIcon from "@qinetik/mdi/HomeIcon";
import AboutIcon from "@qinetik/mdi/AboutIcon";

const Anchor = styled(A)`
  text-decoration:none;
`

export default function Navigation() {
    const location = useLocation()
    const active = (path: string) => path == location.pathname
    return (
        <nav>
            <StaticDrawer>
                <Anchor href="/">
                    <DrawerItem isActive={active('/')}>
                        <HomeIcon />Home
                    </DrawerItem>
                </Anchor>
                <Anchor href="/about">
                    <DrawerItem isActive={active('/about')}>
                        <AboutIcon />About
                    </DrawerItem>
                </Anchor>
            </StaticDrawer>
        </nav>
    )
}