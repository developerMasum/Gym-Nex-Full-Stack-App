import { USER_ROLE } from "@/constants/role";
import { ISidebarItem, UserRole } from "@/types";

import { UserCog, Home, Users, FileKey } from "lucide-react";

export const drawerItems = (role: UserRole): ISidebarItem[] => {
  // console.log(role);
  const roleMenus: ISidebarItem[] = [];
  const defaultMenus = [
    {
      title: "Change Password",
      path: `change-password`,
      icon: FileKey,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Home,
        },
        {
          title: "Members",
          path: `${role}/members`,
          icon: Users,
        },
        {
          title: "Trainers",
          path: `${role}/trainers`,
          icon: Users,
        },
        {
          title: "Payments",
          path: `${role}/payments`,
          icon: Users,
        },
        {
          title: "Salaries",
          path: `${role}/salaries`,
          icon: Users,
        },
        {
          title: "Equipments",
          path: `${role}/equipments`,
          icon: UserCog,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "My Report",
          path: `${role}/my-report`,
          icon: UserCog,
        },
        {
          title: "My Classes",
          path: `${role}/my-classes`,
          icon: UserCog,
        },
        {
          title: "My Diet Plan",
          path: `${role}/my-diet`,
          icon: UserCog,
        },
        {
          title: "My Workout",
          path: `${role}/my-workout`,
          icon: UserCog,
        },

        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: UserCog,
        },
        {
          title: "My Profile",
          path: `${role}/my-profile`,
          icon: UserCog,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
