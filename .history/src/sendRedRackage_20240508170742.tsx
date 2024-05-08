/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 14:37:28
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-08 17:07:42
 * @FilePath: /my-first-frog/src/openRedPackage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Frog, TextInput, parseEther } from 'frog'
import { Box, Heading, Text, VStack, vars, Image } from './ui.js'
import { abi } from './abi.js'

type State = {
    type: string,
    chainId: string,
    tokenAddr: string,
    balance: string,
    amount: string,
    memo: string
}

export const app = new Frog<{ State: State }>({
    ui: { vars },
    initialState: {
        type: '',
        chainId: '',
        tokenAddr: '',
        balance: '',
        amount: '',
        memo: ''
    }
})

app.frame('/', (c) => {
    return c.res({
        action: '/step2',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            // <TextInput placeholder="Enter custom fruit..." />,
            <Button value="1">Lucky Money Red Package</Button>,
            <Button value="2">Common Red Package</Button>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})


app.frame('/step2', (c) => {
    const { buttonValue, deriveState } = c
    const state = deriveState(previousState => {
        previousState.type = buttonValue ? buttonValue : '0'
    })
    
    return c.res({
        action: '/step3',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            <TextInput placeholder="Input target chainId." />,
            <Button value="0x1">ETH Mainnet</Button>,
            <Button value="0x8443">Base</Button>,
            <Button value="custom">➡️Next Step</Button>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})

app.frame('/step3', (c) => {
    const { buttonValue, inputText, deriveState } = c
    const state = deriveState(previousState => {
        if (buttonValue === "custom") {
            previousState.chainId = inputText ? inputText : ''
        } else {
            previousState.chainId = buttonValue ? buttonValue : '0'
        }
    })

    return c.res({
        action: '/step4',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            <TextInput placeholder="Input target token address." />,
            <Button value="0x00000000000001">$USDT</Button>,
            <Button value="0x00000000000002">$DEGEN</Button>,
            <Button value="custom">➡️Next Step</Button>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})

app.frame('/step4', (c) => {
    const { buttonValue, inputText, deriveState } = c
    const state = deriveState(previousState => {
        if (buttonValue === "custom") {
            previousState.tokenAddr = inputText ? inputText : ''
        } else {
            previousState.tokenAddr = buttonValue ? buttonValue : '0'
        }
    })

    return c.res({
        action: '/step5',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            <TextInput placeholder="Input red package's balance." />,
            <Button value="1000">$1,000</Button>,
            <Button value="1000000">$1,000,000</Button>,
            <Button value="custom">➡️Next Step</Button>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})


app.frame('/step5', (c) => {
    const { buttonValue, inputText, deriveState } = c
    const state = deriveState(previousState => {
        if (buttonValue === "custom") {
            previousState.balance = inputText ? inputText : ''
        } else {
            previousState.balance = buttonValue ? buttonValue : '0'
        }
    })
    return c.res({
        action: '/step6',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            <TextInput placeholder="Input red package's chance." />,
            <Button value="20">20</Button>,
            <Button value="100">100</Button>,
            <Button value="custom">➡️Next Step</Button>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})

app.frame('/step6', (c) => {
    const { buttonValue, inputText, deriveState } = c
    const state = deriveState(previousState => {
        if (buttonValue === "custom") {
            previousState.amount = inputText ? inputText : ''
        } else {
            previousState.amount = buttonValue ? buttonValue : '0'
        }
    })
    return c.res({
        action: '/step7',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            <TextInput placeholder="Input memo..." />,
            <Button>➡️Next Step</Button>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})

app.frame('/step7', (c) => {
    const { inputText, deriveState } = c
    const state = deriveState(previousState => {
        previousState.memo = inputText ? inputText : ''
    })

    return c.res({
        action: '/step8',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            <Button.Transaction target="/approve">➡️ Approve the 100 $DEGEN spend</Button.Transaction>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button value="oranges" action='/step8'>➡️Next Step</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})

app.frame('/step8', (c) => {
    const { buttonValue, inputText, status } = c
    const fruit = inputText || buttonValue
    return c.res({
        action: '/success',
        image: (
            <Box fontFamily="default">
                <div tw="flex flex-col w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to bottom, #360940, #F05F57)',
                }}>
                    <img
                        style={{ objectFit: "cover" }}
                        tw="absolute inset-0 w-full h-full flex"
                        src="/redpackagebg2.png"
                    />

                    <div tw="flex justify-between items-center p-10 h-1/3">

                    </div>
                    <div tw="flex flex-col w-full justify-center items-center h-1/3 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md w-5/6 opacity-70">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex p-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 1. Select the Red Package type
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 2. Select target chain
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 3. Select the token
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 4. Set the red package’s balance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 5. Set the red package’s Chance
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 6. Set the red package’s memo
                                </div>
                                <div tw="flex py-2" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 7. Approve the 100 $DEGEN spend
                                </div>
                                <div tw="flex p-2 rounded-full border-4 border-solid border-violet-700 " style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Step 8. Send the red package
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        ),
        imageAspectRatio: "1:1",
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            <Button.Transaction target="/send">➡️ Send the red package</Button.Transaction>,
            <Button value="oranges" action='/success'>➡️Next Step</Button>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})


app.frame('/success', (c) => {
    const { deriveState } = c
    const state = deriveState()
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
                
                    <div tw="flex flex-col w-full justify-center items-center h-1/4 my-5">
                        <div tw="flex flex-col bg-yellow-50 rounded-md border-4 border-solid border-lime-500 w-5/6">
                            <div tw="flex flex-col justify-center items-center px-10 py-2 w-full">
                                <div tw="flex" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    Send Red Package Succeed! Share to let more followers kown 
                                </div>
                                <div  tw="flex" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    {state.type}
                                </div>
                                <div  tw="flex" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    {state.chainId}
                                </div>
                                <div  tw="flex" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    {state.tokenAddr}
                                </div>
                                <div  tw="flex" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    {state.balance}
                                </div>
                                <div  tw="flex" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    {state.amount}
                                </div>
                                <div  tw="flex" style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 400, color: '#000' }}>
                                    {state.memo}
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
            <Button.Link href="https://warpcast.com/~/compose?text=Check%20your%20%24DEGEN%20Stats.%20Frame%20by%20%40nikolaiii.%20Tip%20him%20here%3A%20https%3A%2F%2Fwarpcast.com%2Fnikolaiii%2F0xfbed5ab9&embeds%5B%5D=https%3A%2F%2Faltumbase.com%2Fdegen%2F467190%2FhiFv3taFcV%0A">
                Share The Red Package
            </Button.Link>,
            // <Button value="bananas">Exclusive Red Package</Button>,
            <Button.Reset>⬅️ Back</Button.Reset>,
        ],
    })
})

app.transaction('/approve', (c) => {
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

app.transaction('/send', (c) => {
    const { previousState } = c
    // Contract transaction response.
    console.log(previousState)
    return c.contract({
        abi,
        chainId: 'eip155:10',
        functionName: 'mint',
        args: [69420n],
        to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
        value: parseEther("0")
    })
})
