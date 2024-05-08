/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-28 19:16:18
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-06 16:04:01
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
      <Box fontFamily="default">
        <div tw="flex flex-col w-full h-full" style={{
          backgroundImage: 'linear-gradient(to bottom, #A955F5, #EA489B)',
        }}>
          <div tw="flex justify-between items-center p-10 h-1/4">
            <div style={{ fontFamily: "'Gloria Hallelujah', monospace", fontSize: 30, fontWeight: 700, color: '#fff' }}>Crypto Red Package</div>
            <div tw="flex">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#fff" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg> */}
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="200.000000pt" height="40.000000pt" viewBox="0 0 1627.000000 321.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,307.000000) scale(0.100000,-0.100000)"
                  fill="#fff" stroke="none">
                  <path d="M410 3034 c-136 -29 -265 -123 -337 -245 -18 -30 -42 -91 -53 -135
                -20 -78 -20 -104 -18 -1070 l3 -989 23 -65 c84 -237 321 -384 561 -350 207 29
                362 158 432 360 21 61 23 85 27 368 l4 302 184 0 184 0 0 -277 c0 -311 8 -370
                61 -474 39 -77 144 -186 214 -222 174 -88 376 -80 531 22 107 70 178 164 217
                286 l22 70 0 995 0 995 -22 70 c-42 134 -142 254 -263 315 -255 129 -563 30
                -695 -222 -57 -108 -65 -164 -65 -490 l0 -288 -184 0 -184 0 -4 313 c-4 285
                -7 318 -26 378 -45 136 -146 252 -276 314 -114 54 -213 66 -336 39z m185 -379
                l25 -24 0 -506 0 -506 523 1 c469 2 527 0 572 -15 155 -54 258 -160 306 -317
                17 -56 19 -97 19 -391 0 -335 -2 -356 -39 -384 -27 -21 -85 -16 -109 10 -21
                22 -21 31 -24 377 l-3 355 -25 49 c-14 27 -46 68 -72 91 -85 76 -77 75 -645
                75 l-503 0 0 -462 c0 -460 0 -462 -22 -485 -28 -30 -89 -32 -118 -3 -20 20
                -20 33 -20 1065 l0 1046 25 24 c15 16 36 25 55 25 19 0 40 -9 55 -25z"/>
                  <path d="M3004 2406 c-39 -17 -71 -58 -84 -107 -7 -25 -10 -295 -8 -781 3
                -729 3 -744 24 -778 11 -19 36 -45 55 -58 29 -20 44 -23 96 -20 75 5 109 26
                141 88 21 43 22 52 22 360 0 173 4 321 8 328 7 9 89 12 378 10 l369 -3 5 -335
                c5 -315 6 -337 26 -370 11 -19 36 -45 55 -58 29 -20 44 -23 96 -20 75 5 109
                26 141 89 l22 44 -2 755 c-3 734 -4 756 -23 789 -35 59 -67 76 -145 76 -78 0
                -110 -17 -145 -76 -19 -32 -20 -55 -23 -327 l-3 -292 -377 2 -377 3 -5 290
                c-5 267 -7 293 -25 324 -31 53 -67 74 -132 78 -35 2 -70 -2 -89 -11z"/>
                  <path d="M6415 2406 c-38 -17 -60 -41 -80 -89 -13 -32 -15 -131 -15 -760 0
                -757 1 -767 44 -816 45 -51 50 -51 577 -51 543 0 541 0 580 64 39 64 18 146
                -48 188 -38 23 -39 23 -425 26 l-387 3 -3 668 -3 667 -27 41 c-14 22 -42 47
                -61 56 -42 20 -110 21 -152 3z"/>
                  <path d="M7850 2398 c-51 -35 -70 -68 -81 -138 -6 -41 -9 -324 -7 -750 3 -675
                3 -686 24 -731 17 -36 32 -51 66 -68 43 -21 54 -21 531 -21 538 0 539 0 577
                62 40 67 16 158 -52 195 -30 16 -70 18 -420 21 l-387 3 -3 667 c-3 652 -3 668
                -24 702 -46 79 -152 106 -224 58z"/>
                  <path d="M9797 2410 c-387 -70 -615 -331 -659 -756 -21 -203 13 -407 99 -584
                77 -161 235 -300 409 -361 192 -67 466 -67 658 0 301 106 484 385 503 767 15
                307 -67 557 -237 726 -65 64 -95 85 -182 126 -56 28 -132 58 -168 67 -75 19
                -346 29 -423 15z m264 -270 c93 -18 184 -67 245 -133 64 -69 95 -127 126 -234
                30 -103 33 -351 5 -453 -41 -154 -136 -283 -249 -337 -238 -116 -507 -33 -626
                194 -115 219 -102 588 27 776 103 150 285 222 472 187z"/>
                  <path d="M13288 2410 c-77 -23 -126 -87 -189 -249 -23 -59 -120 -304 -216
                -546 -266 -670 -294 -744 -295 -795 -2 -93 56 -152 158 -158 56 -4 63 -2 96
                27 36 31 59 80 145 306 l39 100 348 0 348 0 57 -145 c76 -192 105 -247 144
                -270 66 -41 173 -17 222 48 16 21 20 42 20 97 -1 67 -8 87 -144 420 -79 193
                -206 504 -282 693 -76 189 -152 363 -169 387 -41 60 -114 95 -194 94 -34 0
                -73 -4 -88 -9z m187 -635 c53 -143 109 -295 125 -337 15 -42 26 -79 22 -82 -9
                -10 -490 -7 -497 3 -7 13 238 692 247 683 4 -4 51 -125 103 -267z"/>
                  <path d="M14367 2398 c-48 -28 -82 -94 -72 -140 15 -69 109 -226 404 -673
                l106 -160 5 -320 c5 -319 5 -320 30 -364 31 -54 78 -81 143 -81 69 0 113 24
                145 79 l27 46 5 320 5 320 45 65 c87 124 417 635 445 687 33 64 36 127 9 174
                -49 85 -191 92 -253 13 -12 -15 -110 -169 -217 -341 -107 -172 -198 -313 -202
                -313 -4 0 -88 131 -187 292 -194 314 -242 385 -277 405 -37 20 -118 16 -161
                -9z"/>
                  <path d="M4834 2379 c-46 -13 -91 -69 -99 -121 -3 -24 -5 -363 -3 -755 3 -701
                3 -712 24 -739 11 -15 33 -37 48 -48 27 -21 40 -21 582 -24 493 -2 559 -1 589
                14 46 22 69 59 69 115 0 59 -23 95 -77 120 -39 17 -72 19 -469 19 l-428 0 0
                245 0 245 383 1 c268 0 392 4 417 12 82 29 105 137 41 201 l-31 31 -403 5
                -402 5 -3 212 -2 212 432 3 433 3 32 23 c66 47 66 157 0 206 -28 21 -38 21
                -565 23 -305 1 -551 -3 -568 -8z"/>
                  <path d="M11223 2379 c-44 -13 -90 -62 -103 -109 -7 -26 -10 -282 -8 -767 3
                -707 4 -729 23 -762 32 -54 67 -75 138 -79 52 -3 67 0 96 20 19 13 44 39 55
                58 20 32 21 56 26 320 l5 285 230 7 c262 7 353 22 463 73 180 85 264 229 264
                454 0 245 -106 404 -318 478 l-79 27 -380 3 c-222 1 -393 -2 -412 -8z m709
                -281 c93 -43 134 -116 132 -234 -3 -110 -55 -187 -152 -225 -51 -20 -80 -23
                -259 -27 l-203 -4 0 262 0 262 213 -4 c205 -3 214 -4 269 -30z"/>
                </g>
              </svg>
            </div>
          </div>
          <div tw="flex flex-col w-full justify-center h-1/4 bg-yellow-50">
            {/* <img
                style={{ objectFit: "cover" }}
                tw="absolute inset-0 w-full h-full flex"
                src="/red.png"
            /> */}
          </div>
          <div tw="flex flex-col w-full justify-center align-center mx-5 h-1/4 bg-yellow-50  rounded-md border-2 border-double border-lime-500">
            <div
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
                Remain Amount:
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
      <TextInput placeholder="Enter custom fruit..1." />,
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
