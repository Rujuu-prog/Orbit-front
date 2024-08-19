import {IconCircleDashed} from "@tabler/icons-react";
import {rem, ThemeIcon} from "@mantine/core";

export default function PendingIcon() {
    return (
        <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
    );
}
