import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import{ReactNode} from 'react';


   
  const DataRequest = async(): Promise<JSX.Element> => {
  const MY_WALLET_ADDRESS = "55DwoQzQSVvkXdGwKqz7yfwqLxf81rm4GTrUau8EVU9K";
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  
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
   return(

     <div>
  {accounts.map((account:any)=>(
    <div>
    <h1>Token mint: {account.account.data["parsed"]["info"]["mint"]}</h1>
    <h1>Token Balance: {account.account.data["parsed"]["info"]["tokenAmount"]["uiAmount"]}</h1>
    </div>
  ))
}</div>
  )
  
}

export const UI = function() {
  return(
    <div>
      <DataRequest/>
    </div>
  )

}





  



