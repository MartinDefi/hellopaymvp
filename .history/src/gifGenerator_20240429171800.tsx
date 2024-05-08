/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 17:16:12
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-04-29 17:16:18
 * @FilePath: /my-first-frog/src/gifGenerator.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

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