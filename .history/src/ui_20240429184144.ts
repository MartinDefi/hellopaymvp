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
                name: 'Anton',
                source: 'google',
                weight: 400,
            },
            {
                name: 'Jersey 25',
                source: 'google',
                weight: 600,
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