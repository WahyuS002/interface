import { chain as Chains } from "wagmi";

// Markets Metadata
export type Metadata = {
    logo: string;
    vaultLogo: string;
    title: string;
    subtitle: string;
    path: string;
    description: string;
    informationText: string;
    vaultInformationText: string;
    collateralSymbol: string;
    collateralDecimals: number;
    collateralContract: string;
    debtSymbol: string;
    debtDecimals: number;
    debtContract: string;
    uniswapSwapURL: string;
    oracleContract: string;
};
export type MarketMetadata = Record<string, Metadata>;
export type MarketMetadataRecord = Record<number, MarketMetadata>;
export const Metadata: MarketMetadataRecord = {
    [Chains.kovan.id]: {
        ["0xc4676f88663360155c2bc6d2A482E34121a50b3b"]: {
            title: "ETHRISE",
            subtitle: "ETH Leverage Market",
            logo: "/markets/ethrise.svg",
            vaultLogo: "/markets/usdc.svg",
            path: "/markets/ethrise",
            description:
                "Enjoy leveraged ETH without risk of liquidation or earn yield from your idle USDC",
            informationText:
                "ETHRISE is a leveraged token that goes 2x long ETH. It generates 1.75x-2.5x leveraged gains when the price of ETH rises.",
            vaultInformationText:
                "rvETHUSDC is an interest-bearing token that increase value overtime. Start earning variable interest rate in real time by depositing USDC.",
            collateralSymbol: "ETH",
            collateralDecimals: 18, // ETH is 18 decimals
            collateralContract: "0x4470E84Ce5C1fe89EA35a19560b6f2b1Ed71507f",
            debtSymbol: "USDC",
            debtDecimals: 6, // USDC is 6 decimals
            debtContract: "0x0af08696cb51e81456dc0a1dee7f8bfad8d82a22",
            uniswapSwapURL: "#",
            oracleContract: "0x1F6Ec9B472b5EB3c7aA617Ce45ea2ed4f1A2db7D",
        },
    },
};
