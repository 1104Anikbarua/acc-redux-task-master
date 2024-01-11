import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispactch = useDispatch();

  const onSubmit = (data) => {
    // console.log(data);

    dispactch(addTask(data));
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen((prev) => !prev);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Zero">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded"
            type="text"
            name="name"
            id=""
            {...register("name")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <textarea
            name="description"
            id=""
            className="w-full rounded"
            {...register("description")}
          ></textarea>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            id=""
            className="w-full rounded"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assigned To
          </label>
          <select
            name="assign to"
            id=""
            {...register("assignedTo")}
            className="rounded w-full"
          >
            <option value="Rachy Nikki">Rachy Nikki</option>
            <option value="Tossy Tina">Tossy Tina</option>
            <option value="John Doe">John Doe</option>
            <option value="Mohit Sharma">Mohit Sharma</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            name="Priority"
            id=""
            {...register("priority")}
            className="w-full rounded"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex gap-5">
          <button
            // both working
            onClick={() => onCancel()}
            // or
            // onClick={onCancel}
            type="button"
            className="text-white bg-red-700 w-full rounded h-9 font-medium text-lg"
          >
            Cancel
          </button>
          <input
            className="text-white bg-blue-700 rounded w-full h-9 font-medium text-lg"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
