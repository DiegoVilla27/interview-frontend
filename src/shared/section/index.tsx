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
    <div className="accordion-item rounded-3 overflow-hidden mb-2 border-0">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed text-color f-montserrat-regular"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapse}`}
          aria-expanded="false"
          aria-controls={collapse}
        >
          <div className="section-icon-wrapper me-3">
            <img
              src={URL_ICON}
              width="20px"
              height="20px"
              alt={title}
            />
          </div>
          <span className="accordion-title">{title}</span>
          <span className="question-count">({questions.length})</span>
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
