"use client";
import { Card } from "@/components/Common/Card";
import { List } from "@/components/Common/List";
import Loading from "@/components/Common/Loading";
import { Text } from "@/components/Common/Text";
// import { MembershipPlans } from "@/lib/data";
import { useGetMemberShipPlanQuery } from "@/redux/api/membershipPlanApi";
import Link from "next/link";

const Membership = () => {
  const { data: membershipPlan, isLoading } = useGetMemberShipPlanQuery({});
  // console.log(membershipPlan);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="w-full  h-auto py-20 md:py-28 lg:py-40 bg-zinc-950 flex flex-col md:gap-28 gap-20 justify-center items-center">
      <div>
        <Text as="h1" className="text-4xl font-bold text-center text-zinc-100">
          Try us for Free,
        </Text>
        <Text as="h5" className="text-4xl font-thin text-center text-zinc-100">
          Get your free 1-day pass!
        </Text>
      </div>
      <main className="grid lg:w-[90%] md:w-[96%] w-[90%] md:grid-cols-3 items-center gap-8 md:gap-4 lg:gap-8">
        {membershipPlan?.map((card: any) => (
          <Link key={card.amount} href={`/membership-plan/${card.id}`}>
            <Card
              className={`w-full flex flex-col items-center gap-4 border border-zinc-500  transition-all duration-200 cursor-pointer hover:border-red-500/50 ${
                card === 1 ? "lg:py-16 py-10" : "py-10"
              }`}
            >
              <Text as="h2" className="text-zinc-100 flex items-end gap-0.5">
                <span className="font-extrabold text-2xl">$</span>
                <span
                  className={`font-extrabold ${
                    card.amount === 49 ? "text-6xl" : "text-5xl"
                  }`}
                >
                  {card.amount}
                </span>
                <span className="font-medium text-lg">/{card.duration}</span>
              </Text>
              <Text
                as="h3"
                className={`capitalize text-base font-semibold w-full py-2 text-center  text-zinc-100 my-3 ${
                  card.caption.includes("12")
                    ? "bg-gradient-to-r to-amber-500 from-red-500"
                    : "bg-zinc-800"
                }`}
              >
                {card.caption}
              </Text>

              <ul className="flex flex-col items-center">
                {card.benefits.map((benefit: any) => (
                  <List
                    className="text-zinc-300 py-3 text-base capitalize relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-zinc-700 last:before:w-0"
                    key={benefit}
                  >
                    {benefit}
                  </List>
                ))}
              </ul>
            </Card>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default Membership;
