import React from "react";
import "../../../public/sass/pages/documentsarea.scss";
import { FaFileAlt } from "react-icons/fa";

const documents = [
  {
    id: 1,
    description: "Aadhar Card",
    title: "Turbo Chargers",
    size: "666",
  },
  {
    id: 2,
    description: "XII Marksheet",
    title: "title 2",
    size: "666",
  },
  {
    id: 3,
    description: "X Marksheet",
    title: "title 3",
    size: "666",
  },
];

const Documents = () => {
  return (
    <div className="documents_are_outer_container">
      {documents.map((documents) => (
        <div className="documents_card" key={documents.id}>
          <div className="documents_card_left">
            <FaFileAlt />
          </div>
          <div className="documents_area_right">
            <h3>{documents.title}</h3>
            <p>{documents.description.slice(0, 20)}</p>
            <span>{documents.size} KB</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Documents;
