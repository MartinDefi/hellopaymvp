<!--
 * @Author: depointhomepage web3mario@proton.me
 * @Date: 2024-04-28 19:16:18
 * @LastEditors: depointhomepage web3mario@proton.me
 * @LastEditTime: 2024-05-07 16:04:38
 * @FilePath: /my-first-frog/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
API Key: 0cf3e861ce065c7db50e
 API Secret: 290b397ac6b44ca88e7b40f02f2e7a48a96109c353bd47aaee39ae34dd0cfc3c
 JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZTk5MDEzNy1lN2E5LTQwMGEtOTE1MS04MWNiNDMwMDc3YzciLCJlbWFpbCI6ImpheXNvbmRlZmluZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjBjZjNlODYxY2UwNjVjN2RiNTBlIiwic2NvcGVkS2V5U2VjcmV0IjoiMjkwYjM5N2FjNmI0NGNhODhlN2I0MGYwMmYyZTdhNDhhOTYxMDljMzUzYmQ0N2FhZWUzOWFlMzRkZDBjZmMzYyIsImlhdCI6MTcxNTA2MzMwMX0.tf6xqo9JhVLb8KlVt2vJx4YodrJ6oFfqdY5cvShGaeM


import "dotenv/config";

const options = {method: 'GET', headers: {Authorization: `Bearer ${process.env.PINNATA_JWT}`}};

export async function getUserInfo(fid: string) {
    let response = await fetch(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options)
    console.log(response)
}