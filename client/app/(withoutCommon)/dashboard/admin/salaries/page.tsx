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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

// Dummy salary data for demonstration (replace this with API call)
const salariesData = [
  {
    id: "1",
    trainerName: "John Doe",
    salaryDate: "2024-09-25",
    role: "Trainer",
    status: "PENDING",
    monthName: "September",
    amount: 3000,
  },
  {
    id: "2",
    trainerName: "Jane Smith",
    salaryDate: "2024-08-25",
    role: "Gym Member",
    status: "PENDING",
    monthName: "August",
    amount: 3200,
  },
];

const Salaries = () => {
  const [selectedSalary, setSelectedSalary] = useState<any>(null);
  const [status, setStatus] = useState("PENDING");
  const [isModalOpen, setIsModalOpen] = useState(false); // Control modal state

  const openModal = (salary: any) => {
    setSelectedSalary(salary);
    setIsModalOpen(true);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  const handleSubmit = async () => {
    if (selectedSalary) {
      const data = {
        id: selectedSalary.id,
        trainerName: selectedSalary.trainerName,
        monthName: selectedSalary.monthName,
        amount: selectedSalary.amount,
        status: status,
      };
      // console.log(data);
      try {
        // Assume updateSalaryStatus API call here
        // await updateSalaryStatus(data).unwrap();
        toast.success("Salary status updated successfully");
        setIsModalOpen(false);
      } catch (error) {
        toast.error("Failed to update salary status");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-gray-200 font-bold mb-4 text-center">
        Employee Salaries
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Trainer Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Month</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {salariesData.map((salary: any) => (
            <TableRow key={salary.id}>
              <TableCell>{salary.trainerName}</TableCell>
              <TableCell>{salary.role}</TableCell>
              <TableCell>{salary.monthName}</TableCell>
              <TableCell>${salary.amount}</TableCell>
              <TableCell>{salary.status}</TableCell>
              <TableCell>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="destructive"
                      onClick={() => openModal(salary)}
                    >
                      Update Payment
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Update Salary Status</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                      <p>
                        <strong>Trainer Name:</strong>{" "}
                        {selectedSalary?.trainerName}
                      </p>
                      <p>
                        <strong>Month:</strong> {selectedSalary?.monthName}
                      </p>
                      <p>
                        <strong>Amount:</strong> ${selectedSalary?.amount}
                      </p>
                      <p>
                        <strong>Salary Date:</strong>{" "}
                        {new Date(
                          selectedSalary?.salaryDate
                        ).toLocaleDateString()}
                      </p>
                      <div className="mt-4">
                        <Select onValueChange={handleStatusChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PENDING">PENDING</SelectItem>
                            <SelectItem value="PAID">PAID</SelectItem>
                            <SelectItem value="CANCELLED">CANCELLED</SelectItem>
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

export default Salaries;
