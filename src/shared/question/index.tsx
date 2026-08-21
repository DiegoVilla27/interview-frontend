import { IQuestion, QuestionLevel } from "../../types";
import { showAlert } from "../../utils/sweetalert";

interface IProps {
  theme: boolean;
  questions: IQuestion[];
}

const LEVEL_LABELS: Record<QuestionLevel, string> = {
  basico: "Básico",
  medio: "Medio",
  avanzado: "Avanzado",
  experto: "Experto"
};

export const StructureQuestion = ({ theme, questions }: IProps) => {
  const showResponse = (question: IQuestion) =>
    showAlert(question.title, question.response);

  return (
    <div className="row">
      <div className="col-12">
        <ul className="question-list">
          {questions.map((question: IQuestion) => (
            <li
              key={question.title}
              className="text-color f-montserrat-light question-item"
              onClick={() => showResponse(question)}
            >
              <img
                width="12px"
                height="12px"
                className="question-sparkle"
                src={`/icons/index-${theme ? "white" : "black"}.svg`}
                alt=""
              />
              <span className={`level-badge level-${question.level}`}>
                {LEVEL_LABELS[question.level]}
              </span>
              <span className="question-text">{question.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StructureQuestion;
