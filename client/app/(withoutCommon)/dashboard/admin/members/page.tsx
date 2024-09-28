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
import { useDeleteUserMutation, useGetAllUserQuery } from "@/redux/api/userApi";
import { toast } from "sonner";
import { Fade } from "react-awesome-reveal";

const Members = () => {
  const [deleteUser] = useDeleteUserMutation();
  const { data: membersData, isLoading } = useGetAllUserQuery({});
  // console.log(membersData);
  // Sample member data

  // Handle delete action
  const handleDelete = async (id: string) => {
    console.log(`Deleting member with id: ${id}`);
    try {
      await deleteUser(id).unwrap();
      toast.success("Member deleted successfully");
    } catch (error) {
      toast.error("Failed to delete member");
    }
    console.log(`Deleting member with id: ${id}`);
    // Implement the delete functionality here
  };

  return (
    <div className="container mx-auto p-4">
      <Fade>
        {" "}
        <h1 className="text-xl font-bold mb-4 text-gray-200 text-center">
          Members List
        </h1>
      </Fade>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>

            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {membersData?.map((member: any, index: number) => (
            <TableRow key={member.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.phone}</TableCell>

              <TableCell>
                <Button
                  onClick={() => handleDelete(member.id)}
                  variant="destructive"
                  size="sm"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Members;
