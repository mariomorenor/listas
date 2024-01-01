export type Client = {
    id: number,
    name: string,
    last_name: string,
    code: string,
    order: number
}

export type List = {
    id: number,
    date: string,
    total: number,
    records: Record[]
}

export type Record = {
    id: number,
    client: Client,
    quantity: number,
    date: string
}