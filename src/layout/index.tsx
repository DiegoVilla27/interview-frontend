import { ReactNode } from "react";

interface IProps {
  theme: boolean;
  setTheme: (theme: boolean) => void;
  children: ReactNode;
}

const LayoutScreen = ({ theme, setTheme, children }: IProps) => {
  const URL_ICON: string = `/icons/switch/${theme ? "sun" : "moon"}.svg`;

  return (
    <>
      <button
        className="border-0 bg-transparent position-absolute end-0 p-0"
        onClick={() => setTheme(!theme)}
      >
        <img
          src={URL_ICON}
          width={40}
          height={40}
        />
      </button>
      <header className="px-4 pt-5 pb-1">
        <h1 className="text-color mb-4 f-montserrat-bold">
          <b>Roadmap FrontEnd! 🚀</b>
        </h1>
      </header>
      {children}
      <footer className="p-4">
        <p className="m-0 p-0 text-center f-montserrat-light text-color">
          Developed by <b className="f-montserrat-bold">Diego Villa</b> -{" "}
          <a
            className="f-montserrat-bold"
            href="https://cabuweb.com"
            target="_blank"
            rel="noreferrer"
          >
            Cabuweb
          </a>
        </p>
      </footer>
    </>
  );
};

export default LayoutScreen;
