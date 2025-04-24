// This file will contain the ABI after contract compilation
// You'll need to update this with the actual ABI from the compiled contract

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';

export const CONTRACT_ABI = {
  "source": {
    "hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "language": "ink! 4.2.0",
    "compiler": "rustc 1.70.0",
    "build_info": {
      "build_mode": "Debug",
      "cargo_contract_version": "3.0.1",
      "rust_toolchain": "stable-aarch64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "subliquid_token",
    "version": "0.1.0",
    "authors": [
      "Subliquid Team"
    ]
  },
  "V3": {
    "spec": {
      "constructors": [
        {
          "args": [
            {
              "label": "initial_supply",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [],
          "label": "new",
          "payable": false,
          "returnType": {
            "displayName": [
              "ink_primitives",
              "ConstructorResult"
            ],
            "type": 1
          },
          "selector": "0x9bae9d5e"
        }
      ],
      "docs": [],
      "events": [],
      "messages": [
        {
          "args": [
            {
              "label": "account",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 5
              }
            }
          ],
          "docs": [],
          "label": "PSP22::balance_of",
          "mutates": false,
          "payable": false,
          "returnType": {
            "displayName": [
              "ink",
              "MessageResult"
            ],
            "type": 6
          },
          "selector": "0x6568382f"
        },
        {
          "args": [
            {
              "label": "to",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 5
              }
            },
            {
              "label": "value",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            },
            {
              "label": "data",
              "type": {
                "displayName": [
                  "Vec"
                ],
                "type": 11
              }
            }
          ],
          "docs": [],
          "label": "PSP22::transfer",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ink",
              "MessageResult"
            ],
            "type": 12
          },
          "selector": "0xdb20f9f5"
        },
        {
          "args": [
            {
              "label": "to",
              "type": {
                "displayName": [
                  "AccountId"
                ],
                "type": 5
              }
            },
            {
              "label": "amount",
              "type": {
                "displayName": [
                  "Balance"
                ],
                "type": 0
              }
            }
          ],
          "docs": [],
          "label": "PSP22Mintable::mint",
          "mutates": true,
          "payable": false,
          "returnType": {
            "displayName": [
              "ink",
              "MessageResult"
            ],
            "type": 12
          },
          "selector": "0xfc3c75d4"
        }
      ]
    }
  }
}; 