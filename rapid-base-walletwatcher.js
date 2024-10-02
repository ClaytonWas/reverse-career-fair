
global.log = require('../classes/logger')
const { ethers } = require('ethers');
log('hey','success')
// Ethereum provider
const provider = new ethers.providers.JsonRpcProvider('https://base-mainnet.g.alchemy.com/v2/pMkHE79L_C_FAFmsXVtawnhNVLHHIHcu');
// const Discord = require('discord.js');

// Discord bot token
// const { Client, Intents } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });
// const botToken = 'MTEwNTkwNzE3Njc1MDQ2OTIxMQ.G6kvJ0.ElCC1Ag6MMAlxrpaVuxl2oGLKQDR2Qn2NrRGMA';
// client.once('ready', () => {
//   console.log('Discord bot ready.');
// });
// client.login(botToken);
// Define the Discord channel ID where you want to send the messages

// Function to send Discord webhook
const axios = require('axios');

const providerUrl = 'https://base-mainnet.g.alchemy.com/v2/redacted_webhook';
const privateKey = ''; // For non-constant functions

// Function to send Discord webhook
async function sendDiscordWebhook(hookInfo,name,symbol,totalSupply) {
  try {
      const data = hookInfo;
      log(data.erc721)
      const message = {
          embeds: [{
              title: `${data.sender} Minted ${name} ${symbol}`,
              fields: [
                  { name: 'Contract Address', value: `[BASESCAN](https://basescan.org/address/${data.contractAddress}#writeContract)`, inline: true },
                  { name: 'Transaction Hash', value: `[BASESCAN](https://basescan.org/tx/${data.transactionHash})`, inline: true },
                  // { name: 'Block Number', value: data.blockNumber.toString(), inline: true },
                  { name: 'Zora Link', value: data.zoraLink || 'N/A', inline: true },
                  { name: 'OpenSea Link', value: `[OPENSEA](https://opensea.io/assets/base/${data.contractAddress}/1) | [OPENSEA 2](https://opensea.io/assets/base/${data.contractAddress2}/1)` || 'N/A', inline: true },
                  { name: 'Token ID', value: `[#${data.tokenID.toString()}](https://opensea.io/assets/base/${data.contractAddress}/${data.tokenID.toString()}) | [#${data.tokenID.toString()}](https://opensea.io/assets/base/${data.contractAddress2}/${data.tokenID.toString()})` || 'N/A', inline: true },
                  // { name: 'Token Number', value: `[#${data.tokenNumber}](https://opensea.io/assets/base/${data.contractAddress}/${data.tokenNumber})` || 'N/A', inline: true },
                  { name: 'Number of Tokens', value: data.numberOfTokens || 'N/A', inline: true },
                  // { name: 'ERC Type', value: data.erc721 ? "721" : "1155", inline: true }, // Add ERC Type field
                  // { name: 'Total Supply', value: totalSupply || 'N/A', inline: true },

              ]
          }],
          footer: {
            text: `Block: ${data.blockNumber.toString()}`,
        },
      };
      log(JSON.stringify(message),'success')
      log(JSON.stringify(message),'success')
      const response = await axios.post("redacted_webhook", message);
      if (response.status !== 200) {
          console.error('Failed to send Discord webhook:', response.statusText);
      } else {
          console.log('Discord webhook sent successfully.');
      }
  } catch (error) {
      console.error('Error sending Discord webhook:', error.message);
  }
}

const walletsToWatch = [
  {
    "name": "0x71e4...d59c (4/8)",
    "wallet": "0x71e425372ec0cebe47641595d659bf6fcf28d59c"
  },
  {
    "name": "0x94d3...b2d2 (4/8)",
    "wallet": "0x94d39c61c681d1255e32ff2c2f5323536287b2d2"
  },
  {
    "name": "0xee4c...bec8 (5/8)",
    "wallet": "0xee4c26da3f63a53f8101c922edc404d0a6a5bec8"
  },
  {
    "name": "0x65a0...4a05 (4/8)",
    "wallet": "0x65a05d8c6888879adf72c8798b56a0302a0f4a05"
  },
  {
    "name": "0x59c5...4d9a (5/8)",
    "wallet": "0x59c5113862542b0bf12760e0f620c89c217b4d9a"
  },
  {
    "name": "0xe654...68b8 (5/8)",
    "wallet": "0xe65494a4b20d6d63b7604a8d56c28fc590a368b8"
  },
  {
    "name": "0x31b8...57ca (4/8)",
    "wallet": "0x31b8f26ed95900fcff35878eb61df244049d57ca"
  },
  {
    "name": "0x2ec7...cdac (4/8)",
    "wallet": "0x2ec7b0b01d7c72a31f3834fe4f208c4d04d1cdac"
  },
  {
    "name": "0xc6b8...a7fb (4/8)",
    "wallet": "0xc6b86eb995c72b16b90075fc33cc63f30d4da7fb"
  },
  {
    "name": "0x915b...d6b8 (5/8)",
    "wallet": "0x915b472dfa70c8fe9d074a8c859089c44252d6b8"
  },
  {
    "name": "0x5d9a...9890 (4/8)",
    "wallet": "0x5d9af607e7b383a03f66ac4ce342e33f38a89890"
  },
  {
    "name": "0x30a9...90ea (5/8)",
    "wallet": "0x30a9e2d874283b9f370747dd1128dc9a549e90ea"
  },
  {
    "name": "0x35cc...a186 (5/8)",
    "wallet": "0x35cccc6c6131047664d1ffef1272f33cea08a186"
  },
  {
    "name": "0xf981...fe0b (4/8)",
    "wallet": "0xf9815272c17ade0f5ffcad9a713d67c4848cfe0b"
  },
  {
    "name": "0xaac8...eddb (5/8)",
    "wallet": "0xaac8f24ce086fc5ff5294f369836ab545b95eddb"
  },
  {
    "name": "0xc80d...b985 (5/8)",
    "wallet": "0xc80ded6b332336d71b1413678a6060e5dec6b985"
  },
  {
    "name": "0x4cbe...2354 (4/8)",
    "wallet": "0x4cbeba8844f147d52f6b853babe69b07aabc2354"
  },
  {
    "name": "0x2d27...597e (4/8)",
    "wallet": "0x2d27a4c6d43fedec8d9f6cb49bde18aabb78597e"
  },
  {
    "name": "0xb2ac...c7fd (4/8)",
    "wallet": "0xb2ac2f80bf988a6670af324c503322f34bc5c7fd"
  },
  {
    "name": "0x2d4b...82fc (4/8)",
    "wallet": "0x2d4bcf87b4271b53be6fadf6467db0f73a4882fc"
  },
  {
    "name": "0x6de8...2ef9 (5/8)",
    "wallet": "0x6de8bdd19cd76b89ea2eb1ab6d9b245433652ef9"
  },
  {
    "name": "0x079e...08bc (4/8)",
    "wallet": "0x079e05835adae146e97e72ae4e8c84671c2208bc"
  },
  {
    "name": "0x925a...6069 (4/8)",
    "wallet": "0x925ad46c1b047f9a24535545f83530d3a0db6069"
  },
  {
    "name": "0xb573...8c38 (4/8)",
    "wallet": "0xb573d55bb681b091ca01ef0e78d519ed26238c38"
  },
  {
    "name": "0x2333...1da1 (5/8)",
    "wallet": "0x2333cef87c2120509e3af454f40d00673a041da1"
  },
  {
    "name": "0xd190...d2a6 (4/8)",
    "wallet": "0xd1908da667632fca40b497a06e86cad9705cd2a6"
  },
  {
    "name": "0x53a9...53eb (4/8)",
    "wallet": "0x53a975505f25aea438f8ce196dcb4af5c1c553eb"
  },
  {
    "name": "0x68d4...7fec (5/8)",
    "wallet": "0x68d4de88242c726059d85bd4e095c4a77b6b7fec"
  },
  {
    "name": "0x9b51...6204 (5/8)",
    "wallet": "0x9b51f735d58d6ffeaaec31ed5b5d0ad881db6204"
  },
  {
    "name": "0x0ce0...8bee (4/8)",
    "wallet": "0x0ce02d3a89efa218cd0f486514cae77d74b88bee"
  },
  {
    "name": "0x9782...f90b (4/8)",
    "wallet": "0x978259e821b98060290cf4269334843f8feff90b"
  },
  {
    "name": "0xe6a1...3e78 (4/8)",
    "wallet": "0xe6a104119892529e6d65481f3378b1a51cac3e78"
  },
  {
    "name": "0xa921...d25c (4/8)",
    "wallet": "0xa92124622bba8fa904e3e9095e4fd32d3092d25c"
  },
  {
    "name": "0x0a91...22e9 (5/8)",
    "wallet": "0x0a91a3894e74bc20c31e4224a979fbd78f2f22e9"
  },
  {
    "name": "0x3ce0...c83b (4/8)",
    "wallet": "0x3ce058dd5a0663e1467c78283b6c2d8b6d63c83b"
  },
  {
    "name": "0xebbb...2e51 (4/8)",
    "wallet": "0xebbbbb20f4546a279bdb5b7693f7120a43482e51"
  },
  {
    "name": "0x45ac...f8ca (5/8)",
    "wallet": "0x45ac84425dab65f51f25075804969a3cdf2bf8ca"
  },
  {
    "name": "0x9973...b0fc (4/8)",
    "wallet": "0x99732e448bb615dbef5cf529da864d0cb51eb0fc"
  },
  {
    "name": "0x38fc...0610 (4/8)",
    "wallet": "0x38fccc4ed695dab2033f62d3df1ed315fe700610"
  },
  {
    "name": "0x945f...c828 (4/8)",
    "wallet": "0x945f6c41516224ffef1f5c24f108b6ddd7e0c828"
  },
  {
    "name": "0x5c53...ccd7 (4/8)",
    "wallet": "0x5c530467f271351d028a91ebceae128d3f43ccd7"
  },
  {
    "name": "0x4fb5...e548 (6/8)",
    "wallet": "0x4fb5ae963c4fda03d98fc3ff8ff287fdf49de548"
  },
  {
    "name": "0xe7e4...ba45 (5/8)",
    "wallet": "0xe7e4e9961cfed7df2f3a999255dfae9b2c1eba45"
  },
  {
    "name": "0x4454...7fa7 (4/8)",
    "wallet": "0x44541e9a3098ff4fe8892050dd34a5ec28e27fa7"
  },
  {
    "name": "0xa18d...df9a (4/8)",
    "wallet": "0xa18d38827d1852e55aa79cbb7e5639dbf5d4df9a"
  },
  {
    "name": "0x4429...7a42 (5/8)",
    "wallet": "0x44291dfba28b9ab6f615bf1372fe1c4c09bf7a42"
  },
  {
    "name": "0x691b...fb2d (4/8)",
    "wallet": "0x691bd951aef4a8e54d1d307cd3bfec9c0444fb2d"
  },
  {
    "name": "0x7fdc...087f (4/8)",
    "wallet": "0x7fdcf725a33e5e14fc32be15b747b2c954ba087f"
  },
  {
    "name": "0xd9bc...6b4a (5/8)",
    "wallet": "0xd9bc1fc51b8d8369980505aa96e975da03346b4a"
  },
  {
    "name": "0x77d4...007b (5/8)",
    "wallet": "0x77d4d6f3bf28987c6b5edadb6170bacf47a1007b"
  },
  {
    "name": "0x8553...cb30 (4/8)",
    "wallet": "0x85532a5d1a8a846c3b03d3e15a5809028888cb30"
  },
  {
    "name": "0xb54f...8c80 (4/8)",
    "wallet": "0xb54f920dc2bb3df9d61c95e5f70e7b330efc8c80"
  },
  {
    "name": "0xbce3...ac57 (4/8)",
    "wallet": "0xbce31af175dfc6be46d93665ab2022ec9420ac57"
  },
  {
    "name": "0x8f09...cfd9 (4/8)",
    "wallet": "0x8f09ed2f4421b8b798e245caa907bba67b28cfd9"
  },
  {
    "name": "0xaca2...f4a9 (6/8)",
    "wallet": "0xaca20c63b51d2eaa63b55e7d504415edb08ef4a9"
  },
  {
    "name": "0x7fe8...45de (4/8)",
    "wallet": "0x7fe8b609d43c9162d1318e4db79869eb80f745de"
  },
  {
    "name": "0xb370...2971 (4/8)",
    "wallet": "0xb37048c03387802c35f1a5ee0f84834f9a692971"
  },
  {
    "name": "0x5009...3ee1 (4/8)",
    "wallet": "0x500939ba7f092d229457a03c8a56ef90ff723ee1"
  },
  {
    "name": "0x8bb1...ec62 (4/8)",
    "wallet": "0x8bb1339e930dcf9b64e9a1ce712caad50d88ec62"
  },
  {
    "name": "0xeb7b...75a7 (4/8)",
    "wallet": "0xeb7b16f7ff452e257434a7e796d9fa60e7c575a7"
  },
  {
    "name": "0xcbab...879a (4/8)",
    "wallet": "0xcbab32ae485226730067c8da7d5d032ecb13879a"
  },
  {
    "name": "0xf979...87a7 (4/8)",
    "wallet": "0xf979b298469c2d4ca8117b937efb93506a1787a7"
  },
  {
    "name": "0xf651...729d (4/8)",
    "wallet": "0xf6518ad7786cfcf8238a225e83b1f3a3065d729d"
  },
  {
    "name": "0xb34a...897d (4/8)",
    "wallet": "0xb34a47d81460115608e7d282200c34bd41b2897d"
  },
  {
    "name": "0xd0ab...1157 (5/8)",
    "wallet": "0xd0ab651368836f98dc35f2a6989a3636c8eb1157"
  },
  {
    "name": "0x2bea...f66d (4/8)",
    "wallet": "0x2beae9f24b0e70f070371993acaf31ebec92f66d"
  },
  {
    "name": "0x449c...027f (5/8)",
    "wallet": "0x449cb8074a242636f5f3e44fbd64cbe3a7d2027f"
  },
  {
    "name": "0x1d23...057d (4/8)",
    "wallet": "0x1d23895f8a540affc3397674ab3d7fbbb463057d"
  },
  {
    "name": "0xc42c...386e (4/8)",
    "wallet": "0xc42c700a1c930003d4dafa4525e475a1f086386e"
  },
  {
    "name": "0xbfc7...b026 (6/8)",
    "wallet": "0xbfc7007e1caba61216a6f013d283a93b5c78b026"
  },
  {
    "name": "0xb7cd...69a5 (5/8)",
    "wallet": "0xb7cddcbb750e21ef37835de8d8fa66d595b569a5"
  },
  {
    "name": "0xfc06...6c6f (5/8)",
    "wallet": "0xfc061f651f2d703220421233e1874d6400786c6f"
  },
  {
    "name": "0xd2bb...8e00 (4/8)",
    "wallet": "0xd2bb38ae9f5683e0329a1016408d38aab4a18e00"
  },
  {
    "name": "0x842b...cfad (4/8)",
    "wallet": "0x842baa3c26d0502ce4269b999a40d09f7cb4cfad"
  },
  {
    "name": "0x67a7...a811 (4/8)",
    "wallet": "0x67a79badea1c3648c02116be4357a30e1835a811"
  },
  {
    "name": "0xba8c...2f8e (4/8)",
    "wallet": "0xba8cc8348df7dc5dadb0f3e3628a6cbb0bc62f8e"
  },
  {
    "name": "0x0091...1f9c (5/8)",
    "wallet": "0x00913eaaaccf42b4348dab0d59dc543890941f9c"
  },
  {
    "name": "0xb7ce...c774 (4/8)",
    "wallet": "0xb7ceeae5c4762adff47029312ae32521f8d1c774"
  },
  {
    "name": "0x00a9...8e02 (4/8)",
    "wallet": "0x00a969b5af9c9ecbded435c980923b088a108e02"
  },
  {
    "name": "0x07c5...8ced (4/8)",
    "wallet": "0x07c5c34cfbdc7a1ad5b4e7701ebdff0c9cf08ced"
  },
  {
    "name": "0x3132...de31 (4/8)",
    "wallet": "0x31321ec8bb8ecf06fa79fdb73fc69938a3e4de31"
  },
  {
    "name": "0x3783...7331 (4/8)",
    "wallet": "0x37836ccc67661ec5c700b60a5b33e880d4077331"
  },
  {
    "name": "0x5a69...d9c6 (4/8)",
    "wallet": "0x5a694d1b95efe5101b73801bb15b126277bed9c6"
  },
  {
    "name": "0x1f64...6394 (4/8)",
    "wallet": "0x1f64d02ed888b376173a4f4c531c62dca85c6394"
  },
  {
    "name": "0x8526...a63d (6/8)",
    "wallet": "0x8526e4f21d060ef0ef2e69d2a00392e82eefa63d"
  },
  {
    "name": "0xd8d8...29ec (4/8)",
    "wallet": "0xd8d85a9091460fc84f6cc54cf65f30012e2b29ec"
  },
  {
    "name": "0x3ee0...9af2 (4/8)",
    "wallet": "0x3ee0e0f1e6314e5a205a040e3af3edc1c6519af2"
  },
  {
    "name": "0x65e3...a1fa (4/8)",
    "wallet": "0x65e3d60baee3027959299bf34d23d51f86bda1fa"
  },
  {
    "name": "0x0223...2094 (4/8)",
    "wallet": "0x02233d88eff0ed431834fbf9c8344250a40e2094"
  },
  {
    "name": "0x703a...6759 (4/8)",
    "wallet": "0x703ac96847133154885b3dee937b22a775c46759"
  },
  {
    "name": "0x898a...5ecf (4/8)",
    "wallet": "0x898aa942b969d6c13d196faf144b8dd40e0c5ecf"
  },
  {
    "name": "0x2818...b729 (4/8)",
    "wallet": "0x281853b869501e2a494f6738580cd20ea317b729"
  },
  {
    "name": "0x819d...f39a (4/8)",
    "wallet": "0x819ddd47170d645de9f4e39efb1dc73251e3f39a"
  },
  {
    "name": "0x71cf...bdde (4/8)",
    "wallet": "0x71cfc11b6610183a7b1223cd5110632b60f6bdde"
  },
  {
    "name": "0x2bee...0b44 (4/8)",
    "wallet": "0x2bee1e8f250b1bfffe41155b6de6699787010b44"
  },
  {
    "name": "0x7187...2a86 (4/8)",
    "wallet": "0x7187dce0671e06df94b4b51fe20872843d0c2a86"
  },
  {
    "name": "0x2a6d...c54d (5/8)",
    "wallet": "0x2a6d66c327d20fe6a0788b3cc0ba4da09e0dc54d"
  },
  {
    "name": "0xc77e...246c (4/8)",
    "wallet": "0xc77ec27e6ae82ead54894dffc7d3f3fe3a09246c"
  },
  {
    "name": "0xa649...a483 (4/8)",
    "wallet": "0xa649a7b78071da654e677cd4bb7a55949911a483"
  },
  {
    "name": "0x6e3f...c514 (4/10)",
    "wallet": "0x6e3f8e093fe749398aac60515686fc4fc4bac514"
  },
  {
    "name": "0xc244...900c (3/10)",
    "wallet": "0xc2449fcb81339705d098a8f4e548c086ba98900c"
  },
  {
    "name": "0x93bd...cc96 (3/10)",
    "wallet": "0x93bd72ef7641676a4c72047ff13e9a1cbbb2cc96"
  },
  {
    "name": "0x99f5...203a (3/10)",
    "wallet": "0x99f5d9e4b88403fe3590481198396c910610203a"
  },
  {
    "name": "0xe8be...e992 (3/10)",
    "wallet": "0xe8be3c83eb9b98e8eb2396fdc97d064b4e95e992"
  },
  {
    "name": "0xca5b...4c4c (3/10)",
    "wallet": "0xca5b0bf7d9d23d75fe07226e0c3598ccc9124c4c"
  },
  {
    "name": "0x9350...5f0b (3/10)",
    "wallet": "0x935002727a6ebbcaf01a0039db0e6b1f9c175f0b"
  },
  {
    "name": "0xaa98...86ea (3/10)",
    "wallet": "0xaa982a7d6bf5d396d4a9d77e860394454e3e86ea"
  },
  {
    "name": "0x257f...da90 (3/10)",
    "wallet": "0x257fb2efcc86858ebd5a4d7f8688924d14a8da90"
  },
  {
    "name": "0xf8ad...5125 (3/10)",
    "wallet": "0xf8ad3ade2d9f7d2128756b5d7c3defe567de5125"
  },
  {
    "name": "0x9af9...e5eb (4/10)",
    "wallet": "0x9af939b19a8e6166b12a6ef56b549200cdb3e5eb"
  },
  {
    "name": "0x266b...3039 (3/10)",
    "wallet": "0x266b0fad82daeafbcfdf95b3c71b8c43dc5c3039"
  },
  {
    "name": "0xe80e...de57 (3/10)",
    "wallet": "0xe80ef3e29c4a8de3867260104befb1ae2d88de57"
  },
  {
    "name": "0xbb3f...d85d (4/10)",
    "wallet": "0xbb3f0ca734a32677a2941f77db00cdef1c7dd85d"
  },
  {
    "name": "0x289e...edec (3/10)",
    "wallet": "0x289ef19ca0873fdee3974cd87b7125ed5868edec"
  },
  {
    "name": "0xf871...9f74 (3/10)",
    "wallet": "0xf871584dee6ef58ed46d3cab4e764212eea79f74"
  },
  {
    "name": "0xfcd0...b61b (3/10)",
    "wallet": "0xfcd0d1ce0782ff86e55654ee340f4106600eb61b"
  },
  {
    "name": "0x7bde...8deb (4/10)",
    "wallet": "0x7bde12dec63f3a71c9db6787d04a15402d7f8deb"
  },
  {
    "name": "0xe0e4...32f0 (3/10)",
    "wallet": "0xe0e4ba0030fb1a7675666747dd1343efb8a032f0"
  },
  {
    "name": "0x6eef...a13a (3/10)",
    "wallet": "0x6eefbf0a876442d3b98664efcf3c4b3dab56a13a"
  },
  {
    "name": "0x2125...b67e (3/10)",
    "wallet": "0x212581f9295a987ba85ab2d0e2e68282eb63b67e"
  },
  {
    "name": "0x8029...8dc7 (3/10)",
    "wallet": "0x8029906fd001e4e8816531958fbff060ff918dc7"
  },
  {
    "name": "0xdbcc...fe6e (3/10)",
    "wallet": "0xdbcc6698d4686ee3fba49c2245072460594efe6e"
  },
  {
    "name": "0x7a1c...d6be (3/10)",
    "wallet": "0x7a1cc2c595d487823e4f4af48fde894e2923d6be"
  },
  {
    "name": "0x2eae...2dc8 (3/10)",
    "wallet": "0x2eae339d0c8083404696cb7fbd851f6308172dc8"
  },
  {
    "name": "0x3f1f...2c22 (3/10)",
    "wallet": "0x3f1f8180f1a222480577de390a4f262e66cd2c22"
  },
  {
    "name": "0xbff2...39bf (4/10)",
    "wallet": "0xbff29b6cfd0c6bc845d4f70bdeeb3378a4ad39bf"
  },
  {
    "name": "0x57d4...ec1a (4/10)",
    "wallet": "0x57d4b4ba387f815467029851d9f1f751cedeec1a"
  },
  {
    "name": "0x4e25...b792 (3/10)",
    "wallet": "0x4e258cc6180e73a69bb0ce18621c8901aed3b792"
  },
  {
    "name": "0xa9f5...69ba (3/10)",
    "wallet": "0xa9f5fc8c95e762537764fb5bf7f7e7dbde5f69ba"
  },
  {
    "name": "0x3122...b070 (3/10)",
    "wallet": "0x3122ad759f48cacc373f85d96e45ef7c2191b070"
  },
  {
    "name": "0xaaef...0af7 (3/10)",
    "wallet": "0xaaef5bf79fecdc730fb886009c7ee5ae329a0af7"
  },
  {
    "name": "0x66c0...2f1f (3/10)",
    "wallet": "0x66c0994f4300672cf1243810e4a1c2f57a982f1f"
  },
  {
    "name": "0x2253...d040 (4/10)",
    "wallet": "0x2253ef63addab1fab314e0d5e20116966b52d040"
  },
  {
    "name": "0xc2de...518a (3/10)",
    "wallet": "0xc2de8595ba1dfcaeaae261b590a76b369abf518a"
  },
  {
    "name": "0xa34c...db9f (3/10)",
    "wallet": "0xa34ca669f3546561780842bad1c017a8ceabdb9f"
  },
  {
    "name": "0x52de...11bd (3/10)",
    "wallet": "0x52de83ae00c4c0cd29f0a2692eb4cdbade8511bd"
  },
  {
    "name": "0x5fd8...0559 (4/10)",
    "wallet": "0x5fd8f613be904b065e421f2e2f0fcb1a4f350559"
  },
  {
    "name": "0x14c6...0939 (3/10)",
    "wallet": "0x14c6479c88b2c445d0bdb67185da99e2cc9e0939"
  },
  {
    "name": "0x3245...48ec (3/10)",
    "wallet": "0x32455c517df524f54983bd4905e8ecfcaf2648ec"
  },
  {
    "name": "0x9b24...3faa (4/10)",
    "wallet": "0x9b2440e398f1b15df42f4da654df18adf7493faa"
  },
  {
    "name": "0xc297...572d (3/10)",
    "wallet": "0xc2978441f46a76c60e0cd59e986498b75a40572d"
  },
  {
    "name": "0xfd6b...62b1 (3/10)",
    "wallet": "0xfd6bf4c5379cf4539e6c9691e1c3827987f462b1"
  },
  {
    "name": "0xb11d...20b1 (3/10)",
    "wallet": "0xb11df61b3508ac8bc6f1790383a75fa20bf720b1"
  },
  {
    "name": "0x7d6b...1722 (3/10)",
    "wallet": "0x7d6b355ba07f0db183c83450666300eb1c391722"
  },
  {
    "name": "0xd5b5...b5a7 (4/10)",
    "wallet": "0xd5b57165ddfc815ed27ed51280e15f02ec1ab5a7"
  },
  {
    "name": "0x1d2e...1762 (3/10)",
    "wallet": "0x1d2e44dede73dcf080104ec0839a70da14641762"
  },
  {
    "name": "0x0feb...9d53 (4/10)",
    "wallet": "0x0feb107fb92aaf95e725cec4441e0941c5939d53"
  },
  {
    "name": "0xd25e...340f (3/10)",
    "wallet": "0xd25e8687480065addc67ba160234b7c1eb40340f"
  },
  {
    "name": "0x5437...40d5 (4/10)",
    "wallet": "0x54372fd91473e0f6f8507a955cd45de9b9d740d5"
  },
  {
    "name": "0xb1cc...c2b2 (3/10)",
    "wallet": "0xb1cc37869076225185b735f478694d3f0b30c2b2"
  },
  {
    "name": "0x8e11...a770 (3/10)",
    "wallet": "0x8e11c4b6691cc2b4b7a8ad3aa12eb79154dca770"
  },
  {
    "name": "0xd105...5436 (5/10)",
    "wallet": "0xd105fe3d0602c91142749e1b4a3124ab4d1d5436"
  },
  {
    "name": "0x7c0f...86da (4/10)",
    "wallet": "0x7c0f02d8e8debcc8678f2b57fa6d7bcbb5ca86da"
  },
  {
    "name": "0x1ad7...3baf (3/10)",
    "wallet": "0x1ad783fe41e08fbb7856bedad344174941fa3baf"
  },
  {
    "name": "0x53b2...4f34 (3/10)",
    "wallet": "0x53b29e4ae7730e770cbe7cd27a1292be67dc4f34"
  },
  {
    "name": "0x5b58...f781 (4/10)",
    "wallet": "0x5b58d75d34e08fad831aaf0b8987e872da94f781"
  },
  {
    "name": "0xf285...cc7e (4/10)",
    "wallet": "0xf28585b61e03f3cb31a1b1f3a114554ab1b5cc7e"
  },
  {
    "name": "0x22a6...3716 (3/10)",
    "wallet": "0x22a676b52392591bc6c7caf51c14b38f5e0f3716"
  },
  {
    "name": "0xf1f2...7d43 (3/10)",
    "wallet": "0xf1f23807fcf119e135188b61a3d55550c1807d43"
  },
  {
    "name": "0x8293...4f66 (3/10)",
    "wallet": "0x8293fdc6648dcd00b9194dfa0ab731b51e294f66"
  },
  {
    "name": "0xbc6c...4268 (3/10)",
    "wallet": "0xbc6cbc95d86a6a9537375640fbc0cf0db8024268"
  },
  {
    "name": "0x2363...f108 (3/10)",
    "wallet": "0x23631b12402fe1b2404fccfab01557269b0df108"
  },
  {
    "name": "0x4955...53b3 (3/10)",
    "wallet": "0x4955d905336c9751734c62ac56ac4aec0f3053b3"
  },
  {
    "name": "0xd943...459b (3/10)",
    "wallet": "0xd943d40fb00feece9e71e8fb790595f3ba93459b"
  },
  {
    "name": "0x1c34...68d2 (3/10)",
    "wallet": "0x1c34b79e5131397294fc3b1482eeb87db21268d2"
  },
  {
    "name": "0xd8b1...ef74 (4/10)",
    "wallet": "0xd8b17410c376adc66244738e8ac2a22cb1f8ef74"
  },
  {
    "name": "0xd9f4...fd60 (7/10)",
    "wallet": "0xd9f4188fde4f4bcc36774272becf03a05f98fd60"
  },
  {
    "name": "0x82c0...b5b2 (4/10)",
    "wallet": "0x82c04345a0e788a4e4b7208fb9ef1e7f21f1b5b2"
  },
  {
    "name": "0x3671...b15e (4/10)",
    "wallet": "0x3671be38ecb045bac6081986ab668afbd20db15e"
  },
  {
    "name": "0x4bb6...5e1c (3/10)",
    "wallet": "0x4bb66194c2bd9eb64b9999c1365ee5761cd65e1c"
  },
  {
    "name": "0xd897...49d0 (3/10)",
    "wallet": "0xd897d8d6c19a4f981bcad5c96ba5311513e349d0"
  },
  {
    "name": "0x140a...5b54 (3/10)",
    "wallet": "0x140a2ce1f458b2fb07950dce32e367ce26685b54"
  },
  {
    "name": "0x0ca8...f4ca (5/10)",
    "wallet": "0x0ca85b489a1276ef7042f1d032d0ef3831eaf4ca"
  },
  {
    "name": "0xe673...b32d (3/10)",
    "wallet": "0xe673447b7167b03883f392db02b889ec5764b32d"
  },
  {
    "name": "0xa1c0...fc7b (3/10)",
    "wallet": "0xa1c0c0ff6eaa63e7b0c7bf441fc146afdb08fc7b"
  },
  {
    "name": "0x5f4a...5b2f (4/10)",
    "wallet": "0x5f4a3da268903b1c7b46accfc8c8101f727b5b2f"
  },
  {
    "name": "0x376b...8294 (3/10)",
    "wallet": "0x376b38eeabe696e21a5bef6c25b88c2df3f68294"
  },
  {
    "name": "0xb127...5590 (3/10)",
    "wallet": "0xb1275d936b76df0092181aedd1b9db0de7175590"
  },
  {
    "name": "0xde1b...a728 (3/10)",
    "wallet": "0xde1b473043f96c46e131ab1f5560638f600fa728"
  },
  {
    "name": "0x1321...e618 (4/10)",
    "wallet": "0x1321f4a99596832dd0a08706c2717913741ee618"
  },
  {
    "name": "0xc088...03e1 (4/10)",
    "wallet": "0xc088045e91600edd337e3557cc1a42c96af303e1"
  },
  {
    "name": "0xb178...3b35 (5/10)",
    "wallet": "0xb178dc03909e7880b80b35a64b54f455c6ad3b35"
  },
  {
    "name": "0x4e38...1679 (3/10)",
    "wallet": "0x4e383adfad8a892cfde182eba4aef26d04be1679"
  },
  {
    "name": "0xb9c8...364d (4/10)",
    "wallet": "0xb9c8513f291bb106cce424bd5d8f44ad50d5364d"
  },
  {
    "name": "0x7a5e...ebd1 (3/10)",
    "wallet": "0x7a5eecbef4dec2533d81a7535a9c57b74ef1ebd1"
  },
  {
    "name": "0x1139...bd6e (5/10)",
    "wallet": "0x113941782d3eb0b80a6611a3b1ddfec16e82bd6e"
  },
  {
    "name": "0xeca6...e19c (4/10)",
    "wallet": "0xeca6770c0edd9e52216eefd1bbbcdee7a9d4e19c"
  },
  {
    "name": "0xc167...ad93 (4/10)",
    "wallet": "0xc167dec71416e77bf42d511ad1b926f360aaad93"
  },
  {
    "name": "0x0816...d74d (4/10)",
    "wallet": "0x0816ccfc2f77104d2332dda378189bebee49d74d"
  },
  {
    "name": "0x70b7...02f2 (3/10)",
    "wallet": "0x70b7da07a9a3ad75a203a18de9def3c58c3702f2"
  },
  {
    "name": "0x6e7b...2a94 (3/10)",
    "wallet": "0x6e7b489bb7ccce649d99d0a355b9517d6e662a94"
  },
  {
    "name": "0x6299...25d4 (3/10)",
    "wallet": "0x6299569adeeabacf5556310be3bbd7367dbd25d4"
  },
  {
    "name": "0x68b5...561f (3/10)",
    "wallet": "0x68b531349eb44496943be5ff15a5f510849d561f"
  },
  {
    "name": "0x8d8e...3892 (3/10)",
    "wallet": "0x8d8ee508fec6fc4ed3c62e8e2cc5061d90be3892"
  },
  {
    "name": "0x1520...0383 (3/10)",
    "wallet": "0x152013199dd985d9983da25c85b88af57e600383"
  },
  {
    "name": "0x27b0...17b7 (3/10)",
    "wallet": "0x27b00a9de3c80dfcd4bda256fa3991b634e717b7"
  },
  {
    "name": "0x0a59...bf68 (5/10)",
    "wallet": "0x0a5975421cae8c22fd61f139c1bf77d6f28cbf68"
  },
  {
    "name": "0xf82d...f0ae (5/10)",
    "wallet": "0xf82d46e02dd50c280050d45f22d7e22aceb0f0ae"
  },
  {
    "name": "0x1a98...0fe6 (3/10)",
    "wallet": "0x1a9818ea293de8e37eb96416d73ea2611bb30fe6"
  },
  {
    "name": "0xc3ef...1f65 (4/10)",
    "wallet": "0xc3efe60817ce422683064e093aae1da699081f65"
  },
  {
    "name": "0x28e0...cb2e (4/10)",
    "wallet": "0x28e07986734bea20fa8f8748b35c6953da45cb2e"
  },
  {
    "name": "0x19f7...5c95 (3/10)",
    "wallet": "0x19f7fc2adf25ae4c59cdf549f4ec041f89815c95"
  },
  {
    "name": "0xfe59...3005 (5/10)",
    "wallet": "0xfe59f409d7a05f8e24aa90626186cc820c8e3005"
  },
  {
    "name": "0x3204...8c32 (3/10)",
    "wallet": "0x32044b9d572d61602eeb3b6af5c7bfcdb8bb8c32"
  },
  {
    "name": "0x82b7...1a48 (3/10)",
    "wallet": "0x82b78db330b8895ca8948782c04b51ffe2fa1a48"
  },
  {
    "name": "0x8b41...60d1 (3/10)",
    "wallet": "0x8b4100f8802c9cbbaeb58e68d4dda355561560d1"
  },
  {
    "name": "0x2f98...4eb6 (3/10)",
    "wallet": "0x2f982fe1d29998a87888b3d4733c31331bf34eb6"
  },
  {
    "name": "0x832f...a264 (3/10)",
    "wallet": "0x832f971d14d66b05ccd05406f114d37ae27fa264"
  },
  {
    "name": "0x8224...37c2 (4/10)",
    "wallet": "0x8224109560e349b1b340023eb37364fb374037c2"
  },
  {
    "name": "0x8b48...6913 (3/10)",
    "wallet": "0x8b487aedd36e4c7591184df151156037b7d96913"
  },
  {
    "name": "0x6ee1...a9d7 (3/10)",
    "wallet": "0x6ee1250ebd097239a012065bba02b7aa1afea9d7"
  },
  {
    "name": "0xa1fa...d30e (3/10)",
    "wallet": "0xa1fa4ad9e365e1f491fde46df2c6b7b7d9a5d30e"
  },
  {
    "name": "0xcd82...0c05 (3/10)",
    "wallet": "0xcd82365145305e1a3f9226bd0aaf8f72e6920c05"
  },
  {
    "name": "0x571b...395b (3/10)",
    "wallet": "0x571b8db726c2a29d237f88c9efeb896290bf395b"
  },
  {
    "name": "0xdeeb...07db (4/10)",
    "wallet": "0xdeeb527b2038f90cf5bb8b578fa2ae76df1f07db"
  },
  {
    "name": "0x53ac...7753 (3/10)",
    "wallet": "0x53acf4eb2561ef0ae2e57cd6be22fd13a1c27753"
  },
  {
    "name": "0x0ecf...5e91 (3/10)",
    "wallet": "0x0ecf5262e5b864e1612875f8fc18f151315b5e91"
  },
  {
    "name": "0xf43b...608d (4/10)",
    "wallet": "0xf43b2be4aa887f426f05f78604b364af667c608d"
  },
  {
    "name": "0x12e7...03f6 (3/10)",
    "wallet": "0x12e702d5e68c2f15e7ae1010333caa45198d03f6"
  },
  {
    "name": "0x9c06...e5dd (3/10)",
    "wallet": "0x9c06cd3a4b5556fc4fbd8f7c87e03aa99713e5dd"
  },
  {
    "name": "0x97d7...804f (3/10)",
    "wallet": "0x97d7acd5c6a0b2d1c8fae9526a91789b01b7804f"
  },
  {
    "name": "0xf868...1352 (3/10)",
    "wallet": "0xf868037a44da9dc1517a7ebe4110e85b619d1352"
  },
  {
    "name": "0xad62...59c5 (3/10)",
    "wallet": "0xad62ef75de7f7f6accdbc71bf1997e949fcb59c5"
  },
  {
    "name": "0xe848...33a1 (3/10)",
    "wallet": "0xe848004d81709643d180b032877414b0a76833a1"
  },
  {
    "name": "0xa9f7...0b45 (3/10)",
    "wallet": "0xa9f710e0711122b95301ba81b860cb5fbdff0b45"
  },
  {
    "name": "0xcd88...327f (4/10)",
    "wallet": "0xcd8888a9357867b1f079c372d4e365afa222327f"
  },
  {
    "name": "0xa10d...d760 (4/10)",
    "wallet": "0xa10df901777b9729013451f02eac9756deb3d760"
  },
  {
    "name": "0xd406...57db (3/10)",
    "wallet": "0xd406df1cd0ec8f550c0132fd2094c6df348a57db"
  },
  {
    "name": "0x1af3...888a (3/10)",
    "wallet": "0x1af331dc34dd7c5c62af28b5685328318b61888a"
  },
  {
    "name": "0x4f27...d800 (3/10)",
    "wallet": "0x4f27ee7ad5ef8d881f62511a36a245e99eaed800"
  },
  {
    "name": "0x03c1...e856 (3/10)",
    "wallet": "0x03c1136a900fd4f0511ce1008e97dc2ee00de856"
  },
  {
    "name": "0x810a...e29f (3/10)",
    "wallet": "0x810ab853d951613a567792a675922c6498bce29f"
  },
  {
    "name": "0x861f...6f3d (3/10)",
    "wallet": "0x861f34fdcb73070df98d82ee3a40de9dda8b6f3d"
  },
  {
    "name": "0x8e05...ce00 (3/10)",
    "wallet": "0x8e05bd9fa3059ec69c15bc1a6f4d94f0ac26ce00"
  },
  {
    "name": "0xb410...00df (3/10)",
    "wallet": "0xb4103329230db58ea6e2480e4022b577833600df"
  },
  {
    "name": "0x1cf8...aef7 (3/10)",
    "wallet": "0x1cf82438699503567fa12d41ce80e92ca0a8aef7"
  },
  {
    "name": "0x648d...f282 (3/10)",
    "wallet": "0x648dc42f7ca4325e6f8a4e55c149d363c4c7f282"
  },
  {
    "name": "0xafc0...3752 (3/10)",
    "wallet": "0xafc093b1c8419f05d4de6ff54d38121c0d733752"
  },
  {
    "name": "0xb4fa...9f54 (4/10)",
    "wallet": "0xb4fa18fbbab81ad88d551cb991573e9f36ac9f54"
  },
  {
    "name": "0xf56e...a0f4 (3/10)",
    "wallet": "0xf56e55e35d2cca5a34f5ba568454974424aea0f4"
  },
  {
    "name": "0xbe11...d735 (3/10)",
    "wallet": "0xbe115092041459ee51db2b7f5fca6b6e7feed735"
  },
  {
    "name": "0x7e00...19fc (3/10)",
    "wallet": "0x7e005b7d3b1c1b5fe1dd790749c56ebf5fa819fc"
  },
  {
    "name": "0x8219...0df5 (3/10)",
    "wallet": "0x8219515cbabe39618ef359f77c0c98a2b0d10df5"
  },
  {
    "name": "0xd35f...4701 (3/10)",
    "wallet": "0xd35fc346e15ba5b446917c9fd23a9471d6144701"
  },
  {
    "name": "0x148c...a632 (3/10)",
    "wallet": "0x148c3a0490cf722262aa4c786a3816801e3fa632"
  },
  {
    "name": "0xb0d9...1e8d (3/10)",
    "wallet": "0xb0d99c37bbd5da98175b80812982c9a07d091e8d"
  },
  {
    "name": "0xccaf...5f84 (3/10)",
    "wallet": "0xccaf8b4f1975d67ea40a9af9c87426b769695f84"
  },
  {
    "name": "0xf4a4...a432 (3/10)",
    "wallet": "0xf4a4d40f918b1713cd11b24b87e1c45dd069a432"
  },
  {
    "name": "0x27eb...9f0a (3/10)",
    "wallet": "0x27eb78c1eade6fc040d25b94e7acf6bbe0689f0a"
  },
  {
    "name": "0xad8d...f6e8 (4/10)",
    "wallet": "0xad8db05246b6554c0e4fe4c97a167146cf77f6e8"
  },
  {
    "name": "0x2625...9ad1 (5/10)",
    "wallet": "0x26252f447f1fa0e3c6a0a794cd74043d6d859ad1"
  },
  {
    "name": "0xd7c8...7159 (3/10)",
    "wallet": "0xd7c8057e80dce6c1e7ff43fd6117285f09d97159"
  },
  {
    "name": "0xed66...0eb7 (3/10)",
    "wallet": "0xed6633fbde72bf3cd8f9724b27c931a40bca0eb7"
  },
  {
    "name": "0xfa08...815d (3/10)",
    "wallet": "0xfa08b62d35f00eeb76d36ff8fac33b82a476815d"
  },
  {
    "name": "0xbf04...430a (3/10)",
    "wallet": "0xbf04a3692d34e9b1c7e3c17fe29adf7c0193430a"
  },
  {
    "name": "0xafda...9491 (3/10)",
    "wallet": "0xafda44c99e945de879513f0f6a5c4c84bd289491"
  },
  {
    "name": "0x9444...6536 (3/10)",
    "wallet": "0x94446fc7b099ac0f2177ae40eb1eb4d11bae6536"
  },
  {
    "name": "0xdb9c...d970 (3/10)",
    "wallet": "0xdb9ca45f64a978fa34bdadd76abc179e22b6d970"
  },
  {
    "name": "0xb643...d197 (3/10)",
    "wallet": "0xb643cc4f8fa18504fb7d20f9fdd4fc9f2b6bd197"
  },
  {
    "name": "0x7603...552a (3/10)",
    "wallet": "0x76036774657c7bd61f7a1bd7e0dc3229f2fe552a"
  },
  {
    "name": "0xdca9...0b07 (3/10)",
    "wallet": "0xdca95d7f7533548a9124edc6959fcdb2e56f0b07"
  },
  {
    "name": "0x8c7e...202d (3/10)",
    "wallet": "0x8c7e72deb60a165e703e7597af50d77e9e31202d"
  },
  {
    "name": "0xd4c6...5a8c (3/10)",
    "wallet": "0xd4c63de811024cdb3403ae09b901b37a11555a8c"
  },
  {
    "name": "0x5c49...9efb (3/10)",
    "wallet": "0x5c49064c92414ae83a46cb5374fb69108f7f9efb"
  },
  {
    "name": "0x1f09...a3b6 (4/10)",
    "wallet": "0x1f0999741702e0ad2077bc83e943e91e7eeea3b6"
  },
  {
    "name": "0x2fa0...019b (3/10)",
    "wallet": "0x2fa0bd091b78d9ef6a2fa308a562deb8b5c5019b"
  },
  {
    "name": "0x626c...3d70 (3/10)",
    "wallet": "0x626c0c0cc2bfc32f2d385ba22ffaa7d4a7723d70"
  },
  {
    "name": "0xb2a9...d28f (4/10)",
    "wallet": "0xb2a968029778e7c68c30a4a16f97f5805dd7d28f"
  },
  {
    "name": "0x9d3b...9505 (3/10)",
    "wallet": "0x9d3b2006278929a971dab329fb7f9a5899f59505"
  },
  {
    "name": "0x0079...f869 (3/10)",
    "wallet": "0x00794b7b900165f452e2b02cc191e6b8b6f8f869"
  },
  {
    "name": "0x3522...361d (3/10)",
    "wallet": "0x35222fbe840c0eae9dc6a83be38906018a9b361d"
  },
  {
    "name": "0xcde7...a2b7 (3/10)",
    "wallet": "0xcde7f0e8e5fda2f30c947e44b77315409b75a2b7"
  },
  {
    "name": "0x265f...41ce (3/10)",
    "wallet": "0x265f5a9b3181ef516d755cb890a24a98e7d641ce"
  },
  {
    "name": "0x2190...7ff5 (3/10)",
    "wallet": "0x2190d4ee2bfc8883c3d71f4b5f41acd7a7287ff5"
  },
  {
    "name": "0x5a0d...1842 (3/10)",
    "wallet": "0x5a0df62eae698af785fc2099305299c073ae1842"
  },
  {
    "name": "0xc598...3fe5 (3/10)",
    "wallet": "0xc598ed77060e08940f995ef06a93e8d8fa8b3fe5"
  },
  {
    "name": "0x111c...8191 (3/10)",
    "wallet": "0x111c8909072c7339e47d38368d416f8fb39d8191"
  },
  {
    "name": "0x40b4...7daa (5/10)",
    "wallet": "0x40b42a49a45412992dac18428246da40956d7daa"
  },
  {
    "name": "0x935d...f508 (3/10)",
    "wallet": "0x935d11916b54a9d2c9eba242454066cddfd6f508"
  },
  {
    "name": "0xebd1...23c5 (3/10)",
    "wallet": "0xebd1f3d04c821214339b1e46f8980fa94b5823c5"
  },
  {
    "name": "0x611b...11c9 (3/10)",
    "wallet": "0x611b006147beb21f1d38edb61293a522e24311c9"
  },
  {
    "name": "0x119b...4c43 (3/10)",
    "wallet": "0x119b49a1c266c67656d098c320b697cc5ce94c43"
  },
  {
    "name": "0xb6e4...6045 (3/10)",
    "wallet": "0xb6e4119be533fc25c9791f980aab068895fa6045"
  },
  {
    "name": "0x63ae...1f71 (3/10)",
    "wallet": "0x63ae99f260320d39fac72458388f8a1dc9641f71"
  },
  {
    "name": "0x994f...0949 (3/10)",
    "wallet": "0x994ff03c2baa57621cd5c8a3fae77e1a3db70949"
  },
  {
    "name": "0xa484...9583 (3/10)",
    "wallet": "0xa4842a45c49c374886129f3a1c9bf0af11cf9583"
  },
  {
    "name": "0xe165...c21d (3/10)",
    "wallet": "0xe16521c423969800a5aff13c27431fb782c2c21d"
  },
  {
    "name": "0xf369...1304 (3/10)",
    "wallet": "0xf369c94dfc04de177900d639749781e84ceb1304"
  },
  {
    "name": "0xb731...a248 (3/10)",
    "wallet": "0xb731e9b9e7441336d12a50faa5435646b771a248"
  },
  {
    "name": "0x8455...5458 (3/10)",
    "wallet": "0x845537e23b2b93f98b5ceeaa5f285cc574a95458"
  },
  {
    "name": "0xb235...601b (3/10)",
    "wallet": "0xb235ba58e93ba482b19e81d66eb001cd6ffd601b"
  },
  {
    "name": "0x7eca...841f (3/10)",
    "wallet": "0x7ecac18f0cba0944e2a410e49b851d7cf0fd841f"
  },
  {
    "name": "0x1dfd...c137 (3/10)",
    "wallet": "0x1dfd7c9f16d10fecb0a1c85654c4a0aeaa92c137"
  },
  {
    "name": "0x67d8...eddf (3/10)",
    "wallet": "0x67d80a7e5a24cceda37d3b525fee067bd6b9eddf"
  },
  {
    "name": "0x9460...7532 (3/10)",
    "wallet": "0x9460fee9766561f41732b8e8bb03d4520c8a7532"
  },
  {
    "name": "0x5c22...59b9 (3/10)",
    "wallet": "0x5c2260103ba960d23603a7b824c80a24eae159b9"
  },
  {
    "name": "0x6ee7...4867 (3/10)",
    "wallet": "0x6ee7a2bafab6e6b650dd8e4038b6b8ae10574867"
  },
  {
    "name": "0x8a7b...6861 (3/10)",
    "wallet": "0x8a7bc8ef535760570c3a99fa79ed1a8bcea26861"
  },
  {
    "name": "0x1956...ca66 (3/10)",
    "wallet": "0x1956482ee67be6cbc20a7eeb10b15cfe683eca66"
  },
  {
    "name": "0x9686...25a9 (3/10)",
    "wallet": "0x9686ef5e52e51fa6c8bbfaccb2ff6b958c4625a9"
  },
  {
    "name": "0xd81a...53b7 (3/10)",
    "wallet": "0xd81a2e1469c8d799ba61f20432c22a53bbde53b7"
  },
  {
    "name": "0x1167...effa (3/10)",
    "wallet": "0x11677f0a16ce52b978faaf27620a612f3ac8effa"
  },
  {
    "name": "0xf78a...5b7c (3/10)",
    "wallet": "0xf78a1568bdb5f0c639243c9fb4f3429984015b7c"
  },
  {
    "name": "0xf02f...28dd (3/10)",
    "wallet": "0xf02fb3dc89228a47c376be96386ba298dd6b28dd"
  },
  {
    "name": "0x3977...d339 (3/10)",
    "wallet": "0x3977046b15aeb4b246179aa650c83e918aded339"
  },
  {
    "name": "0xb3ac...ab23 (6/10)",
    "wallet": "0xb3ac3f039337536e2896052e0d092d812e5bab23"
  },
  {
    "name": "0x4ae4...a9c7 (3/10)",
    "wallet": "0x4ae4df5d4095021c70368c984f9e52566f78a9c7"
  },
  {
    "name": "0xde50...3f3c (3/10)",
    "wallet": "0xde5054899e767c3f3ff362f94da545642ba03f3c"
  },
  {
    "name": "0x109e...9cb5 (3/10)",
    "wallet": "0x109e0646ec26d2e6143b7972c9a5c7a8ba4b9cb5"
  },
  {
    "name": "0xf5f5...92f6 (3/10)",
    "wallet": "0xf5f52da0ee0c8e1af908cc37778ef5832fed92f6"
  },
  {
    "name": "0x19e9...140e (3/10)",
    "wallet": "0x19e900f9ee644b19c566cf4351d15e763768140e"
  },
  {
    "name": "0x91c1...75e6 (3/10)",
    "wallet": "0x91c1bd1be0c81f970771d68426429e6276fe75e6"
  },
  {
    "name": "0x1d76...8fb5 (3/10)",
    "wallet": "0x1d76fbcf14907fba799b1b90b3b805f1da488fb5"
  },
  {
    "name": "0x244a...0dc7 (3/10)",
    "wallet": "0x244a453416f3e3168caad948b9eb0c7b6ba40dc7"
  },
  {
    "name": "0x0c2c...c2dd (3/10)",
    "wallet": "0x0c2ccd1736a06134e608cd723fbc3082f3f3c2dd"
  },
  {
    "name": "0x6e78...f9c5 (3/10)",
    "wallet": "0x6e785f2fdbdc899f8f08cc1517f82a585b44f9c5"
  },
  {
    "name": "0xee66...931f (3/10)",
    "wallet": "0xee667a3c89c7ee6e5a9595f998d32642dfd0931f"
  },
  {
    "name": "0x68b1...42ac (3/10)",
    "wallet": "0x68b17a94def02302255901a7dfaf641107ce42ac"
  },
  {
    "name": "0xf1ab...c35f (3/10)",
    "wallet": "0xf1ab1d15acb0f262ced6938b8af23fc3ffcbc35f"
  },
  {
    "name": "0xb0b3...804f (3/10)",
    "wallet": "0xb0b34e49b381924974e338637273cd8481c6804f"
  },
  {
    "name": "0xe5c6...fa81 (3/10)",
    "wallet": "0xe5c6ee51e0094e25c61751ce2296480de702fa81"
  },
  {
    "name": "0xb793...aa70 (3/10)",
    "wallet": "0xb79358706372877a4125ed370485efdb8ff8aa70"
  },
  {
    "name": "0xd095...b889 (3/10)",
    "wallet": "0xd095a24dcf511a8d02ef66b9157512abc665b889"
  },
  {
    "name": "0xe944...2bc6 (3/10)",
    "wallet": "0xe9448d94f5f7ac4af563cf47eb4a906f11632bc6"
  },
  {
    "name": "0x77b3...3c66 (4/10)",
    "wallet": "0x77b330648f9da9875f09308611f19d293dde3c66"
  },
  {
    "name": "0x1997...120d (4/10)",
    "wallet": "0x1997f510a21eba28a21d3597cdd94dd24282120d"
  },
  {
    "name": "0xa12a...4177 (3/10)",
    "wallet": "0xa12a918aa308dc665bdf54dfdee3840157354177"
  },
  {
    "name": "0x81dc...62a4 (3/10)",
    "wallet": "0x81dcab1513d88478a3536348d6d7560f2d8762a4"
  },
  {
    "name": "0x7232...0a33 (3/10)",
    "wallet": "0x72327e32f9e5834be3da95061ae4818aa36e0a33"
  },
  {
    "name": "0xaf77...7675 (3/10)",
    "wallet": "0xaf77e6ce8fef4b096e909ebe6c475cb991c27675"
  },
  {
    "name": "0x6cb2...a8a6 (3/10)",
    "wallet": "0x6cb2343c440d8ebdc847b3c3b5ce366fa163a8a6"
  },
  {
    "name": "0xd73c...658b (3/10)",
    "wallet": "0xd73c7b74dab6e917090179844e1b561bb50c658b"
  },
  {
    "name": "0xa4bf...a818 (3/10)",
    "wallet": "0xa4bf1f553d26d2f9c43b232dda05bac09af9a818"
  },
  {
    "name": "0x7d5e...40e7 (3/10)",
    "wallet": "0x7d5e397f078adaf32562f13c2b9dda66d7fb40e7"
  },
  {
    "name": "0xe4c8...95ce (3/10)",
    "wallet": "0xe4c8476226ad79c16f614a20712d348b77cf95ce"
  },
  {
    "name": "0xda7e...6113 (3/10)",
    "wallet": "0xda7e0234322c678f86c3fdf568542980e5bf6113"
  },
  {
    "name": "0x73b6...3613 (3/10)",
    "wallet": "0x73b63d45ade9b1cb12372694c1579a75cdae3613"
  },
  {
    "name": "0x706b...2b01 (3/10)",
    "wallet": "0x706b1f3e69fb20a10feacace810258510fed2b01"
  },
  {
    "name": "0x1ac2...e594 (3/10)",
    "wallet": "0x1ac23bb5e2a02ed2e15b1cdd17075fdd060de594"
  },
  {
    "name": "0x4410...7171 (3/10)",
    "wallet": "0x441093d7bf9337e2871c258918ab439cef0d7171"
  },
  {
    "name": "0x75f7...f148 (3/10)",
    "wallet": "0x75f7e47437580104bb1b6cc6cc4d9a325b23f148"
  },
  {
    "name": "0x3907...3925 (3/10)",
    "wallet": "0x39079407a3be76fa77603858d0d8c753c9bb3925"
  },
  {
    "name": "0xa2b4...fbc3 (3/10)",
    "wallet": "0xa2b4d1219a95da2e7f8ea6ed2c5f6ba50c44fbc3"
  },
  {
    "name": "0x4d76...5a6f (3/10)",
    "wallet": "0x4d76031e3d5c92e1f6c6872407f9bd09ea4a5a6f"
  },
  {
    "name": "0xc2f0...2eac (3/10)",
    "wallet": "0xc2f0fec9c0b32dc7e5545fae090c3c4d83112eac"
  },
  {
    "name": "0x9c9d...38a0 (3/10)",
    "wallet": "0x9c9d341658cd8be9023c8b6b6cd2179c720538a0"
  },
  {
    "name": "0xffcd...67dc (3/10)",
    "wallet": "0xffcdcf517f40ec98e6035f86a30fd8ad3abf67dc"
  },
  {
    "name": "0x9447...2004 (3/10)",
    "wallet": "0x9447bb342ec6de70fee68b8cdbccf5dda35c2004"
  },
  {
    "name": "0x8e1f...0f31 (3/10)",
    "wallet": "0x8e1f7a6315ab27b351055823a30168524b8c0f31"
  },
  {
    "name": "0xbbb8...6a06 (3/10)",
    "wallet": "0xbbb82b40167b7150fbd864e1ce03d752e2056a06"
  },
  {
    "name": "0x3254...af74 (3/10)",
    "wallet": "0x32548949f2ddc32c8d4f1fa8a957db28f962af74"
  },
  {
    "name": "0xba69...a21c (3/10)",
    "wallet": "0xba69961bd9adf7b84a1a69f09d4f2ee16aa1a21c"
  },
  {
    "name": "0xf57a...cb4d (3/10)",
    "wallet": "0xf57a49b941f7725d858b657b9f82052c4d3fcb4d"
  },
  {
    "name": "0x7d00...da08 (3/10)",
    "wallet": "0x7d0051dd1b619fb0ddf77d61bd7131c5be5cda08"
  },
  {
    "name": "0x9d42...d2e1 (3/10)",
    "wallet": "0x9d42b28854d0da4766bf6b63391738f26ef5d2e1"
  },
  {
    "name": "0x6942...9c1f (3/10)",
    "wallet": "0x69420c67545e5ee95d1375f93ec0da06c05c9c1f"
  }
]

const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ApprovalCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApprovalQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApprovalToCurrentOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ApproveToCaller",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BalanceQueryForZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintZeroQuantity",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnerQueryForNonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferCallerNotOwnerNorApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferFromIncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToNonERC721ReceiverImplementer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransferToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "URIQueryForNonexistentToken",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      }
    ],
    "name": "BatchMetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "startTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxClaimableSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "supplyClaimed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantityLimitPerWallet",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "merkleRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "pricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "currency",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "metadata",
            "type": "string"
          }
        ],
        "indexed": false,
        "internalType": "struct IClaimCondition.ClaimCondition[]",
        "name": "claimConditions",
        "type": "tuple[]"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "resetEligibility",
        "type": "bool"
      }
    ],
    "name": "ClaimConditionsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "prevURI",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "newURI",
        "type": "string"
      }
    ],
    "name": "ContractURIUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newRoyaltyRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newRoyaltyBps",
        "type": "uint256"
      }
    ],
    "name": "DefaultRoyalty",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "platformFeeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "flatFee",
        "type": "uint256"
      }
    ],
    "name": "FlatPlatformFeeUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxTotalSupply",
        "type": "uint256"
      }
    ],
    "name": "MaxTotalSupplyUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "MetadataFrozen",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "prevOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnerUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "platformFeeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformFeeBps",
        "type": "uint256"
      }
    ],
    "name": "PlatformFeeInfoUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "enum IPlatformFee.PlatformFeeType",
        "name": "feeType",
        "type": "uint8"
      }
    ],
    "name": "PlatformFeeTypeUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "PrimarySaleRecipientUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "royaltyRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "royaltyBps",
        "type": "uint256"
      }
    ],
    "name": "RoyaltyForToken",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "revealedURI",
        "type": "string"
      }
    ],
    "name": "TokenURIRevealed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "claimConditionIndex",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "claimer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantityClaimed",
        "type": "uint256"
      }
    ],
    "name": "TokensClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "startTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "encryptedBaseURI",
        "type": "bytes"
      }
    ],
    "name": "TokensLazyMinted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "batchFrozen",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerToken",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes32[]",
            "name": "proof",
            "type": "bytes32[]"
          },
          {
            "internalType": "uint256",
            "name": "quantityLimitPerWallet",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "pricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "currency",
            "type": "address"
          }
        ],
        "internalType": "struct IDrop.AllowlistProof",
        "name": "_allowlistProof",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "claim",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimCondition",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "currentStartId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractType",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractVersion",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "key",
        "type": "bytes"
      }
    ],
    "name": "encryptDecrypt",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "result",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "encryptedData",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "freezeBatchBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getActiveClaimConditionId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBaseURICount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getBatchIdAtIndex",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_conditionId",
        "type": "uint256"
      }
    ],
    "name": "getClaimConditionById",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "startTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxClaimableSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "supplyClaimed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantityLimitPerWallet",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "merkleRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "pricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "currency",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "metadata",
            "type": "string"
          }
        ],
        "internalType": "struct IClaimCondition.ClaimCondition",
        "name": "condition",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDefaultRoyaltyInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFlatPlatformFeeInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPlatformFeeInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPlatformFeeType",
    "outputs": [
      {
        "internalType": "enum IPlatformFee.PlatformFeeType",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_batchId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_key",
        "type": "bytes"
      }
    ],
    "name": "getRevealURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "revealedURI",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getRoleMember",
    "outputs": [
      {
        "internalType": "address",
        "name": "member",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleMemberCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "getRoyaltyInfoForToken",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_conditionId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_claimer",
        "type": "address"
      }
    ],
    "name": "getSupplyClaimedByWallet",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "supplyClaimedByWallet",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRoleWithSwitch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_defaultAdmin",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_symbol",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_contractURI",
        "type": "string"
      },
      {
        "internalType": "address[]",
        "name": "_trustedForwarders",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "_saleRecipient",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_royaltyRecipient",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "_royaltyBps",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "_platformFeeBps",
        "type": "uint128"
      },
      {
        "internalType": "address",
        "name": "_platformFeeRecipient",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_batchId",
        "type": "uint256"
      }
    ],
    "name": "isEncryptedBatch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "forwarder",
        "type": "address"
      }
    ],
    "name": "isTrustedForwarder",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_baseURIForTokens",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "lazyMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "batchId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxTotalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "data",
        "type": "bytes[]"
      }
    ],
    "name": "multicall",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "results",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextTokenIdToClaim",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextTokenIdToMint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "primarySaleRecipient",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_key",
        "type": "bytes"
      }
    ],
    "name": "reveal",
    "outputs": [
      {
        "internalType": "string",
        "name": "revealedURI",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "salePrice",
        "type": "uint256"
      }
    ],
    "name": "royaltyInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "royaltyAmount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "startTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxClaimableSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "supplyClaimed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantityLimitPerWallet",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "merkleRoot",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "pricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "currency",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "metadata",
            "type": "string"
          }
        ],
        "internalType": "struct IClaimCondition.ClaimCondition[]",
        "name": "_conditions",
        "type": "tuple[]"
      },
      {
        "internalType": "bool",
        "name": "_resetClaimEligibility",
        "type": "bool"
      }
    ],
    "name": "setClaimConditions",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "setContractURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_royaltyRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_royaltyBps",
        "type": "uint256"
      }
    ],
    "name": "setDefaultRoyaltyInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_platformFeeRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_flatFee",
        "type": "uint256"
      }
    ],
    "name": "setFlatPlatformFeeInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxTotalSupply",
        "type": "uint256"
      }
    ],
    "name": "setMaxTotalSupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newOwner",
        "type": "address"
      }
    ],
    "name": "setOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_platformFeeRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_platformFeeBps",
        "type": "uint256"
      }
    ],
    "name": "setPlatformFeeInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum IPlatformFee.PlatformFeeType",
        "name": "_feeType",
        "type": "uint8"
      }
    ],
    "name": "setPlatformFeeType",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_saleRecipient",
        "type": "address"
      }
    ],
    "name": "setPrimarySaleRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_bps",
        "type": "uint256"
      }
    ],
    "name": "setRoyaltyInfoForToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalMinted",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "updateBatchBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_conditionId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_claimer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerToken",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes32[]",
            "name": "proof",
            "type": "bytes32[]"
          },
          {
            "internalType": "uint256",
            "name": "quantityLimitPerWallet",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "pricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "currency",
            "type": "address"
          }
        ],
        "internalType": "struct IDrop.AllowlistProof",
        "name": "_allowlistProof",
        "type": "tuple"
      }
    ],
    "name": "verifyClaim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isOverride",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "AirdropTooFewAddresses",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "BatchSizeTooSmall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotApprovedOrOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "CallerNotTokenOwnerOrDelegate",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721IncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721InsufficientApproval",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOperator",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721NonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EmptyTokenURI",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTokenURIIndex",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaxRoyaltyError",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoTokensSpecified",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotOwnerAdminOrMintContract",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "NotRoleOrOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "NotSpecifiedRole",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OperatorBlocked",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "StoryNotEnabled",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "length",
        "type": "uint256"
      }
    ],
    "name": "StringsInsufficientHexLength",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenDoesntExist",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      }
    ],
    "name": "AllRolesRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "prevBlockListRegistry",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newBlockListRegistry",
        "type": "address"
      }
    ],
    "name": "BlockListRegistryUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "creatorAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "creatorName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "story",
        "type": "string"
      }
    ],
    "name": "CollectionStory",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "creatorAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "creatorName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "story",
        "type": "string"
      }
    ],
    "name": "CreatorStory",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPercentage",
        "type": "uint256"
      }
    ],
    "name": "DefaultRoyaltyUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "MetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "prevNftDelegationRegistry",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newNftDelegationRegistry",
        "type": "address"
      }
    ],
    "name": "NftDelegationRegistryUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "RoleChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "collectorAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "collectorName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "story",
        "type": "string"
      }
    ],
    "name": "Story",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "StoryStatusUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newPercentage",
        "type": "uint256"
      }
    ],
    "name": "TokenRoyaltyOverride",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "TokenUriPinned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "TokenUriUnpinned",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "APPROVED_MINT_CONTRACT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "BASIS",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "VERSION",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "story",
        "type": "string"
      }
    ],
    "name": "addCollectionStory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "story",
        "type": "string"
      }
    ],
    "name": "addCreatorStory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "story",
        "type": "string"
      }
    ],
    "name": "addStory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "baseUri",
        "type": "string"
      }
    ],
    "name": "addTokenUris",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "addresses",
        "type": "address[]"
      },
      {
        "internalType": "string",
        "name": "baseUri",
        "type": "string"
      }
    ],
    "name": "airdrop",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "numTokens",
        "type": "uint128"
      },
      {
        "internalType": "string",
        "name": "baseUri",
        "type": "string"
      }
    ],
    "name": "batchMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "blocklistRegistry",
    "outputs": [
      {
        "internalType": "contract IBlockListRegistry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      }
    ],
    "name": "externalMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDefaultRoyaltyRecipientAndPercentage",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleMembers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "hasPinnedTokenURI",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "uri",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "pinTokenURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "revokeAllRoles",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "minters",
        "type": "address[]"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "setApprovedMintContracts",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newBlockListRegistry",
        "type": "address"
      }
    ],
    "name": "setBlockListRegistry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "newPercentage",
        "type": "uint256"
      }
    ],
    "name": "setDefaultRoyalty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newNftDelegationRegistry",
        "type": "address"
      }
    ],
    "name": "setNftDelegationRegistry",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address[]",
        "name": "roleMembers",
        "type": "address[]"
      },
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "setRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "setStoryStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "newRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "newPercentage",
        "type": "uint256"
      }
    ],
    "name": "setTokenRoyalty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "storyEnabled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tlNftDelegationRegistry",
    "outputs": [
      {
        "internalType": "contract ITLNftDelegationRegistry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURIs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "uris",
        "type": "string[]"
      },
      {
        "internalType": "bool",
        "name": "pinned",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "unpinTokenURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "EmptyString",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FileAlreadyRegistered",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FileNotRegistered",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidManager",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ManagerDoesNotExist",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ManagerRemoveBlocked",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ManagerSwapBlocked",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintERC2309QuantityExceedsLimit",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MintFrozen",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MinterRegistrationInvalid",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MismatchedArrayLengths",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotMinter",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OverLimitSupply",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnershipNotInitializedForExtraData",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RoyaltyBPSInvalid",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RoyaltySetBlocked",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenDoesNotExist",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TokenNotInRange",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Unauthorized",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "oldBaseUri",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "newBaseURI",
        "type": "string"
      }
    ],
    "name": "BaseURISet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipientAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint16",
        "name": "royaltyPercentageBPS",
        "type": "uint16"
      }
    ],
    "name": "DefaultRoyaltySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newDefaultTokenManager",
        "type": "address"
      }
    ],
    "name": "DefaultTokenManagerChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "recipientAddress",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "royaltyPercentageBPS",
            "type": "uint16"
          }
        ],
        "indexed": false,
        "internalType": "struct IRoyaltyManager.Royalty[]",
        "name": "_newRoyalties",
        "type": "tuple[]"
      }
    ],
    "name": "GranularRoyaltiesSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      }
    ],
    "name": "GranularTokenManagersRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "_tokenManagers",
        "type": "address[]"
      }
    ],
    "name": "GranularTokenManagersSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "newLimitSupply",
        "type": "uint256"
      }
    ],
    "name": "LimitSupplySet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "registered",
        "type": "bool"
      }
    ],
    "name": "MinterRegistrationChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "MintsFrozen",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newRoyaltyManager",
        "type": "address"
      }
    ],
    "name": "RoyaltyManagerChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "uris",
        "type": "string[]"
      }
    ],
    "name": "TokenURIsSet",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "fileName",
        "type": "string"
      },
      {
        "internalType": "address[]",
        "name": "fileStorageAddresses",
        "type": "address[]"
      }
    ],
    "name": "addFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "baseURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "customRendererConfig",
    "outputs": [
      {
        "internalType": "address",
        "name": "renderer",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "processMintDataOnRenderer",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultManager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "fileName",
        "type": "string"
      }
    ],
    "name": "fileContents",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "fileName",
        "type": "string"
      }
    ],
    "name": "fileStorage",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "files",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "freezeMints",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "generativeCodeUri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "limitSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mintAmountToOneRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "recipients",
        "type": "address[]"
      }
    ],
    "name": "mintOneToMultipleRecipients",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "mintOneToOneRecipient",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "recipients",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mintSameAmountToMultipleRecipients",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minters",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "observability",
    "outputs": [
      {
        "internalType": "contract IObservability",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "minter",
        "type": "address"
      }
    ],
    "name": "registerMinter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeDefaultTokenManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "fileName",
        "type": "string"
      }
    ],
    "name": "removeFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      }
    ],
    "name": "removeGranularTokenManagers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "removeRoyaltyManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "royaltyManager",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newBaseURI",
        "type": "string"
      }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "newName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "newSymbol",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "newContractUri",
        "type": "string"
      }
    ],
    "name": "setContractMetadata",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "renderer",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "processMintDataOnRenderer",
            "type": "bool"
          }
        ],
        "internalType": "struct ERC721GeneralSequenceBase.CustomRendererConfig",
        "name": "_customRendererConfig",
        "type": "tuple"
      }
    ],
    "name": "setCustomRenderer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_defaultTokenManager",
        "type": "address"
      }
    ],
    "name": "setDefaultTokenManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "recipientAddress",
            "type": "address"
          },
          {
            "internalType": "uint16",
            "name": "royaltyPercentageBPS",
            "type": "uint16"
          }
        ],
        "internalType": "struct IRoyaltyManager.Royalty[]",
        "name": "_newRoyalties",
        "type": "tuple[]"
      }
    ],
    "name": "setGranularRoyalties",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "internalType": "address[]",
        "name": "_tokenManagers",
        "type": "address[]"
      }
    ],
    "name": "setGranularTokenManagers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_limitSupply",
        "type": "uint256"
      }
    ],
    "name": "setLimitSupply",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_royaltyManager",
        "type": "address"
      }
    ],
    "name": "setRoyaltyManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "uris",
        "type": "string[]"
      }
    ],
    "name": "setTokenURIs",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "supply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "tokenManager",
    "outputs": [
      {
        "internalType": "address",
        "name": "manager",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "minter",
        "type": "address"
      }
    ],
    "name": "unregisterMinter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
// const walletsToWatch = [
//   {"name":"0x6e3f...c514 (4/10)","wallet":"0x6e3f8e093fe749398aac60515686fc4fc4bac514"}
// ]
// Function to parse transactions in a block
// Function to parse transactions in a block
// Function to parse transactions in a block
async function parseBlock(blockNumber) {
  try {
    const block = await provider.getBlockWithTransactions(blockNumber);
    if (block && block.transactions) {
      let foundWallet = false; // Flag to track if any wallet is found in the block
      for (const tx of block.transactions) {
        // log(`Potential NFT Mint Detected!\nBlock Number: ${blockNumber}\nTransaction Hash: ${tx.hash}`,'success');
        if (walletsToWatch.some(wallet => wallet.wallet.toLowerCase() === tx.from.toLowerCase())) {
          foundWallet = true; // Set the flag if a wallet is found
          const walletName = walletsToWatch.find(wallet => wallet.wallet.toLowerCase() === tx.from.toLowerCase()).name;
          // log(wallet.wallet)
          // log(wallet.name)
          const txReceipt = await provider.getTransactionReceipt(tx.hash);
          if (txReceipt && txReceipt.logs) {
            let isPotentialNFTMint = false;
            let isPotentialZoraMint = false
            let erc721 = false
            let erc721TopicCount = 0;
            let erc721Tokens = []

            let hookInfo = {
              "contractAddress" : txReceipt.to,
              "contractAddress2" : '',
              "sender": walletName,
              "transactionHash": txReceipt.transactionHash,
              "blockNumber": txReceipt.blockNumber,
              "zoraLink": "",
              "tokenID": "",
              "tokenNumber": "",
              "numberOfTokens": erc721TopicCount,
              "erc721": erc721
            }

            for (const logged of txReceipt.logs) {
              console.log(`Number of topics: ${logged.topics.length} Tx: ${tx.hash}`);
              console.log(`topics: ${logged.topics}`);
              // for (const topic of logged.topics) {
              //   console.log(`1parseInt Topic: ${parseInt(topic)}`)
              // }

              for (let i = 0; i < logged.topics.length; i++) {
                if (i === 3) { // Check if it's the fourth topic (index 3)
                    const fourthTopic = parseInt(logged.topics[i], 16);
                    log(`found at least 1 tokenID`,'success')
                    hookInfo.tokenID = fourthTopic
                    log(JSON.stringify(txReceipt),'yellow')
                    log()
                    // Further processing with fourthTopic if needed
                }
            }


              // console.log(`ParseInt 1155 Token ID: ${parseInt(log.topics[i]})`)  
              // console.log(`topics parseint: ${parseInt(log.topics)}`);
              //ERC-721 MINT CHECK
              
            //   if (
            //     logged.topics.length > 1 &&
            //     logged.topics[0] === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' &&
            //     logged.topics[1] === '0x0000000000000000000000000000000000000000000000000000000000000000'
            // ) {
            //   erc721TopicCount++;
            //     // Count the occurrences of ERC-721 topic
            //     for (const topic of logged.topics) {
            //       console.log(`2parseInt Topic: ${parseInt(topic)}`)
            //         if (topic === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef') {
            //           console.log('721 mint found here')
            //             // erc721TopicCount++;
            //             erc721Tokens.push(logged.topics[3])
            //         }
            //     }
            //     log(erc721TopicCount,'error')
            let erc721TopicCount1 = 0; // Initialize count for ERC721 topics
                        for (const logged of txReceipt.logs) {
                            if (
                                logged.topics.some(topic =>
                                    topic === '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
                                ) &&
                                logged.topics.some(topic => topic === '0x0000000000000000000000000000000000000000000000000000000000000000')
                            ) {
                                // Increment the count for each ERC721 topic found
                                erc721TopicCount1++;
                                erc721 = true
                            }
                        }
                        // Log the count of ERC721 topics for debugging purposes
                        console.log(`ERC721 Topic Count: ${erc721TopicCount1}`);
                        erc721TopicCount = erc721TopicCount1
                        hookInfo.contractAddress2 = txReceipt.logs[0].address
                // Check if any other topic is below 20000

                const topicsBelow20000 = logged.topics.slice(2).some(topic => parseInt(topic, 16) < 100000);
                if (topicsBelow20000 && erc721TopicCount > 0) {
                    isPotentialNFTMint = true;
                    erc721 = true
                    break;
                }
            // }
              
              //ZORA 1155 MINT CHECK
              else if (
                logged.topics.length > 1 &&
                (logged.topics.includes('0x90e8cce6b15b450d1e56e9ef986d1cd376838a90944336c02886ca12b9e6ebd7') && 
                // log.topics.includes('0x0000000000000000000000000000000000000000000000000000000000000000') && 
                logged.topics.includes('0x0000000000000000000000007bf90111ad7c22bec9e9dff8a01a44713cc1b1b6')) 
                // log.topics[0] === '0x90e8cce6b15b450d1e56e9ef986d1cd376838a90944336c02886ca12b9e6ebd7' &&
                // log.topics[1] === '0x0000000000000000000000000000000000000000000000000000000000000000' &&

                // (log.topics.includes('0x0000000000000000000000007bf90111ad7c22bec9e9dff8a01a44713cc1b1b6') || log.topics.includes('0xb362243af1e2070d7d5bf8d713f2e0fab64203f1b71462afbe20572909788c5e'))
              ) {
                console.log('zora mint')
                console.log(logged.topic)
                console.log(`Contents of the second topic: ${logged.topics[1]}`);
                
                for (const topic of logged.topics) {
                  console.log(`3parseInt Topic: ${parseInt(topic)}`)
                    if (topic === '0xb362243af1e2070d7d5bf8d713f2e0fab64203f1b71462afbe20572909788c5e') {
                      hookInfo.zoraLink = `https://zora.co/collect/base:${hookInfo.contractAddress}/${hookInfo.tokenID}`
                      log(`ZORA HOOK INFO ${hookInfo.zoraLink}`,'success')
                      console.log(parseInt(logged.topics[3]))
                      console.log(parseInt(topic))
                    }
                }
                // const topicsBelow20000 = log.topics.slice(2).some(topic => parseInt(topic, 16) < 20000);
                // if (topicsBelow20000) {
                    isPotentialZoraMint = true;
                //   break;
                // }
              }

            }

            log(JSON.stringify(hookInfo),'yellow')
            if (isPotentialNFTMint) {
              log(`Potential NFT Mint Detected!\nBlock Number: ${blockNumber}\nTransaction Hash: ${tx.hash}`);
              // const message = `Potential NFT Mint Detected!\nBlock Number: ${blockNumber}\nTransaction Hash: ${tx.hash}\nTokens Minted: ${erc721TopicCount}`;
              // await sendDiscordWebhook(hookInfo);
              await callContract(hookInfo);
            }
            else if (isPotentialZoraMint) {
                log(`Potential Zora NFT Mint Detected!\nTransaction Hash: ${tx.hash}`);
                hookInfo.zoraLink = `[Zora](https://zora.co/collect/base:${hookInfo.contractAddress}/${hookInfo.tokenID})`
                log(JSON.stringify(hookInfo))
                // const message = `Potential Zora NFT Mint Detected!\nBlock Number: ${blockNumber}\nTransaction Hash: ${tx.hash}\n Zora: ${hookInfo.zoraLink}`;
                // await sendDiscordWebhook(hookInfo);
                await callContract(hookInfo);
              }
          }
        }
      }
      if (!foundWallet) {
        log(`No walletsToWatch found in block: ${blockNumber}`);
      }
    }
  } catch (error) {
    console.error('Error parsing block:', error);
  }
}





async function callContract(hookInfo) {
  // Connect to the Ethereum network
  log("calling contract info",'yellow')
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  // Load the wallet
  const wallet = new ethers.Wallet(privateKey, provider);

  // Example ABI (Replace with your contract's ABI)

  // Connect to the contract
  let contractAddress = hookInfo.contractAddress; // Default to hookInfo.contractAddress

  if (hookInfo.contractAddress2 && hookInfo.contractAddress2.length > 1) {
      contractAddress = hookInfo.contractAddress2;
  }
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  // View functions (Read data)
  try {
      // Read a view function
      log('trying functions','yellow')
      const name = await contract.name();
      console.log('Contract Name:', name);

      const symbol = await contract.symbol();
      console.log('Contract Symbol:', symbol);

      
      // const totalSupply = await contract.totalSupply();
      // console.log('Contract totalSupply:', parseInt(totalSupply));
      await sendDiscordWebhook(hookInfo,name,symbol);


      // const contractURI = await contractURI.totalSupply();
      // console.log('Contract contractURI:', parseInt(contractURI));
      // Call other view functions here...

  } catch (error) {
      console.error('Error reading contract data:', error);

      try {
        // Create a contract instance for the proxied contract
        let contractAddress = hookInfo.contractAddress; // Default to hookInfo.contractAddress

        if (hookInfo.contractAddress2 && hookInfo.contractAddress2.length > 1) {
            contractAddress = hookInfo.contractAddress2;
        }
        const proxiedContract = new ethers.Contract(contractAddress, [], provider.getSigner(0));

        // Read contract data from the proxied contract
        const name = await proxiedContract.name();
        const symbol = await proxiedContract.symbol();
        // Add more data reading here as needed

        // Return the contract data read from the proxied contract
        await sendDiscordWebhook(hookInfo,name,symbol);
    } catch (error) {
        console.error('Error reading contract data from proxied contract:', error);
        await sendDiscordWebhook(hookInfo,"Unavailable","Unavailable");
    }
  }

}

let lastProcessedBlockNumber = 0;
async function listenForNewBlocks() {
  try {
      // Get the latest block number
      let latestBlockNumber = await provider.getBlockNumber();

      // Initialize lastProcessedBlockNumber if it's the first run
      if (lastProcessedBlockNumber === 0) {
          lastProcessedBlockNumber = latestBlockNumber;
      }

      // Process new blocks only
      if (latestBlockNumber > lastProcessedBlockNumber) {
          for (let i = lastProcessedBlockNumber + 1; i <= latestBlockNumber; i++) {
              await parseBlock(i);
          }
          // Update the last processed block number
          lastProcessedBlockNumber = latestBlockNumber;
      }
  } catch (error) {
      console.error('Error listening for new blocks:', error);
  }

  // Set up a timeout to call the function again after a delay
  setTimeout(listenForNewBlocks, 1000); // You can adjust the delay as needed
}


// Start listening for new blocks
listenForNewBlocks().then(() => {
    log('Listening for new blocks...');
}).catch(error => {
    console.error('Failed to start listening:', error);
});