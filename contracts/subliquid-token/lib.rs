#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[openbrush::implementation(PSP22, PSP22Mintable)]
#[openbrush::contract]
pub mod subliquid_token {
    use openbrush::traits::Storage;

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct SubliquidToken {
        #[storage_field]
        psp22: psp22::Data,
    }

    impl SubliquidToken {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self {
            let mut instance = Self::default();
            instance._mint_to(Self::env().caller(), initial_supply).expect("Should mint initial supply");
            instance
        }
    }
}
