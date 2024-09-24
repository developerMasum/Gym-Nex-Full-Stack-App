// const WithoutCommonLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <div className="w-full h-full  font-sans ">{children}</div>
//     </>
//   );
// };

// export default WithoutCommonLayout;

import { DashboardLayout } from "@/components/Dashboard/Sidebar/DashboardLayout";

const DashboardLayoutNew = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default DashboardLayoutNew;
