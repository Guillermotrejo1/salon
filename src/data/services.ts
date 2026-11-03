export type Service = {
    id:string;
    name: string;
    price: string;
    description?: string
}

export const services: Service[] = [
    {id:"acrylic", name: "Acrylic", price: "$35+"},
    {id:"gel-x", name: "Gel-X Extensions", price: "$35+"},
    {id:"art", name: "Nail Art/Designs", price: "$55+"},
    {id:"fill", name: "Fill/Rebalance", price: "$35+"},
]