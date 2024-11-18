import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { api } from "../../../utils/apiCaller";
import { setOrder } from "../../../services/redux/reducers/orderSlice";
import { toast } from "react-toastify";

function Overview() {
  const [selectedOption, setSelectedOption] = useState("This Week");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };


  const overViewData = [
    {
      name: "Courses",
      value: "299",
      bg: "#2B55AF",
    },
    {
      name: "Blogs",
      value: "299",
      bg: "#4EDFC2",
    },
    {
      name: "Instructors",
      value: "299",
      bg: "#CE513D",
    },
    {
      name: "Users",
      value: "299",
      bg: "#C00070",
    },
    {
      name: "Orders",
      value: "299",
      bg: "#32AB54",
    },
  ];

  const retrieveData = async () => {
    try {
      const res = await api.get(`/order?limit=4&page=1`);
      if (res.success) {
        setOrder(res.data);
        console.log(res.data);
      } else {
        toast.error(res.data.message || "Something went Wrong..."); //
      }
    } catch {
      toast.error("Failed to fetch blog List...");
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const [series] = useState([
    {
      data: [21, 22, 59, 28, 16, 52, 21],
    },
  ]);

  const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

  const [options] = useState({
    chart: {
      height: 350,
      toolbar: false,
      type: "bar",
      events: {},
    },
    colors: colors,
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tues", "Wed", "Thu", "Fri"],
      labels: {
        show: true,
        style: {
          colors: colors,
          fontSize: "12px",
        },
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  });

  return (
    <>
      <div className="w-[80%] grid grid-cols-5 gap-4 text-white absolute top-8">
        {overViewData.map((ovd, index) => (
          <div
            key={`OverviewData${index}`}
            style={{
              backgroundImage: `linear-gradient(to right, ${ovd.bg}80, ${ovd.bg})`,
            }}
            className="py-2 h-[80px] text-2xl rounded-md overflow-hidden px-2 bg-opacity-70 relative"
          >
            <div className="h-full flex items-end font-[500]">{ovd.name}</div>
            <span className="absolute top-0 right-0 text-slate-300 pr-2 rounded-l-full rounded-b-full font-bold text-3xl drop-shadow-lg">
              {ovd.value}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute top-[200px] left-[200px] w-[50%]">
        <div className="relative">
          <div className="text-slate-600 flex justify-end">
            <select
              id="paymentMethod"
              value={selectedOption}
              onChange={handleOptionChange}
              className="p-2 bg-dark border border-slate-600 rounded-md focus:outline-none active:outline-none outline-none "
            >
              <option value="Bkash">This Week</option>
              <option value="Nogod">This Month</option>
              <option value="Rocket">This Year</option>
            </select>
          </div>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </>
  );
}

export default Overview;
