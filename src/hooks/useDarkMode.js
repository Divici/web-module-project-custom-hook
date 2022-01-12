import { useState } from "react";

const useDarkMode = (initValue) => {
    const [darkMode, setDarkmode] = useState(initValue);

    return [darkMode, setDarkMode];
}

export default useDarkMode;