/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-05-07 14:32:21
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-07 14:36:16
 * @FilePath: /my-first-frog/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const options = {method: 'GET', headers: {Authorization: 'Bearer <token>'}};

fetch('https://api.pinata.cloud/v3/farcaster/users/{fid}', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

export function getUserInfo(fid: string) {
    fetch(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options)
}