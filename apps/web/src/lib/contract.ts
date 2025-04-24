import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './contract-abi';
import type { ISubmittableResult } from '@polkadot/types/types';
import BN from 'bn.js';

// Define the type for injected accounts
interface InjectedAccountWithMeta {
  address: string;
  meta: {
    name?: string;
    source: string;
  };
}

let api: ApiPromise | null = null;
let contract: ContractPromise | null = null;

export async function initializeApi() {
  if (api) return api;
  
  const wsEndpoint = process.env.NEXT_PUBLIC_WS_ENDPOINT || 'ws://127.0.0.1:9944';
  const wsProvider = new WsProvider(wsEndpoint);
  api = await ApiPromise.create({ provider: wsProvider });
  return api;
}

export async function initializeContract() {
  if (!CONTRACT_ADDRESS) {
    throw new Error('Contract address not configured');
  }
  
  if (contract) return contract;
  
  const api = await initializeApi();
  contract = new ContractPromise(api, CONTRACT_ABI, CONTRACT_ADDRESS);
  return contract;
}

export async function getTokenBalance(address: string): Promise<string> {
  try {
    const contract = await initializeContract();
    const api = await initializeApi();
    
    // Call the PSP22 balanceOf function
    const result = await contract.query.balanceOf(
      address,
      { gasLimit: api.registry.createType('WeightV2', { 
          refTime: new BN(1000000000), 
          proofSize: new BN(10000) 
        }) 
      },
      address
    );
    
    if (result.result.isOk) {
      // Format the balance
      const balance = result.output?.toString() || '0';
      return balance;
    }
    
    return '0';
  } catch (error) {
    console.error('Error getting token balance:', error);
    return '0';
  }
}

export async function mintTokens(
  signer: InjectedAccountWithMeta,
  amount: string
): Promise<boolean> {
  try {
    const contract = await initializeContract();
    const api = await initializeApi();
    
    // Call the mint function from the contract
    const tx = contract.tx.mint(
      { gasLimit: api.registry.createType('WeightV2', { 
          refTime: new BN(2000000000),
          proofSize: new BN(20000) 
        })
      },
      signer.address,
      amount
    );
    
    // Sign and send the transaction
    await tx.signAndSend(signer.address);
    return true;
  } catch (error) {
    console.error('Error minting tokens:', error);
    return false;
  }
} 