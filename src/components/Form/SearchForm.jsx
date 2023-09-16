import { AiOutlineSearch } from "react-icons/ai";
import { useForm } from "react-hook-form";
import ToastNotification from "../ToastNotification";

function SearchForm({ searchInfo, action }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    action(data);
  });

  return (
    <form
      className="flex items-center justify-center gap-1 text-slate-500 bg-transparent px-5"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder={`Search ${searchInfo}`}
        className="focus:outline-no ne rounded-md px-2 py-1 w-1/3"
        {...register("searchMovie", { required: true })}
      />
      <AiOutlineSearch className="text-2xl text-white" />
      {errors.searchMovie && (
        <ToastNotification
          title="Error"
          description="Type the name of a movie"
          iconColor="red-500"
          bgColor="#102c53"
        />
      )}
    </form>
  );
}

export default SearchForm;
