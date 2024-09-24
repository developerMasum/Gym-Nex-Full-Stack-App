"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  useGetOfflinePaymentsQuery,
  useUpdatePaymentStatusMutation,
} from "@/redux/api/paymentApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const PaymentHistory = () => {
  const { data: membersData, isLoading } = useGetOfflinePaymentsQuery({});
  // console.log(membersData);
  const [updatePaymentStatus] = useUpdatePaymentStatusMutation();

  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [status, setStatus] = useState("PENDING");
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal state

  const openModal = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  const handleSubmit = async () => {
    if (selectedMember) {
      const data = {
        id: selectedMember.id,
        plan: selectedMember.plan,
        transactionId: selectedMember.transactionId,
        status: status,
      };
      console.log(data);
      try {
        await updatePaymentStatus(data).unwrap();
        toast.success("Payment status updated successfully");

        setIsModalOpen(false);
      } catch (error) {
        toast.error("Failed to update payment status");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-gray-200 font-bold mb-4 text-center">
        Payments
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {membersData?.map((member: any) => (
            <TableRow key={member.id}>
              <TableCell>{member.id}</TableCell>
              <TableCell>{member.user.name}</TableCell>
              <TableCell>{member.user.email}</TableCell>
              <TableCell>{member.plan}</TableCell>
              <TableCell>
                {new Date(member.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>{member.status}</TableCell>
              <TableCell>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="destructive"
                      onClick={() => openModal(member)}
                    >
                      Update Status
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Update Member Status</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                      <p>
                        <strong>Transaction ID:</strong> {selectedMember?.id}
                      </p>
                      <p>
                        <strong>Name:</strong> {selectedMember?.user.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {selectedMember?.user.email}
                      </p>
                      <p>
                        <strong>Current Plan:</strong>{" "}
                        {selectedMember?.user?.plan}
                      </p>
                      <p>
                        <strong>Requested Plan:</strong> {selectedMember?.plan}
                      </p>
                      <p>
                        <strong>Payment Date:</strong>
                        {new Date(
                          selectedMember?.createdAt
                        ).toLocaleDateString()}
                      </p>

                      <div className="mt-4">
                        <Select onValueChange={handleStatusChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PENDING">PENDING</SelectItem>
                            <SelectItem value="APPROVED">APPROVED</SelectItem>
                            <SelectItem value="REJECTED">REJECTED</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button variant="destructive" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentHistory;
