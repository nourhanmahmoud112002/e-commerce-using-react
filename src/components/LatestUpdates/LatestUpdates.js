import LatestUpdatesForm from "./LatestUpdatesForm";
import LatestUpdatesHeader from "./LatestUpdatesHeader";

const LatestUpdates = () => {
  return (
    <section>
      <div
        className="container-lg bg-dark px-5"
        style={{ borderRadius: 20, paddingTop: 40, paddingBottom: 40 }}
      >
        <div className="row justify-content-center align-items-center">
          <LatestUpdatesHeader />
          <LatestUpdatesForm />
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
