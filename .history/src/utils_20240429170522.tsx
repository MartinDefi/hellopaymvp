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