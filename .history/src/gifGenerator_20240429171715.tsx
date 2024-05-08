/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 17:16:12
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-04-29 17:16:18
 * @FilePath: /my-first-frog/src/gifGenerator.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Frog, TextInput } from 'frog'

export const EMPTY_FRAME_160_144: number[] = new Array(160 * 144)
  .fill([0, 0, 0, 255])
  .flat();

 public async generateGif() {
    const start = Date.now();

    // Create a GIFEncoder instance.
    const encoder = new GIFEncoder(160, 160); // Change the dimensions as needed.
    encoder.start(); // order is important
    encoder.setDelay(1000 / 15); // 30 FPS
    encoder.setQuality(10);
    encoder.setRepeat(0);
    // for chat don't repeat

    for (let i = 0; i < frameRenderCount; i++) {
      const rgbaArray: number[] = structuredClone(EMPTY_FRAME_160_144);
      let j = 0;
      for (let i = 0; i < screen.length; i++) {
        // you would probably need to add your gif data here
      }
      const img = Buffer.from(rgbaArray);
      encoder.addFrame(img as any);
    }

    const end = Date.now();
    console.log(`Rendered ${frameRenderCount} frames in ${end - start}ms`);

    encoder.finish();
    const buffer = encoder.out.getData();
    return buffer;
  }
  
export const app = new Frog({
    // Supply a Hub to enable frame verification.
    // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  })

app.hono.get('/stream/:id/:key', async (c) => {
    const id = Number(c.req.param('id'));
    const key = c.req.param('key');
    const gif = await GBA.generateGif(id, key as keyof typeof ServerBoy.KEYMAP);
    const resized = await sharp(gif, { animated: true })
      .resize(160, 160)
      .toBuffer();
  
    return new Response(resized, {
      headers: {
        'Content-Type': 'image/gif',
        'Cache-Control': 'no-store',
      },
    });
  });