/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 14:37:28
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-08 16:36:21
 * @FilePath: /my-first-frog/src/openRedPackage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 14:37:28
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-06 19:07:49
 * @FilePath: /my-first-frog/src/openRedPackage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Frog, TextInput, parseEther } from 'frog'
import { abi } from './abi'
import { getUserInfo } from './utils.js';

import { Box, Heading, Text, VStack, vars, Image } from './ui.js'

export const app = new Frog()

app.frame('/', async (c) => {
    const { buttonValue, inputText, status } = c
    const fruit = inputText || buttonValue
    let response = await getUserInfo('4823')
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
                        <div tw="flex flex-col bg-yellow-50 rounded-md border-4 border-solid border-violet-700 w-5/6 opacity-70">
                            <div tw="flex justify-center items-center px-10 py-2 w-full">
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    You can claim this red Package, good luck to you / You have claimed, try to send another one
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
            <Button.Transaction target="/open" action='/openResult'>🧧 Open Red Packet onchain</Button.Transaction>,
            <Button.Reset>⬅️ Back</Button.Reset>,
            // status === 'response' && <Button.Reset>Reset</Button.Reset>,
        ],
    })
})

app.frame('/openResult', (c) => {
  const { transactionId } = c
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Transaction ID: {transactionId}
      </div>
    )
  })
})

app.transaction('/open', (c) => {
    const { inputText } = c
    // Contract transaction response.
    return c.contract({
        abi,
        chainId: 'eip155:10',
        functionName: 'mint',
        args: [69420n],
        to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
        value: parseEther(inputText ? inputText : "")
    })
})