import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <img className=" bg-white mb-3" style=" height: 99px; width: 255px; " src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br/>
          <b>{data.companyname}</b>
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;