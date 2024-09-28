"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import SearchInput from "@/components/Reuseable/SearchInput";
import { useGetMyOfflinePaymentsHistoryQuery } from "@/redux/api/paymentApi";
import { getUserInfo } from "@/services/actions/auth.services";
import React, { useState } from "react";

interface Invoice {
  id: string;
  status: string;
  method?: string;
  amount: number;
  plan: string;
  schedule: string;
  transactionId: string;
  createdAt: string;
}

const PaymentHistory = () => {
  const { id } = getUserInfo();
  const { data: invoices, isLoading } = useGetMyOfflinePaymentsHistoryQuery(id);

  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter invoices based on search term
  const filteredInvoices = invoices?.filter((invoice: Invoice) => {
    const formattedDate = new Date(invoice.createdAt).toLocaleDateString();
    return (
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formattedDate.includes(searchTerm) || // Check against formatted date
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.plan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.schedule.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.amount.toString().includes(searchTerm)
    );
  });

  return (
    <div className="bg-transparent flex flex-col items-center justify-center">
      <div className="mb-4 w-1/2 flex justify-center">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices?.length > 0 ? (
              filteredInvoices?.map((invoice: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>
                    {new Date(invoice.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{invoice.plan}</TableCell>
                  <TableCell>{invoice.schedule}</TableCell>
                  <TableCell>{invoice.transactionId}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          <TableCaption>A list of your recent invoices.</TableCaption>
        </Table>
      )}
    </div>
  );
};

export default PaymentHistory;
