'use client';
import {MantineProvider, Button} from "@mantine/core";
import {buttonTheme} from "@/lib/theme/button/buttonTheme";
import React from "react";

interface Props {
    children: React.ReactNode;
    size?: string;
    fullWidth?: boolean;
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
    disabled?: boolean;
}

export default function DefaultButton(props: Props) {
    const { children, size, fullWidth, type, onClick, disabled } = props;
    return (
        <MantineProvider theme={buttonTheme}>
            <Button variant="primary" size={size} fullWidth={fullWidth} type={type} onClick={onClick} disabled={disabled}>
                {children}
            </Button>
        </MantineProvider>
    );
}
