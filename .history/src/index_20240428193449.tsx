import { serveStatic } from '@hono/node-server/serve-static'
import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.use('/*', serveStatic({ root: './public' }))

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: (
      <div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 32,
    fontWeight: 600,
  }}
>
  <div tw="h-full w-full flex items-start justify-start bg-white">
    <div tw="flex items-start justify-start h-full">
      <img
        style={{ objectFit: "cover" }}
        tw="absolute inset-0 w-full h-full"
        src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=400&q=10&fm=png"
      />
      <div tw="bg-black absolute inset-0 bg-opacity-0"></div>
      <div tw="flex items-center justify-center w-full h-full relative">
        <div tw="text-[80px] text-white font-black text-center mx-20">
          Test
        </div>
      </div>
    </div>
  </div>
</div>

    ),
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button value="apples">Apples</Button>,
      <Button value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

devtools(app, { serveStatic })
