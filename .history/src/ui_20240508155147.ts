/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 18:27:26
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-08 15:50:31
 * @FilePath: /my-first-frog/src/ui.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { colors, createSystem } from 'frog/ui'

export const {
    Box,
    Columns,
    Column,
    Heading,
    HStack,
    Rows,
    Row,
    Spacer,
    Text,
    VStack,
    vars,
    Image,
} = createSystem({
    colors: {
        text: '#000000',
        background: '#ffffff',
        blue: '#0070f3',
        green: '#00ff00',
        red: '#ff0000',
        orange: '#ffaa00',
    },
    fonts: {
        default: [
            {
                // name: 'Gloria Hallelujah',
                name: 'M PLUS Rounded 1c',
                source: 'google',
                weight: 400,
            },
        ],
        madimi: [
            {
                name: 'Madimi One',
                source: 'google',
            },
        ],
    },
})