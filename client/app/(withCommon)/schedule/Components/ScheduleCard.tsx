// import React from "react";
// import Image from "next/image";
// import assets from "@/assets";

// const ScheduleCard = ({ time, classes }: any) => {
//   const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-[#0A0A17] border border-gray-700">
//         <thead>
//           <tr className="text-white">
//             <th className="border border-gray-700 p-2">Time</th>
//             {days.map((day) => (
//               <th key={day} className="border border-gray-700 p-2">
//                 {day}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="text-white">
//             <td className="border border-gray-700 p-2">{time}</td>
//             {days.map((day) => (
//               <td key={day} className="border border-gray-700 p-2">
//                 {classes[day] ? (
//                   <div className="flex items-center">
//                     <Image
//                       src={assets.trainer[classes[day].trainerImage]}
//                       alt={`${classes[day].trainerName} - ${classes[day].className}`}
//                       width={50}
//                       height={50}
//                       className="object-cover rounded-full inline-block mr-2"
//                     />
//                     <div>
//                       <strong>{classes[day].className}</strong>
//                       <br />
//                       {classes[day].trainerName}
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="text-gray-500">No Class</div>
//                 )}
//               </td>
//             ))}
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ScheduleCard;
