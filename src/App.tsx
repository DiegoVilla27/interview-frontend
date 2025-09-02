import { useEffect, useState } from "react";
import LayoutScreen from "./layout";
import { sections as sectionsModule } from "./modules";
import StructureSection from "./shared/section";
import { ISection } from "./types";
import { loadStorage, saveStorage } from "./utils/storage.utils";

export const App = () => {
  const idAccordion: string = "accordionQuestions";
  const sections: ISection[] = sectionsModule;

  const [theme, setTheme] = useState<boolean>(true);

  useEffect(() => {
    setTheme(loadStorage());
  }, []);

  useEffect(() => {
    saveStorage(theme);
  }, [theme]);

  return (
    <LayoutScreen
      theme={theme}
      setTheme={setTheme}
    >
      <main className="p-4">
        <div
          className="accordion accordion-flush"
          id={idAccordion}
        >
          {sections.map((section: ISection) => (
            <StructureSection
              theme={theme}
              idAccordion={idAccordion}
              section={section}
              key={section.icon}
            />
          ))}
        </div>
      </main>
    </LayoutScreen>
  );
};

export default App;
