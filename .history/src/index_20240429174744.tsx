/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-28 19:16:18
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-04-29 17:40:17
 * @FilePath: /my-first-frog/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { serveStatic } from '@hono/node-server/serve-static'
import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { app as openRedPackage } from './openRedPackage'
import { app as sendRedPackage } from './sendRedRackage'
// import { neynar } from 'frog/hubs'
import Image from 'next/image'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.use('/*', serveStatic({ root: './public' }))

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: <Image
      style={{ objectFit: "cover" }}
      tw="absolute inset-0 w-full h-full flex"
      src="/giphy.gif'}
      layout={'responsive'}
      // height={175}
      // width={175}
      alt={`A cute animal!`}
      unoptimized={true}
    />
    ,
    imageAspectRatio: "1:1",
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button action="/openRedPackage" value="apples">Apples</Button>,
      <Button action="/sendRedPackage" value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.route('/openRedPackage', openRedPackage)
app.route('/sendRedPackage', sendRedPackage)

devtools(app, { serveStatic })
