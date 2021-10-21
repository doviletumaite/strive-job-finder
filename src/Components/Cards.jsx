import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { BookmarkHeart } from "react-bootstrap-icons"
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const Cards = ({jobs, id }) => {
   let history = useHistory()
    console.log("jobs in card",jobs)
     console.log("jobs.id", id)
     console.log("history",history)
    return (
        <div>
  {jobs.slice(0, 10).map(jobs => (
               <Card className="m-5">
               <Card.Header as="h5"><div jobs={jobs} id={jobs._id} onClick={() => history.push('/details/' + jobs._id)
              } >
                   <BookmarkHeart className="mx-5"/>
                {jobs.title}</div></Card.Header>
               <Card.Body>
                 <Card.Title>{jobs.company_name}</Card.Title>
               
                 <Link to={{ pathname: jobs.url }} target='_blank'>{jobs.url}</Link>
               </Card.Body>
             </Card>
  ))}
        </div>
    )
}

export default Cards