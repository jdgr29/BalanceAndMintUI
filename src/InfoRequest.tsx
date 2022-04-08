import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { useEffect, useState } from "react";




  


function MintAndBalance () {
  const [Account, SetAccount] = useState<any>([])
  const MY_WALLET_ADDRESS = "55DwoQzQSVvkXdGwKqz7yfwqLxf81rm4GTrUau8EVU9K";
  
  useEffect(() => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

   async function Data() {
     
   //TODO get the wallet key dynamically
    const accounts:{[index: string]:any} = await connection.getParsedProgramAccounts(
      
      TOKEN_PROGRAM_ID, // new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
      {
        filters: [
          {
            dataSize: 165, // number of bytes
          },
          {
            memcmp: {
              offset: 32, // number of bytes
              bytes: MY_WALLET_ADDRESS, // base58 encoded string
            },
          },
        ],
      }
      
      )
      SetAccount(accounts)
    }
      
    Data();
      },[])

    

     return(
  
       <div>
    {Account.map((account:any)=>(
      <div>
      <h1>Token mint Address: {account.account.data["parsed"]["info"]["mint"]}</h1>
      <h1>Your Token Balance is: {account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}</h1>
      </div>
    ))
  }</div>
    )
  }


export const UI = function(){
  return(
    <MintAndBalance/>
  )
}









  



