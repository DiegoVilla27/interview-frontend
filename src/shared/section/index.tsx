import { ISection } from "../../types";
import StructureQuestion from "../question";

interface IProps {
  theme: boolean;
  idAccordion: string;
  section: ISection;
}

export const StructureSection = ({ theme, idAccordion, section }: IProps) => {
  const { title, collapse, icon, questions } = section;

  const URL_ICON: string = `/icons/${
    theme ? icon + "-white" : icon + "-black"
  }.svg`;

  return (
    <div className="accordion-item rounded overflow-hidden mb-2 border-0">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed text-color fw-bold f-montserrat-regular"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapse}`}
          aria-expanded="false"
          aria-controls={collapse}
        >
          <img
            src={URL_ICON}
            className="me-3"
            width="24px"
            height="24px"
          />{" "}
          <span>{title}</span>
        </button>
      </h2>
      <div
        id={collapse}
        className="accordion-collapse collapse"
        data-bs-parent={`#${idAccordion}`}
      >
        <div className="accordion-body">
          <StructureQuestion
            theme={theme}
            questions={questions}
          />
        </div>
      </div>
    </div>
  );
};

export default StructureSection;
