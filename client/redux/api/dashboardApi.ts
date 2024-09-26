import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta } from "@/types";
// import { TAdmin } from "@/types/admin";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardData: build.query({
      query: () => ({
        url: "/dashboard/count",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    getMonthWisePaymentUpdate: build.query({
      query: () => ({
        url: "/payment-count",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    getMonthWiseUserUpdate: build.query({
      query: () => ({
        url: "/dashboard/user-count",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    getYearlyIncome: build.query({
      query: () => ({
        url: "/yearly-income",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    gestBestDonners: build.query({
      query: () => ({
        url: "/dashboard/best-donors",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useGetDashboardDataQuery,
  useGetMonthWisePaymentUpdateQuery,
  useGetMonthWiseUserUpdateQuery,
  useGetYearlyIncomeQuery,

  useGestBestDonnersQuery,
} = dashboardApi;
