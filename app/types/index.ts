export interface Category{
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updateAt: string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    category: Category;
    stock: number;
    price: number;
    imageUrl: string;
    createdAt: string;
    updateAt: string;
}

export interface Bank {
    _id: string;
    bankName: string;
    accountNumber: string;
    createdAt: string;
    updateAt: string;

}

export interface Transaction{
    _id:string;
    paymentProof: string;
    status: "pending" | "paid" | "rejected";
    purchasedItems: {
        productId:string;
        qty:number;
    }
    totalPayment: string;
    customerName: string;
    customerContact: number | null;
    customerAddress: string;
    createdAtt: string;
    updateAtt: string;
}