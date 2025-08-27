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
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta content='sripwoud' name='description' />
        <link href='/icon.png' rel='icon' sizes='32x32' type='image/png' />
        <title>sripwoud</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
