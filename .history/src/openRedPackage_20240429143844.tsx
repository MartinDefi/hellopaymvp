/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-29 14:37:28
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-04-29 14:38:44
 * @FilePath: /my-first-frog/src/openRedPackage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Frog } from 'frog'
 
export const app = new Frog()
 
app.frame('/', (c) => {
  return c.res({/* ... */})
})