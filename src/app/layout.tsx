import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='sripwoud' />
        <link rel='icon' href='/icon.png' type='image/png' sizes="32x32" />
        <title>sripwoud</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
