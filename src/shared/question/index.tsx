import { IQuestion } from "../../types";
import { showAlert } from "../../utils/sweetalert";

interface IProps {
  theme: boolean;
  questions: IQuestion[];
}

export const StructureQuestion = ({ theme, questions }: IProps) => {
  const showResponse = (question: IQuestion) =>
    showAlert(question.title, question.response);

  return (
    <div className="row">
      <div className="col-12">
        <ul>
          {questions.map((question: IQuestion) => (
            <li
              key={question.title}
              className="text-color f-montserrat-light my-2"
              onClick={() => showResponse(question)}
            >
              <img
                width="15px"
                height="15px"
                className="me-2"
                src={`/icons/index-${theme ? "white" : "black"}.svg`}
              />
              <span>{question.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StructureQuestion;
