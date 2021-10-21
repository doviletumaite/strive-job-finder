import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BookmarkHeart, BookmarkHeartFill } from "react-bootstrap-icons"
import { addToFavourite, removeFromFavourite } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = s => s
const mapDispatchToProps = (dispatch) =>({
    addToFav: (job) => dispatch(addToFavourite(job)),
    removeFromFav: (job) => dispatch(removeFromFavourite(job))
})
const DetailsRedux = ({ match, favourites, addToFav, removeFromFav }) => {
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
  
  const isFav = favourites.includes(data)
  const toggleFavourite = isFav ? addToFav(data) : removeFromFav(data)

  return( 
  
  <div>
   <Link to="/"><Button variant="light" className="m-5">HOME</Button></Link>
               <Card className="m-5">
                <Card.Header as="h5">{data.title}   
           {
               isFav
               ?    <BookmarkHeartFill className="mx-5" onClick={toggleFavourite}/>
               :  <BookmarkHeart className="mx-5" onClick={toggleFavourite}/>
           }
               
               </Card.Header>
               <Card.Header as="h6"><strong>Category: </strong>{data.category}</Card.Header>
               <Card.Body>
                 <Card.Title>{data.company_name}</Card.Title>
                 <Card.Text>
                 <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                 </Card.Text>
                 <Card.Text><strong>job type:</strong> {data.job_type}</Card.Text>
                 <Link to={{ pathname: data.url }} target='_blank'>{data.url}</Link>
               </Card.Body>
             </Card>
 
        </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsRedux);
