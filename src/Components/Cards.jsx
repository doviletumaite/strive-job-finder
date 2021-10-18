import { Card, Button } from "react-bootstrap";

const Cards = ({jobs}) => {
    console.log("jobs in card",jobs)
    return (
        <div>
  {jobs.map(jobs => (
               <Card className="m-5">
               <Card.Header as="h5">{jobs.title}</Card.Header>
               <Card.Body>
                 <Card.Title>{jobs.company_name}</Card.Title>
                 <Card.Text>
                 {jobs.description}
                 </Card.Text>
                 <Button variant="primary">{jobs.url}</Button>
               </Card.Body>
             </Card>
  ))}
        </div>
    )
}

export default Cards