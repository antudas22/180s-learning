import React,{useRef} from "react";
import {useReactToPrint} from 'react-to-print';
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { AiFillPrinter } from "react-icons/ai";

const PremiumAccess = () => {
  const courses = useLoaderData();
  console.log(courses);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-date',
    onafterprint: () => alert("Print Sucess")
  })
  return (
    <div>
      <h2>Congratulation to get {courses.title} premium access!!!</h2>
      <div className="d-flex justify-content-between">
        <div ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={courses.img} />
            <Card.Body>
              <Card.Title>{courses.title}</Card.Title>
              <Card.Text>{courses.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Button onClick={handlePrint}><AiFillPrinter></AiFillPrinter></Button>
        </div>
      </div>
    </div>
  );
};

export default PremiumAccess;
