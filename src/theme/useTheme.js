import { useEffect, useState } from "react";
import LocalStorage from "utils/storage";
import * as r from "ramda"

const useTheme = () => {
    const themes = LocalStorage.read('all-themes');
    const [theme, setTheme] = useState(themes.data.light);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = themeName => {
        LocalStorage.write('theme', themeName)
        setTheme(themeName)
    }

    const getFonts = () => {
        const a = r.mapObjIndexed((value, _) => value.font, themes.data)
        const fonts = r.values(a)
        return fonts
    }

    useEffect(() => {
        const localTheme = LocalStorage.read('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.seaWave)
        setThemeLoaded(true)
    }, [])

    return { theme, themeLoaded, setMode, getFonts }
}

export default useTheme;