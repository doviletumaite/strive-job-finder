import {useEffect, useState} from "react"
import Cards from "./Cards"
const Showcase = () => {
    const [jobs, setJobs] = useState([])
    const fetchJobs = async () =>{
      try {
          let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs")
          let arrayjobs = await response.json()
          console.log("array of job from the fetch",arrayjobs)
          if (arrayjobs){
              const jobs = arrayjobs.data
              setJobs(jobs)
          }
      } catch (error) {
          console.log("something wrong in jobs fetch", error)
      }
    }

    useEffect(() => {
    fetchJobs()
      }, []);

    return (
        <div>
     
             <Cards jobs={jobs} id={jobs.id} />
      
        </div>
    )
}

export default Showcase