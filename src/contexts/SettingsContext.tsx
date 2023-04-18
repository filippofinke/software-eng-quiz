import { createContext, useContext, useEffect, useState } from "react";

interface Settings {
  interactiveMode: boolean;
}

interface Context {
  settings: Settings;
  setSetting: (key: keyof Settings, value: any) => void;
}

const SettingsContext = createContext<Context | null>(null);

function useSettings() {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
}

function SettingsProvider({ children }: any) {
  let [settings, setSettings] = useState<Settings>({
    interactiveMode: false,
  });

  const setSetting = (key: keyof Settings, value: any) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [key]: value };
      localStorage.setItem("settings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  useEffect(() => {
    const settings = localStorage.getItem("settings");
    if (settings) {
      setSettings(JSON.parse(settings));
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, useSettings };
