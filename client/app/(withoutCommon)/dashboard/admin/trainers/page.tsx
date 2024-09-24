import StatsOverview from "./Components/StatsOverview";
import TrainersList from "./TrainerList";

const TrainersPage = () => {
  return (
    <main className="">
      <div className="">
        <StatsOverview />
        <TrainersList />
      </div>
    </main>
  );
};

export default TrainersPage;
