/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-28 19:16:18
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-04-29 19:06:09
 * @FilePath: /my-first-frog/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { serveStatic } from '@hono/node-server/serve-static'
import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { app as openRedPackage } from './openRedPackage'
import { app as sendRedPackage } from './sendRedRackage'
// import { neynar } from 'frog/hubs'
import { Box, Heading, Text, VStack, vars } from './ui.js'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  ui: { vars }
})

app.use('/*', serveStatic({ root: './public' }))

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: (
      <Box fontFamily="
madimi">


</Box>
      
    ),
    imageAspectRatio: "1:1",
    imageOptions: {
      width: 600,
      height: 600
    },
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button action="/openRedPackage" value="apples">🧧 Open Red Packet</Button>,
      <Button action="/sendRedPackage" value="oranges">🧧 Distribute Another Red Packet</Button>,
      <Button value="bananas">Check Details</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.route('/openRedPackage', openRedPackage)
app.route('/sendRedPackage', sendRedPackage)

devtools(app, { serveStatic })
