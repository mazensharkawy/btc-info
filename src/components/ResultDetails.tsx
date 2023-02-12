import React from "react";
const ResultDetail = ({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) => (
  <p className="result-detail">
    <strong>{`${name}: `}</strong> {value}
  </p>
);
export default ResultDetail;
