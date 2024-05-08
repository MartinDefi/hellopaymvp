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