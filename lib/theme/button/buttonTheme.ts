import {createTheme, Button} from "@mantine/core";
import classes from "./Button.module.css";

export const buttonTheme = createTheme({
    components: {
        Button: Button.extend({
            classNames: classes,
        }),
    },
});
