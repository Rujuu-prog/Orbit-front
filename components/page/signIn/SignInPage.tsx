'use client'
import { Card, Title, Center, Space } from '@mantine/core';
import PasswordInput from "@/components/input/password/PasswordInput";
import DefaultInput from "@/components/input/default/DefaultInput";
import DefaultButton from "@/components/button/default/defaultButton";
import useSWRMutation from 'swr/mutation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// axiosを使ったfetcher関数
async function fetcher(url: string, { arg }: { arg: { username: string; password: string } }) {
    try{
        const response = await axios.post(url, arg);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; // ここでエラーを投げることで、handleSignInでキャッチできる
    }
}

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // エラーメッセージ用のstate
    const router = useRouter();

    const { trigger, isMutating } = useSWRMutation('/api/auth', fetcher);

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await trigger({ username, password });
            // サインイン成功時に/todoにリダイレクト
            router.push('/todo');
        } catch (err: any) {  // TypeScriptでエラーをキャッチする際は、型アサーションを使うことができます
            console.error('Sign in failed:', err);
            if (err.response && err.response.data) {
                setErrorMessage(err.response.data.error || 'Sign-in failed');
            } else {
                setErrorMessage('An unexpected error occurred');
            }
        }
    };

    return (
        <Card shadow="sm" padding="xl" mt="xl" radius="md" withBorder>
            <Center>
                <Title order={1}>Sign In</Title>
            </Center>
            <form onSubmit={handleSignIn}>
                <DefaultInput
                    label="Username"
                    placeholder="Your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Space h="md" />
                <PasswordInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Space h="md" />
                <DefaultButton type="submit" disabled={isMutating}>
                    {isMutating ? 'Signing in...' : 'Sign In'}
                </DefaultButton>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>Error: {errorMessage}</p>}
        </Card>
    );
}
