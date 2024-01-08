import React from "react";
import SearchBar from "../inputs/SearchBar";
import StatusIndicator from "../UI/StatusIndicator";
import { LuArrowUpDown } from "react-icons/lu";
import { GrDownload } from "react-icons/gr";

const Transactions = ({ transactionsData }) => {
  return (
    <div className="bg-white rounded-lg p-3">
      <div className="flex justify-between">
        <div className="w-72 mb-3">
          <SearchBar placeholder="Order ID or Transaction ID" size="sm" white border />
        </div>
        <div className="flex gap-3">
          <span>
            <div className="cursor-pointer py-2 px-3 border-2 rounded-md flex gap-2 items-center">
              <span>Sort</span>
              <LuArrowUpDown />
            </div>
          </span>
          <span>
            <div className="cursor-pointer py-3 px-3 border-2 rounded-md flex gap-2 items-center">
              <GrDownload />
            </div>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 text-center font-medium justify-center text-neutral-600 text-sm bg-neutral-200/60 rounded-md shadow-sm">
        <div className="py-3 px-4 text-left">Order ID</div>
        <div className="py-3 px-4 ">Status</div>
        <div className="py-3 px-4 ">Transaction ID</div>
        <div className="py-3 px-4 ">Refund date</div>
        <div className="py-3 px-4 text-right">Order amount</div>
      </div>

      <div>
        {transactionsData?.map((transaction, index) => (
          <div
            key={transaction.orderId}
            className={`grid grid-cols-5 text-center font-medium justify-center text-neutral-600 text-sm 1 ${
              index + 1 !== transactionsData.length && "border-b border-neutral-200"
            }`}
          >
            <div className="py-3 px-4 text-left text-blue-500 hover:underline cursor-pointer transition-all hover:font-semibold">
              #{transaction.orderId}
            </div>
            <div className="py-3 px-4 text-center flex gap-1 items-center justify-center">
              <StatusIndicator status={transaction.status} />
              {transaction.status}
            </div>
            <div className="py-3 px-4 text-center">{transaction.transactionId}</div>
            <div className="py-3 px-4 text-center">{transaction.refundDate}</div>
            <div className="py-3 px-4 text-right">{`₹ ${transaction.orderAmount.toFixed(2)}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
