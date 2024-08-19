'use client';
import { Input, MantineProvider } from "@mantine/core";
import { inputTheme } from "@/lib/theme/input/inputTheme";

interface Props {
    label?: string;
    description?: string;
    error?: string;
    size?: string;
    withAsterisk?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DefaultInput(props: Props) {
    const { label, description, error, size, withAsterisk, placeholder, value, onChange } = props;

    return (
        <MantineProvider theme={inputTheme}>
            <Input.Wrapper
                label={label}
                withAsterisk={withAsterisk}
                description={description}
                error={error}
                size={size}
            >
                <Input
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange ? onChange(e) : undefined}
                />
            </Input.Wrapper>
        </MantineProvider>
    );
}
