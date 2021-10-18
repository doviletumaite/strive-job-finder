import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({jobs}) => {
    console.log("jobs in card",jobs)
    return (
        <div>
  {jobs.slice(0, 10).map(jobs => (
               <Card className="m-5">
               <Card.Header as="h5"><div>{jobs.title}</div></Card.Header>
               <Card.Body>
                 <Card.Title>{jobs.company_name}</Card.Title>
                 <Card.Text>
                 {jobs.description}
                 </Card.Text>
                 <Link to="/details"><Button variant="primary">{jobs.url}</Button></Link>
               </Card.Body>
             </Card>
  ))}
        </div>
    )
}

export default Cards