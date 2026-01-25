import ImageUploadPreview from "../ui/image-upload-preview";
import Modal from "../ui/modal";
import { useState } from "react";
import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";


type TTransactionModalProps ={
    isOpen: boolean;
    onClose: () => void;
};


const TransactionModal =({isOpen, onClose}: TTransactionModalProps) =>{


    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
            <div className="flex gap-6">
                <div>
                    <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
                    <Image
                    src="/images/payment-proof-dummy.png"
                    alt="Payment proof"
                    width={200}
                    height={401}
                    />
                </div>
                <div>
                    
                        <h4 className="font-semibold text-sm mb-2">Order Details</h4>
                        <div className="bg-gray-100 text-sm rounded-md flex flex-col gap-2.5 p-4 mb-5">
                            <div className="flex justify-between font-medium ">
                                <div className="opacity-50">Date</div>
                                <div className="text-right">23/02/2026 19:32</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Customer</div>
                                <div className="text-right">Shinici Kudo</div>
                            </div>
                            <div className="flex justify-between font-medium">
                                <div className="opacity-50">Contact</div>
                                <div className="text-right">098126428111</div>
                            </div>
                            <div className="flex justify-between gap-10 font-medium">
                                <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
                                <div className="text-right">Merdeka Street, Jakarta, Indonesia, 332122</div>
                            </div>
                        </div>
                        <h4 className="font-semibold text-sm mb-2">Items Purcashed</h4>
                        <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2">
                            <div className="bg-gray-100 rounded aspect-square w-8 h-">
                                <Image
                                src="/images/products/product-1.png"
                                width={30}
                                height={30}
                                alt="Product Iamge"
                                />
                            </div>
                            <div className="font-medium text-sm">SportOn Hyperfast Shirts</div>
                            <div className="font-medium ml-auto text-sm">3 units</div>
                        </div>
                        <div className="flex justify-between text-sm mt-6">
                            <h4 className="font-semibold">Total</h4>
                            <div className="font-semibold text-primary">{priceFormatter(459999)}</div>
                        </div>
                        <div className="flex justify-end gap-5 mt-12">
                            <Button className="text-primary! bg-primary-light! rounded-md!" size="small">
                               <FiX size={20}/> 
                                Reject
                            </Button>
                            <Button className="text-white! bg-[#50C252]! rounded-md!" size="small">
                               <FiCheck size={20}/> 
                                Approve
                            </Button>
                        </div>
                </div>

            </div>
        </Modal>
    )
}

export default TransactionModal;