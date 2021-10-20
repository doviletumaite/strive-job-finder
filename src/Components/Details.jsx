import { useEffect, useState } from "react";

const Details = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let id = match.params.jobID;
        console.log("id",match.params.jobID )
       if (id) {
          let response = await fetch(
            "https://strive-jobs-api.herokuapp.com/jobs?search=" + id
          );
          let arrayjobs = await response.json();
          console.log("mathced job", arrayjobs);
            const jobs = arrayjobs.data;
            const thatJob = jobs._id
         setData(thatJob);
         }
      
      } catch (error) {
        console.log("something wrong in jobs fetch", error);
      }
    };
    fetchJobs();
  }, [match.params.jobID]);

  return( <div>{data.title}</div>);
};

export default Details;
