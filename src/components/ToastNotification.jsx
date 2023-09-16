import { toast } from "react-hot-toast";
import { BiErrorCircle } from "react-icons/bi";

function ToastNotification({ title, description, iconColor, bgColor }) {
  const customToast = () => (
    <div
      className={`max-w-md w-full bg-gradient-to-tl from-white/10 to-${bgColor} backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex `}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5 items-center justify-center">
            <BiErrorCircle className={`text-2xl text-${iconColor}`} />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="mt-1 text-sm text-white">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss()}
          className={`w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:text-${bgColor} focus:outline-none focus:ring-2 `}
        >
          Close
        </button>
      </div>
    </div>
  );

  toast.custom(customToast);

  return null;
}

export default ToastNotification;
