import { ArrowRight } from "lucide-react";

function DashboardCard({
  title,
  description,
  icon,
  color = "bg-green-100",
  button,
  onClick,
}) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[`220px`]"
      onClick={onClick}
    >
      <div>
        <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-green-700 mb-5`}>
          {icon}
        </div>

        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500 mt-2 max-w-xs">{description}</p>
      </div>

      {button ? (
        <div className="mt-8 flex justify-end">
          <span className="bg-green-700 text-white font-semibold rounded-xl px-4 py-2 inline-flex items-center gap-2">
            {button}
            <ArrowRight size={16} />
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default DashboardCard;