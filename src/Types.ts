export interface Transaction {
    hash: string
    time: number
    block_index: number
    inputs: {prev_out:{value:number}}[]
}
export interface Address {
    address: string
    n_tx: number
    final_balance: number
    total_received: number
    total_sent: number
    inputs: {prev_out:{value:number}}[]
}