import { useEffect, useState } from "react";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://thronesapi.com/api/v2/Characters");
      const results = await res.json();
      setData(results);
    };

    fetchData();
  }, []);
  console.log(data);
  return <div>main</div>;
}

export default Main;
