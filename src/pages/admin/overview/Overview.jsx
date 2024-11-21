import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { api } from "../../../utils/apiCaller";
import { toast } from "react-toastify";

function Overview() {
  const [selectedOption, setSelectedOption] = useState("week");
  const [listOfData, setListOfData] = useState({
    courses: 0,
    blogs: 0,
    instructors: 0,
    users: 0,
    orders: 0,
  });
  const [chartData, setChartData] = useState({
    categories: [],
    values: [],
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const overViewData = [
    {
      name: "Courses",
      value: listOfData.courses,
      bg: "#2B55AF",
    },
    {
      name: "Blogs",
      value: listOfData.blogs,
      bg: "#4EDFC2",
    },
    {
      name: "Instructors",
      value: listOfData.instructors,
      bg: "#CE513D",
    },
    {
      name: "Users",
      value: listOfData.users,
      bg: "#C00070",
    },
    {
      name: "Orders",
      value: listOfData.orders,
      bg: "#32AB54",
    },
  ];

  const retrieveData = async () => {
    try {
      const res = await api.get(`/stats/count`);
      if (res.success) {
        console.log("List of data: ", res.data);
        setListOfData(res.data);
      } else {
        toast.error(res.data.message || "Something went wrong...");
      }
    } catch (error) {
      toast.error("Failed to fetch data...");
    }
  };

  const retrieveChartData = async () => {
    try {
      const res = await api.get(`/stats/order?filter=${selectedOption}`);
      if (res.success) {
        console.log("chartData : ", res.data);
        setChartData(res.data);
      } else {
        toast.error(res.data.message || "Something went wrong...");
      }
    } catch (error) {
      toast.error("Failed to fetch data...");
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    retrieveChartData();
  }, [selectedOption]);

  const colors = [ 
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#FF4560",
    "#775DD0",
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#FF4560",
    "#775DD0",
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#FF4560",
    "#775DD0",
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#FF4560",
    "#775DD0",
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#FF4560",
    "#775DD0",
    "#008FFB",
    "#00E396",
    "#FEB019",
    "#FF4560",
    "#775DD0",
    "#FF4560",
    "#775DD0",
  ];



  const options = {
    chart: {
      height: 350,
      toolbar: { show: false },
      type: "bar",
    },
    colors: colors,
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: chartData.categories,
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
  };

  const series = [
    {
      data: chartData.values,
    },
  ];

  const pieOptions = {
    chart: {
      height: 350,
      toolbar: { show: false },
      type: "donut",
    },
    
    labels: ["Blogs", "Courses", "Instructors", "Orders", "Users"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
      },
    },
    legend: {
      show: false,
      position: "bottom",
    }, stroke: {
      show: false, // Disable stroke
      width: 0,    // Set stroke width to 0
    },
    colors:[ 
      "#2B55AF",
      "#4EDFC2",
      "#CE513D",
      "#C00070",
      "#32AB54"], // Gradient end colors
    fill: {
      type: "gradient",
      gradient: {
        shade: "light", // Options: 'light', 'dark'
        type: "horizontal", // Options: 'horizontal', 'vertical', 'diagonal1', 'diagonal2', 'radial'
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0.95,
        stops: [0, 100], // Color transition stops
      },
    },
  };

  const pieSeries = [
    listOfData.blogs,
    listOfData.courses,
    listOfData.instructors,
    listOfData.orders,
    listOfData.users,
  ];

  return (
    <div className="w-full h-auto">
      <div className="w-[80%] h-auto grid grid-cols-5 gap-4 text-slate-300 absolute right-8 top-8">
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

      <div className="w-full grid grid-cols-2  z-100 mb-[200px]">
        <div className="absolute bg-stone-900  bg-opacity-45 rounded-md w-[50%] ml-10">
          <div className="relative">
            <div className="text-slate-600 flex justify-end  right-0">
              <select
                id="paymentMethod"
                value={selectedOption}
                onChange={handleOptionChange}
                className="p-2 bg-dark border border-slate-600 rounded-md focus:outline-none"
              >
                <option value="week">Last Week</option>
                <option value="month">Last One Month</option>
                <option value="year">Last One Year</option>
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
        <div className=" flex justify-center items-center absolute bg-stone-900 bg-opacity-45 rounded-md w-[30%] h-[70%] right-10">
        <ReactApexChart
        className=''
            options={pieOptions}
            series={pieSeries}
            type="donut"
            height={250}
          />
        </div>
      </div>
    </div>
  );
}

export default Overview;
