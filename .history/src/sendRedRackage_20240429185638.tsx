/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 14:37:28
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-04-29 18:56:31
 * @FilePath: /my-first-frog/src/openRedPackage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Frog, TextInput } from 'frog'
import { Box, Heading, Text, VStack, vars } from './ui.js'

export const app = new Frog({ui: { vars }})

app.frame('/', (c) => {
    const { buttonValue, inputText, status } = c
    const fruit = inputText || buttonValue
    return c.res({
        image: (
            <Box
                grow
                alignHorizontal="center"
                backgroundColor="background"
                padding="32"
            >
                <VStack gap="4">
                <Heading>FrogUI 🐸</Heading>
                <Text size="48">
                    Build consistent frame experiences
                </Text>
                </VStack>
            </Box>
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