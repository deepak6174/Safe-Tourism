import React from "react";
import { Row, Col } from "reactstrap";
import { Progress } from 'reactstrap';
{/* <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */}
export default props => {
  var x=Math.ceil((props.capacity-props.chairs)*100/props.capacity);
  return (
    <div className="table-container">
      <Col
        className={props.empty ? "table selectable-table" : "table"}
        onClick={_ => {
          props.empty
            ? props.selectTable(props.name, props.id)
            : console.log("Tried to select a full table");
        }}
      >
        <div>
      <div class="text-center"> {props.capacity-props.chairs} of {props.capacity}</div>
      <Progress striped color="success" value={x} max={props.capacity} ></Progress>
        </div>
        {/* <Row noGutters className="table-row">
          <Col className="text-center">{props.chairs}</Col>
        </Row>
        <Row noGutters className="table-row">
          <Col className="text-center">{props.capacity}</Col>
        </Row> */}

        <p className="text-center table-name">{props.name}</p>
      </Col>
    </div>
  );
};

