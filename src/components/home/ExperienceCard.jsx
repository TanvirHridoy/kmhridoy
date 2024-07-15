import React from 'react';
import { Col } from "react-bootstrap";

// const ExperienceCard = ({ data }) => {
//   return (
//     <Col lg="6">
//       <div className="pb-5 text-center">
//         <img className=" bg-white mb-3" style={{ height: '99px', width: '255px' }}  src={data.companylogo} alt="" />
//         <p className="lead">
//           {data.role}
//           <br/>
//               <a href={`${data.website}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
//                 <b>{data.companyname}</b>
//               </a>
//           <br />
//           {data.date}
//         </p>

//       </div>
//     </Col>
//   );
// }

// export default ExperienceCard; 
//     experience-card p-4 bg-light border rounded shadow-sm text-center

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6" className="mb-4">
      <div className=" experience-card shadow-lg p-3  rounded  text-center">
        <img
          className="bg-white mb-3"
          src={data.companylogo}
          alt={data.companyname}
        />
        <p className="lead mb-2">
          {data.role}
        </p>
        <a
          href={data.website}
          target="_blank"
          style={{textDecoration:'none', color:'black'}}
          rel="noopener noreferrer"
        >
          <b>{data.companyname}</b>
        </a>
        <p className="text-muted mt-2">
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;