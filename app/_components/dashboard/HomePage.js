import React, { useState } from "react";
import PrimaryMetric from "./PrimaryMetric";
import DateSelector from "../inputs/DateSelector";
import { capitalizeString } from "@/app/_utils/utils";
import Transactions from "./Transactions";
import { transactionsData } from "@/app/_constants/transactionData";
import OptionTab from "./OptionTab";

const HomePage = () => {
  const [selectedDate, setSelectedDate] = useState("this_month");
  const [activeTab, setActiveTab] = useState("payouts");
  const tabOptions = [
    {
      label: "Payouts",
      id: "payouts",
      count: 20,
    },
    {
      label: "Refund",
      id: "refund",
      count: 10,
    },
  ];

  return (
    <div className="w-full p-9 h-[90vh] overflow-y-auto">
      <div className="w-full flex justify-between items-center mb-4">
        <h3 className="font-semibold text-xl">Overview</h3>
        <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <PrimaryMetric
          label="Next Payout"
          value="₹ 27,504.25"
          tooltip="Next payout amount that is yet to be received."
          isPrimary
          orderCount={23}
        />

        <PrimaryMetric
          label="Amount pending"
          value="₹ 92,312.20"
          tooltip="This amount is still being processed and will be settled to your bank account soon."
          orderCount={13}
        />
        <PrimaryMetric
          label="Amount processed"
          value="₹ 23,47,504.25"
          tooltip="This amount is been settled to your bank account."
        />
      </div>

      <div className="flex gap-2 mb-8">
        {tabOptions.map((tab) => (
          <OptionTab
            key={tab.id}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label={tab.label}
            count={tab.count}
            id={tab.id}
          />
        ))}
      </div>
      <h3 className="font-semibold text-xl mb-4">Transactions | {capitalizeString(selectedDate)}</h3>
      <Transactions transactionsData={transactionsData} />
    </div>
  );
};

export default HomePage;
