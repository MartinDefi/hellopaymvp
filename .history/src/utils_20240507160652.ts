import "dotenv/config";

const options = {method: 'GET', headers: {Authorization: `Bearer ${process.env.PINNATA_JWT}`}};

export async function getUserInfo(fid: string) {
    let response = await fetch(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options)
    console.log(response)
}