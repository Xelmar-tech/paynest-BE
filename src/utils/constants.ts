/// <reference path="../types/chains.d.ts" />

import { getEnvVariable } from "./config";

export const RegistryContract = "0xDB9B936373f859Ce8C580Bbc35b0Eab89cA9fd70";
export const RegistryKey = getEnvVariable("REGISTRY_KEY") as Address;
export const PaymentKey = getEnvVariable("PAYMENT_KEY") as Address
