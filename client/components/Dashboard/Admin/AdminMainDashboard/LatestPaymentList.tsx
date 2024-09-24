import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LatestPaymentList: React.FC = () => {
  // Sample payment data
  const paymentData = [
    {
      id: "001",
      name: "John Doe",
      plan: "Gold",
      paymentMethod: "Credit Card",
      date: "2024-09-22",
      time: "10:30 AM",
    },
    {
      id: "002",
      name: "Jane Smith",
      plan: "Platinum",
      paymentMethod: "PayPal",
      date: "2024-09-22",
      time: "11:15 AM",
    },
    {
      id: "003",
      name: "Mark Johnson",
      plan: "Special",
      paymentMethod: "Bank Transfer",
      date: "2024-09-21",
      time: "09:45 AM",
    },
    {
      id: "004",
      name: "Sarah Lee",
      plan: "Gold",
      paymentMethod: "Crypto",
      date: "2024-09-21",
      time: "12:00 PM",
    },
    {
      id: "005",
      name: "Emma Watson",
      plan: "Special",
      paymentMethod: "Debit Card",
      date: "2024-09-20",
      time: "08:25 AM",
    },
  ];

  return (
    <div className="container mx-auto p-4 shadow-2xl px-3 py-2">
      <h1 className="text-xl font-bold mb-4 text-slate-200">Latest Payments</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentData.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.id}</TableCell>
              <TableCell>{payment.name}</TableCell>
              <TableCell>{payment.plan}</TableCell>
              <TableCell>{payment.paymentMethod}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LatestPaymentList;
