/*
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-05-07 16:06:44
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-07 18:31:52
 * @FilePath: /my-first-frog/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

const options = {method: 'GET', headers: {Authorization: `Bearer ${import.meta.env.PINNATA_JWT}`}};

export async function getUserInfo(fid: string) {
    let response = await axios.get(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options)
    return response.data.data
}