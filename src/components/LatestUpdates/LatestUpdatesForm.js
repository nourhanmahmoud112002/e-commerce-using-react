import FormButton from "./FormButton";
import FormInput from "./FormInput";

const LatestUpdatesForm = () => {
  return (
    <div className="col-12 col-md-6 px-5">
      <form className="w-100">
        <FormInput />
        <FormButton />
      </form>
    </div>
  );
};

export default LatestUpdatesForm;
