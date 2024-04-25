import { namehash, zeroAddress } from 'viem';
import { useAccount, useReadContract } from 'wagmi';
import { abi } from '../abi';
import { STATUS_CONTRACT_ADDR, TLD } from '../constants';

export const useDomainStatus = ({
  label,
  buyer,
  registrationDays = BigInt(365),
  parentHash = namehash(TLD),
} = {}) => {
  const { address } = useAccount();
  const is3Digits = /^\d{3}$/.test(label);
  const hook = useReadContract({
    address: STATUS_CONTRACT_ADDR,
    functionName: 'getDomainDetails',
    abi: abi,
    args: [
      buyer || address || zeroAddress,
      registrationDays,
      parentHash,
      label,
    ],
    query: {
      enabled: is3Digits,
      select: (data) => {
        data.isPremium = false;

        // remove 0x00
        if (data.owner === zeroAddress) {
          data.owner = undefined;
        }

        if (data.reservedAddress === zeroAddress) {
          data.reservedAddress = undefined;
        }

        if (data.expiry === 0n) {
          data.expiry = undefined;
        } else {
          data.expiry = new Date(Number(data.expiry) * 1000);
        }

        // price comes in cents: 100 = 1.00
        data.priceInDollars = Number(data.priceInDollars / 100n).toFixed(2);

        data.label = label;

        return data;
      },
    },
  });

  if (!is3Digits) {
    return {
      data: {
        label,
        isAvailable: false,
        labelValid: false,
        publicRegistrationOpen: false,
      },
      isLoading: false,
    };
  }

  return hook;
};
