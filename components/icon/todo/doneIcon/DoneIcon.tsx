import {IconCircleCheck} from "@tabler/icons-react";
import {rem, ThemeIcon} from "@mantine/core";

export default function DoneIcon() {
    return (
        <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
    );
}
