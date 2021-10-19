import {useEffect, useState} from "react"
import Cards from "./Cards"
import SearchBar from "./SearchBar";

const Showcase = () => {
    const [jobs, setJobs] = useState([])
    const [jobsDefault, setJobsDefault] = useState([])
    const [input, setInput] = useState("")
    const fetchJobs = async () =>{
      try {
          let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10")
          let arrayjobs = await response.json()
          console.log("array of job from the fetch",arrayjobs)
          if (arrayjobs){
              const jobs = arrayjobs.data
              setJobs(jobs)
              setJobsDefault(jobs)
          }
      } catch (error) {
          console.log("something wrong in jobs fetch", error)
      }
    }
    
   const updateInput = async (input) => {
      const filtered = jobsDefault.filter(job => {
          if(input === "") {
              return jobs
          } else {
              job.toLowerCase().includes(input.toLowerCase())
                console.log("input",input)
           setInput(input)
           setJobs(filtered)
          }
      })
    
   }

    useEffect(() => {
    fetchJobs()
      }, []);

    return (
        <div>
               
            <SearchBar placeholder="Search a job" 
            input={input} 
            onChange={updateInput} />
    
             <Cards jobs={jobs} id={jobs.id} />
        </div>
    )
}

export default Showcase