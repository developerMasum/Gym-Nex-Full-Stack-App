"use client";
import { useState, useEffect } from "react";
import Loading from "@/components/Common/Loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useGetSingleMemberShipPlanQuery } from "@/redux/api/membershipPlanApi";
import { getUserInfo } from "@/services/actions/auth.services";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useOfflinePaymentMutation } from "@/redux/api/paymentApi";
import { toast } from "sonner";
import Link from "next/link";

const PlansDetailsPage = () => {
  const details = usePathname();
  const id = details.split("/").pop();
  const { data, isLoading } = useGetSingleMemberShipPlanQuery(id);
  const user = getUserInfo();

  // Local state for controlled inputs
  const [offlinePayment] = useOfflinePaymentMutation();
  const [schedule, setSchedule] = useState("7:00-8:00");
  const [bank, setBank] = useState("Office Pay");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [membershipPlan, setMembershipPlan] = useState(null); // State to hold membership plan
  const router = useRouter();

  // Set default user info once it is available
  useEffect(() => {
    if (user) {
      setUserName(user?.name || "");
      setUserEmail(user?.email || "");
    }
  }, [user]);

  // Use useEffect to update membership plan when data changes
  useEffect(() => {
    if (data) {
      setMembershipPlan(data.plans);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  const transactionId = `${user?.id}${Date.now()}${Math.floor(
    Math.random() * 1000000
  )}`;

  // Function to handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      userId: user?.id,
      schedule,
      transactionId,
      plan: membershipPlan,
      amount: data?.amount,
    };

    try {
      await offlinePayment(formData).unwrap();
      toast.success("Payment successful");
      router.push("/adminResponse");
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <div className="w-[40%] mx-auto p-6 bg-[#313844] mt-32 my-20 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Complete your purchase
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <Input
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="bg-transparent"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">
            Email
          </label>
          <Input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="bg-transparent"
          />
        </div>

        {/* Select Schedule */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">
            Select Schedule
          </label>
          <Select value={schedule} onValueChange={setSchedule}>
            <SelectTrigger>
              <SelectValue placeholder="Select Schedule" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6:00-7:00">6:00-7:00</SelectItem>
              <SelectItem value="7:00-8:00">7:00-8:00</SelectItem>
              <SelectItem value="10:00-11:00">10:00-11:00</SelectItem>
              <SelectItem value="12:00-13:00">12:00-13:00</SelectItem>
              <SelectItem value="16:00-17:00">16:00-17:00</SelectItem>
              <SelectItem value="18:00-19:00">18:00-19:00</SelectItem>
              <SelectItem value="19:00-20:00">19:00-20:00</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Select Bank */}
        <div className="mb-6 bg-transparent">
          <label className="block text-sm font-medium text-gray-200">
            Select bank
          </label>
          <Select value={bank} onValueChange={setBank}>
            <SelectTrigger>
              <SelectValue placeholder="Select bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Office Pay">Office Pay</SelectItem>
              {/* <SelectItem value="Online Pay">Online Pay</SelectItem> */}
            </SelectContent>
          </Select>
        </div>

        {/* Product Information */}
        <div className="border-t pt-4 text-center">
          <div className="font-semibold text-gray-200">
            My selected plan:
            <span className="text-gray-400 uppercase ml-2">
              {membershipPlan}
            </span>
          </div>
          <div className="text-3xl text-gray-200 font-extrabold">
            {data?.amount} <span>€</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          After submitting your order, you will be redirected to securely
          complete your purchase.
        </p>

        <Button className="w-full bg-gradient-to-r from-red-500 to-amber-500 text-white py-2">
          Complete Payment
        </Button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Guaranteed safe & secure checkout
          </p>
          <div className="mt-2 flex justify-center space-x-2">
            <Image
              src="https://assets.weforum.org/organization/image/3aFMaJ3kyTD0580Nggta402aOQDX-KxPmM_GWtl2YNU.jpeg"
              alt="Visa"
              width={300}
              height={300}
              className="h-5 w-8"
            />
            <Image
              src="https://pbs.twimg.com/card_img/1835250773527085056/BDAifUft?format=jpg&name=large"
              alt="Mastercard"
              width={300}
              height={300}
              className="h-5 w-8"
            />
            <Image
              src="https://icon2.cleanpng.com/20180805/lzh/b8551b1e4094dfca7cab35420f9b74b9.webp"
              alt="Amex"
              width={300}
              height={300}
              className="h-5 w-8"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Powered by <strong>sslcommerz</strong>
          </p>
        </div>
      </form>
    </div>
  );
};

export default PlansDetailsPage;
