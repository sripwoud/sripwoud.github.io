'use client'
import { DynamicTerminal, Header } from '@components'
import { Bubble } from '@typebot.io/nextjs'

export default function Home() {
  return (
    <>
      <Header />
      <DynamicTerminal />
      <Bubble
        theme={{
          button: {
            backgroundColor: '#120548',
            customIconSrc:
              'https://s3.typebot.io/public/workspaces/clsed94k70007c5hfek5smg2e/typebots/clsegah0400048is6i4mww1i2/bubble-icon?v=1707480572075',
          },
        }}
        typebot='sripwoud-contact-form'
      />
    </>
  )
}
