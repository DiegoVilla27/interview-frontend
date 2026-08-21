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
        className="theme-toggle-btn border-0 bg-transparent position-absolute"
        style={{
          top: "16px",
          right: "16px",
          zIndex: 10,
          cursor: "pointer"
        }}
        onClick={() => setTheme(!theme)}
        aria-label={theme ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        <div className="theme-icon-wrapper">
          <img
            src={URL_ICON}
            width={26}
            height={26}
            alt="Toggle theme"
          />
        </div>
      </button>
      <header className="pt-5 pb-1">
        <h1 className="text-color mb-4 f-montserrat-bold">
          <b>Roadmap FrontEnd! 🚀</b>
        </h1>
      </header>
      {children}
      <footer className="p-4 mt-4">
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
