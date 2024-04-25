export const DEV_MODE = false && location.hostname === 'localhost';
// export const DEV_MODE = false;

export const TLD = '3digitsclub';

export const SUB_TEXT = 'Decentralized domains for websites, wallets and web3';
export const SEARCH_PLACEHOLDER = 'Find your .' + TLD;
export const PAGE_TITLE = 'Be part of .3DigitsClub';

// export const TWITTER_HANDLE = 'walletdomain';

// Check https://cloud.walletconnect.com/
export const WALLET_CONNECT_APP_NAME = '.3DigitsClub';
export const WALLET_CONNECT_PROJECT_ID = 'f466be1e836997ab63718affd9ca42f5';

export const STATUS_CONTRACT_ADDR = DEV_MODE
  ? '0x075489a52BcF5cd91c589046C3F5807e7fFC3647'
  : '0xa89356391fB34e18360E79102536daD46F4a4199';

export const REGISTER_CONTRACT_ADDR = DEV_MODE
  ? '0x529B2b5B576c27769Ae0aB811F1655012f756C00'
  : '0xfda87CC032cD641ac192027353e5B25261dfe6b3';

export const PRIMARY_NAME_CONTRACT_ADDR = DEV_MODE
  ? '0x342d6524829bedfF5Ce9f56cd56d5baAcf3dbC58'
  : '0xDDa56f06D80f3D8E3E35159701A63753f39c3BCB';
