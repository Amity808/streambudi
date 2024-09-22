import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[url("/grid_bg.png")]   text-dust'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
