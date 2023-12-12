/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace IPool {
  export type TokenAmountStruct = { token: AddressLike; amount: BigNumberish };

  export type TokenAmountStructOutput = [token: string, amount: bigint] & {
    token: string;
    amount: bigint;
  };
}

export interface BasePoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DOMAIN_SEPARATOR"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burn"
      | "burnSingle"
      | "decimals"
      | "getAmountIn"
      | "getAmountOut"
      | "getAssets"
      | "getProtocolFee"
      | "getReserves"
      | "getSwapFee"
      | "invariantLast"
      | "master"
      | "mint"
      | "name"
      | "nonces"
      | "permit"
      | "permit2"
      | "poolType"
      | "reserve0"
      | "reserve1"
      | "swap"
      | "symbol"
      | "token0"
      | "token1"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "vault"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "Burn"
      | "Mint"
      | "Swap"
      | "Sync"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BytesLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burnSingle",
    values: [BytesLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountIn",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getAssets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getProtocolFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFee",
    values: [AddressLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "invariantLast",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "master", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [BytesLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permit2",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "poolType", values?: undefined): string;
  encodeFunctionData(functionFragment: "reserve0", values?: undefined): string;
  encodeFunctionData(functionFragment: "reserve1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BytesLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnSingle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAssets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSwapFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "invariantLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "master", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolType", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserve0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserve1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BurnEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0: BigNumberish,
    amount1: BigNumberish,
    liquidity: BigNumberish,
    to: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    amount0: bigint,
    amount1: bigint,
    liquidity: bigint,
    to: string
  ];
  export interface OutputObject {
    sender: string;
    amount0: bigint;
    amount1: bigint;
    liquidity: bigint;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0: BigNumberish,
    amount1: BigNumberish,
    liquidity: BigNumberish,
    to: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    amount0: bigint,
    amount1: bigint,
    liquidity: bigint,
    to: string
  ];
  export interface OutputObject {
    sender: string;
    amount0: bigint;
    amount1: bigint;
    liquidity: bigint;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapEvent {
  export type InputTuple = [
    sender: AddressLike,
    amount0In: BigNumberish,
    amount1In: BigNumberish,
    amount0Out: BigNumberish,
    amount1Out: BigNumberish,
    to: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    amount0In: bigint,
    amount1In: bigint,
    amount0Out: bigint,
    amount1Out: bigint,
    to: string
  ];
  export interface OutputObject {
    sender: string;
    amount0In: bigint;
    amount1In: bigint;
    amount0Out: bigint;
    amount1Out: bigint;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SyncEvent {
  export type InputTuple = [reserve0: BigNumberish, reserve1: BigNumberish];
  export type OutputTuple = [reserve0: bigint, reserve1: bigint];
  export interface OutputObject {
    reserve0: bigint;
    reserve1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, amount: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BasePool extends BaseContract {
  connect(runner?: ContractRunner | null): BasePool;
  waitForDeployment(): Promise<this>;

  interface: BasePoolInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  burn: TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [IPool.TokenAmountStructOutput[]],
    "nonpayable"
  >;

  burnSingle: TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [IPool.TokenAmountStructOutput],
    "nonpayable"
  >;

  decimals: TypedContractMethod<[], [bigint], "view">;

  getAmountIn: TypedContractMethod<
    [tokenOut: AddressLike, amountOut: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;

  getAmountOut: TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;

  getAssets: TypedContractMethod<[], [string[]], "view">;

  getProtocolFee: TypedContractMethod<[], [bigint], "view">;

  getReserves: TypedContractMethod<[], [[bigint, bigint]], "view">;

  getSwapFee: TypedContractMethod<
    [
      sender: AddressLike,
      tokenIn: AddressLike,
      tokenOut: AddressLike,
      data: BytesLike
    ],
    [bigint],
    "view"
  >;

  invariantLast: TypedContractMethod<[], [bigint], "view">;

  master: TypedContractMethod<[], [string], "view">;

  mint: TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  permit: TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  permit2: TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  poolType: TypedContractMethod<[], [bigint], "view">;

  reserve0: TypedContractMethod<[], [bigint], "view">;

  reserve1: TypedContractMethod<[], [bigint], "view">;

  swap: TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [IPool.TokenAmountStructOutput],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  token0: TypedContractMethod<[], [string], "view">;

  token1: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  vault: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [IPool.TokenAmountStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnSingle"
  ): TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [IPool.TokenAmountStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAmountIn"
  ): TypedContractMethod<
    [tokenOut: AddressLike, amountOut: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountOut"
  ): TypedContractMethod<
    [tokenIn: AddressLike, amountIn: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAssets"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getProtocolFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getReserves"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "getSwapFee"
  ): TypedContractMethod<
    [
      sender: AddressLike,
      tokenIn: AddressLike,
      tokenOut: AddressLike,
      data: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "invariantLast"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "master"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "permit"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      value: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "permit2"
  ): TypedContractMethod<
    [
      owner: AddressLike,
      spender: AddressLike,
      amount: BigNumberish,
      deadline: BigNumberish,
      signature: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "poolType"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserve0"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "reserve1"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      data: BytesLike,
      sender: AddressLike,
      callback: AddressLike,
      callbackData: BytesLike
    ],
    [IPool.TokenAmountStructOutput],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "token1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Burn"
  ): TypedContractEvent<
    BurnEvent.InputTuple,
    BurnEvent.OutputTuple,
    BurnEvent.OutputObject
  >;
  getEvent(
    key: "Mint"
  ): TypedContractEvent<
    MintEvent.InputTuple,
    MintEvent.OutputTuple,
    MintEvent.OutputObject
  >;
  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;
  getEvent(
    key: "Sync"
  ): TypedContractEvent<
    SyncEvent.InputTuple,
    SyncEvent.OutputTuple,
    SyncEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Burn(address,uint256,uint256,uint256,address)": TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;
    Burn: TypedContractEvent<
      BurnEvent.InputTuple,
      BurnEvent.OutputTuple,
      BurnEvent.OutputObject
    >;

    "Mint(address,uint256,uint256,uint256,address)": TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;
    Mint: TypedContractEvent<
      MintEvent.InputTuple,
      MintEvent.OutputTuple,
      MintEvent.OutputObject
    >;

    "Swap(address,uint256,uint256,uint256,uint256,address)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;

    "Sync(uint256,uint256)": TypedContractEvent<
      SyncEvent.InputTuple,
      SyncEvent.OutputTuple,
      SyncEvent.OutputObject
    >;
    Sync: TypedContractEvent<
      SyncEvent.InputTuple,
      SyncEvent.OutputTuple,
      SyncEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
