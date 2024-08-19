export default function TodoLayout({
        children,
    }: Readonly<{
        children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Todo</h1>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
                {children}
            </main>
        </div>
    );
}
