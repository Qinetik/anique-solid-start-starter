import {AppBar, IconButton, saveThemeIntoLocalStorage} from "@qinetik/anique";
import {createSignal, onMount, Show} from "solid-js";
import ThemeLightDarkIcon from "@qinetik/mdi/ThemeLightDarkIcon";
import Brightness7Icon from "@qinetik/mdi/Brightness7Icon";
import Brightness4Icon from "@qinetik/mdi/Brightness4Icon";
import Brightness3Icon from "@qinetik/mdi/Brightness3Icon";
import Brightness1Icon from "@qinetik/mdi/Brightness1Icon";
import Brightness6Icon from "@qinetik/mdi/Brightness6Icon";

export default function WebAppBar() {

    const [themeState, setThemeState] = createSignal("dark")

    function getTheme() {
        return document.documentElement.className
    }

    onMount(() => {
        setThemeState(getTheme())
    })

    function setTheme(theme: "light" | "dark") {
        document.documentElement.className = theme
        saveThemeIntoLocalStorage(theme)
    }

    return (
        <AppBar
            title={"Anique"}
            actions={(
                <IconButton onClick={() => {
                    const theme = getTheme()
                    const newTheme = theme == "dark" ? "light" : "dark"
                    setTheme(newTheme)
                    setThemeState(newTheme)
                }}>
                    <Show when={themeState() == "dark"}>
                        <Brightness7Icon />
                    </Show>
                    <Show when={themeState() == "light"}>
                        <Brightness6Icon />
                    </Show>
                </IconButton>
            )}
        />
    )
}