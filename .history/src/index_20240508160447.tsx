/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-28 19:16:18
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-08 16:04:47
 * @FilePath: /my-first-frog/src/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { serveStatic } from '@hono/node-server/serve-static'
import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { app as openRedPackage } from './openRedPackage'
import { app as sendRedPackage } from './sendRedRackage.jsx'
import { app as checkDetails } from './checkDetails.js'
import "dotenv/config";
import { getUserInfo } from './utils.js';

// import { neynar } from 'frog/hubs'
import { Box, Heading, Text, VStack, vars, Image } from './ui.js'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  ui: { vars }
})

app.use('/*', serveStatic({ root: './public' }))

app.frame('/', async (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  let response = await getUserInfo('4823');
  return c.res({
    image: (
      <Box fontFamily="default">
        <div tw="flex flex-col w-full h-full" style={{
          backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
        }}>
          <img
                style={{ objectFit: "cover" }}
                tw="absolute inset-0 w-full h-full flex"
                src="/redpackagebg1.png"
            />
          <div tw="flex justify-between items-center p-10 h-1/3">
            
          </div>
          
          <div tw="flex w-full justify-center items-center my-2">
            <div tw="flex pr-2" style={{ fontFamily: "'Gloria Hallelujah', monospace", fontSize: 30, fontWeight: 700, color: '#000' }}>
              Send by 
            </div>
            <Image
                borderRadius="48"
                height="48"
                width="48"
                src={response.pfp_url}
              />
            <div tw="flex pl-2" style={{ fontFamily: "'Gloria Hallelujah', monospace", fontSize: 30, fontWeight: 700, color: '#000' }}>
              {response.display_name}
            </div>
          </div>
          <div tw="flex flex-col w-full justify-center items-center h-1/4 my-5">
            <div tw="flex flex-col bg-yellow-50 rounded-md border-4 border-solid border-violet-500 w-5/6 opacity-70">
              <div tw="flex justify-between items-center px-10 py-2 w-full">
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  Red Packge Type:
                </div>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  Lucky Money
                </div>
              </div>
              <div tw="flex justify-between items-center px-10 py-2 w-full">
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  Lucky Money Balance:
                </div>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  100 USDT
                </div>
              </div>
              <div tw="flex justify-between items-center px-10 py-2 w-full">
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  Remain Chance:
                </div>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  9/10
                </div>
              </div>
              <div tw="flex justify-between items-center px-10 py-2 w-full">
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  Remain Balance:
                </div>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                  23 USDT
                </div>
              </div>
            </div>
          </div>
          <div tw="flex w-full justify-center h-1/5 items-center" style={{ fontSize: 30, fontWeight: 700, color: '#000' }}>Follow HelloPay’s Farcaster Bro!</div>
        </div>

      </Box>

    ),
    imageAspectRatio: "1:1",
    imageOptions: {
      width: 600,
      height: 600
    },
    intents: [
      // <TextInput placeholder="Enter custom fruit..1." />,
      <Button action="/openRedPackage" value="apples">🧧 Open Red Packet</Button>,
      <Button action="/sendRedPackage" value="oranges">🧧 Send Another Red Packet</Button>,
      <Button action="/checkDetails" value="oranges">Check Details</Button>,
      <Button.Link href="https://google.com">Join $HP Airdrop 1</Button.Link>,
      // status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

app.route('/openRedPackage', openRedPackage)
app.route('/sendRedPackage', sendRedPackage)
app.route('/checkDetails', checkDetails)

devtools(app, { serveStatic })
