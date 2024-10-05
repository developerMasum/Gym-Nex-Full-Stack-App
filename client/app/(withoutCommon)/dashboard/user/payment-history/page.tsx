"use client";
import Loading from "@/components/Common/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import { useGetMyOfflinePaymentsHistoryQuery } from "@/redux/api/paymentApi";
import { useGetMyselfQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/actions/auth.services";

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
  const { data, isLoading: isFetching } = useGetMyselfQuery({});
  // console.log(data);
  // const id = ;
  const { data: invoices, isLoading } = useGetMyOfflinePaymentsHistoryQuery(
    data?.id
  );

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className="bg-transparent flex flex-col items-center justify-center">
      {isLoading ? (
        <Loading />
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
            {invoices?.length > 0 ? (
              invoices?.map((invoice: any, index: number) => (
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
