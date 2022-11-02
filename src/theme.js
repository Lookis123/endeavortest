import { extendTheme } from "@chakra-ui/theme-utils";

const theme = {
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles:{
        global:{
            body:{
                margin: 0,
                padding:0,
                "box-sizing": "border-box",

            },
        },
    },
};

export default extendTheme(theme);