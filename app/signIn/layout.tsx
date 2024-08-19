import {Center, Container} from "@mantine/core";

export default function SignInLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Center>
            <Container miw={500}>
                {children}
            </Container>
        </Center>
    );
}
