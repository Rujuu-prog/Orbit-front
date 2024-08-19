'use client';
import { PasswordInput as PasswordInputMantine, Text, Group, Anchor, MantineProvider } from '@mantine/core';
import { inputTheme } from "@/lib/theme/input/inputTheme";
import React from "react";

interface PasswordInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ value, onChange }: PasswordInputProps) {
    return (
        <MantineProvider theme={inputTheme}>
            <Group justify="space-between" mb={5}>
                <Text component="label" htmlFor="your-password" size="sm" fw={500}>
                    Password
                </Text>
                {/*TODO: passwordリセット機能を追加する*/}
                <Anchor href="#" onClick={(event) => event.preventDefault()} pt={2} fw={500} fz="xs">
                    Forgot your password?
                </Anchor>
            </Group>
            <PasswordInputMantine
                placeholder="Your password"
                id="your-password"
                value={value}
                onChange={onChange ? (e) => onChange(e) : undefined}
            />
        </MantineProvider>
    );
}
