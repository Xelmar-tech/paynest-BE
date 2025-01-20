const RegistryABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "getUserAddress",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateUserAddress",
    inputs: [
      { name: "username", type: "string", internalType: "string" },
      { name: "userAddress", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "UserAddressUpdated",
    inputs: [
      {
        name: "username",
        type: "string",
        indexed: true,
        internalType: "string",
      },
      {
        name: "newAddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ActivePayment",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
  },
  {
    type: "error",
    name: "InActivePayment",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
  },
  { type: "error", name: "IncompatibleUserAddress", inputs: [] },
  { type: "error", name: "InsufficientBalance", inputs: [] },
  { type: "error", name: "InsufficientFee", inputs: [] },
  { type: "error", name: "InvalidAmount", inputs: [] },
  { type: "error", name: "InvalidStreamEnd", inputs: [] },
  { type: "error", name: "MaxOrganizationsReached", inputs: [] },
  { type: "error", name: "NoPayoutDue", inputs: [] },
  { type: "error", name: "NotAuthorized", inputs: [] },
  { type: "error", name: "TokenAlreadySupported", inputs: [] },
  { type: "error", name: "TokenNotSupported", inputs: [] },
  {
    type: "error",
    name: "UserNotFound",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
  },
] as const;
