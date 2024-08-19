import {createTheme, Input} from "@mantine/core";
import classes from "./Input.module.css";

export const inputTheme = createTheme({
    components: {
        Input: Input.extend({
            classNames: {
                input: classes.input,
            },
        }),
    },
});
