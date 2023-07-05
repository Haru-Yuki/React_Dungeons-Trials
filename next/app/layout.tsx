import './styles/global.scss';

export const metadata = {
    title: 'Duntri XIV'
}

export default function RootLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
