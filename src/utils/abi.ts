const abi = [
  {
    type: "constructor",
    inputs: [
      { name: "_owner", type: "address", internalType: "address" },
      { name: "_name", type: "string", internalType: "string" },
    ],
    stateMutability: "payable",
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "cancelSchedule",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "cancelStream",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createSchedule",
    inputs: [
      { name: "username", type: "string", internalType: "string" },
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "token", type: "address", internalType: "address" },
      { name: "interval", type: "uint8", internalType: "enum IPayments.IntervalType" },
      { name: "isOneTime", type: "bool", internalType: "bool" },
      { name: "firstPaymentDate", type: "uint40", internalType: "uint40" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createStream",
    inputs: [
      { name: "username", type: "string", internalType: "string" },
      { name: "amount", type: "uint256", internalType: "uint256" },
      { name: "token", type: "address", internalType: "address" },
      { name: "endStream", type: "uint40", internalType: "uint40" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "editSchedule",
    inputs: [
      { name: "username", type: "string", internalType: "string" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "editStream",
    inputs: [
      { name: "username", type: "string", internalType: "string" },
      { name: "amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getSchedule",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPayments.Schedule",
        components: [
          { name: "token", type: "address", internalType: "address" },
          { name: "nextPayout", type: "uint40", internalType: "uint40" },
          { name: "interval", type: "uint8", internalType: "enum IPayments.IntervalType" },
          { name: "isOneTime", type: "bool", internalType: "bool" },
          { name: "active", type: "bool", internalType: "bool" },
          { name: "amount", type: "uint256", internalType: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getStream",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IPayments.Stream",
        components: [
          { name: "token", type: "address", internalType: "address" },
          { name: "endDate", type: "uint40", internalType: "uint40" },
          { name: "active", type: "bool", internalType: "bool" },
          { name: "amount", type: "uint256", internalType: "uint256" },
          { name: "lastPayout", type: "uint40", internalType: "uint40" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "orgName",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "requestSchedulePayout",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "requestStreamPayout",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
    outputs: [{ name: "payoutAmount", type: "uint256", internalType: "uint256" }],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "PaymentScheduleCancelled",
    inputs: [{ name: "username", type: "string", indexed: false, internalType: "string" }],
    anonymous: false,
  },
  {
    type: "event",
    name: "PaymentStreamCancelled",
    inputs: [{ name: "username", type: "string", indexed: false, internalType: "string" }],
    anonymous: false,
  },
  {
    type: "event",
    name: "ScheduleActive",
    inputs: [
      { name: "username", type: "string", indexed: false, internalType: "string" },
      { name: "token", type: "address", indexed: false, internalType: "address" },
      { name: "nextPayout", type: "uint40", indexed: false, internalType: "uint40" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SchedulePayout",
    inputs: [
      { name: "username", type: "string", indexed: false, internalType: "string" },
      { name: "token", type: "address", indexed: false, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ScheduleUpdated",
    inputs: [
      { name: "username", type: "string", indexed: false, internalType: "string" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StreamActive",
    inputs: [
      { name: "username", type: "string", indexed: false, internalType: "string" },
      { name: "token", type: "address", indexed: false, internalType: "address" },
      { name: "endDate", type: "uint40", indexed: false, internalType: "uint40" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StreamPayout",
    inputs: [
      { name: "username", type: "string", indexed: false, internalType: "string" },
      { name: "token", type: "address", indexed: false, internalType: "address" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StreamUpdated",
    inputs: [
      { name: "username", type: "string", indexed: false, internalType: "string" },
      { name: "amount", type: "uint256", indexed: false, internalType: "uint256" },
    ],
    anonymous: false,
  },
  { type: "error", name: "ActivePayment", inputs: [{ name: "username", type: "string", internalType: "string" }] },
  { type: "error", name: "EmptyUsernameNotAllowed", inputs: [] },
  { type: "error", name: "InActivePayment", inputs: [{ name: "username", type: "string", internalType: "string" }] },
  { type: "error", name: "IncompatibleUserAddress", inputs: [] },
  { type: "error", name: "InsufficientBalance", inputs: [] },
  { type: "error", name: "InsufficientFee", inputs: [] },
  { type: "error", name: "InvalidAmount", inputs: [] },
  { type: "error", name: "InvalidEndDate", inputs: [] },
  { type: "error", name: "InvalidFirstPaymentDate", inputs: [] },
  { type: "error", name: "InvalidInterval", inputs: [] },
  { type: "error", name: "InvalidStreamEnd", inputs: [] },
  { type: "error", name: "InvalidSubscriptionPeriod", inputs: [] },
  { type: "error", name: "MaxOrganizationsReached", inputs: [] },
  { type: "error", name: "NoActivePayment", inputs: [{ name: "username", type: "string", internalType: "string" }] },
  { type: "error", name: "NoEditAccess", inputs: [] },
  { type: "error", name: "NoPayoutDue", inputs: [] },
  { type: "error", name: "NotAuthorized", inputs: [] },
  { type: "error", name: "TokenAlreadySupported", inputs: [] },
  { type: "error", name: "TokenNotSupported", inputs: [] },
  { type: "error", name: "UserNotClaimor", inputs: [] },
  { type: "error", name: "UserNotFound", inputs: [{ name: "username", type: "string", internalType: "string" }] },
  {
    type: "error",
    name: "UsernameAlreadyClaimed",
    inputs: [{ name: "username", type: "string", internalType: "string" }],
  },
] as const;

export default abi;

// const filters = abi.filter(ab => ab.type === "event")
