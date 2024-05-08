/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 14:37:28
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-07 11:44:56
 * @FilePath: /my-first-frog/src/openRedPackage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Frog, TextInput } from 'frog'
import { Box, Heading, Text, VStack, vars, Image } from './ui.js'

export const app = new Frog()

app.frame('/', (c) => {
    const { buttonValue, inputText, status } = c
    const fruit = inputText || buttonValue
    return c.res({
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    src/index.tsx
                    <div tw="flex flex-col w-full justify-center items-center h-1/4 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md border-8 border-solid border-lime-500 w-5/6">
                            <div tw="flex justify-center items-center px-10 py-2 w-full">
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Top 3 Claimers
                                </div>
                            </div>
                            <div tw="flex justify-between items-center px-10 py-2 w-full">
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Red Packge Type:
                                </div>
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    31 USDT
                                </div>
                            </div>
                            <div tw="flex justify-between items-center px-10 py-2 w-full">
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Red Packge Type:
                                </div>
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    26 USDT
                                </div>
                            </div>
                            <div tw="flex justify-between items-center px-10 py-2 w-full">
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Red Packge Type:
                                </div>
                                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    13 USDT
                                </div>
                            </div>
                        </div>
                    </div>
                    <div tw="flex w-full justify-center h-1/4 items-center" style={{ fontSize: 30, fontWeight: 700, color: '#feff00' }}>Follow HelloPay’s Farcaster Bro!</div>
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
            <Button.Link href="https://google.com">Check more info</Button.Link>,
            <Button.Reset>⬅️ Back</Button.Reset>,
            // status === 'response' && <Button.Reset>Reset</Button.Reset>,
        ],
    })
})