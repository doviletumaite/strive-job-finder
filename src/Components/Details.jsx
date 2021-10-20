import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let id = match.params.jobID;
        console.log("id",match.params.jobID )
       if (id) {
          let response = await fetch(
            "https://strive-jobs-api.herokuapp.com/jobs?search=" +  "&limit=20" 
          );
          let arrayjobs = await response.json();
          console.log("mathced job", arrayjobs);
            const jobs = arrayjobs.data;
            const thatJob = jobs.find(j => j._id == id)
            console.log("that job", thatJob)
         setData(thatJob);
         }
      
      } catch (error) {
        console.log("something wrong in jobs fetch", error);
      }
    };
    fetchJobs();
  }, [match.params.jobID]);

  return( 
  
  <div>
ì
               <Card className="m-5">
               <Card.Header as="h5">{data.title}</Card.Header>
               <Card.Body>
                 <Card.Title>{data.company_name}</Card.Title>
                 <Card.Text>
                 <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                 </Card.Text>
            
                 <Card.Text>{data.url}</Card.Text>
               </Card.Body>
             </Card>
 
        </div>
  );
};

export default Details;
