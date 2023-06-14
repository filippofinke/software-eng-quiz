import { doc, setDoc } from "@firebase/firestore";
import { getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, firestore } from "../utils/firebase";

interface Settings {
  interactiveMode: boolean;
  points: number;
  displayName?: string;
}

interface Context {
  settings: Settings;
  setSetting: (key: keyof Settings, value: any) => void;
  setSettings: (newSettings: Settings) => void;
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
  let [settings, setLocalSettings] = useState<Settings>({
    interactiveMode: false,
    points: 0,
    displayName: "",
  });

  const setSetting = (key: keyof Settings, value: any) => {
    setLocalSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [key]: value };
      localStorage.setItem("settings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  const setSettings = (newSettings: Settings) => {
    setLocalSettings((prevSettings) => {
      localStorage.setItem("settings", JSON.stringify(newSettings));
      return newSettings;
    });
  };

  useEffect(() => {
    const settings = localStorage.getItem("settings");
    if (settings) {
      setLocalSettings(JSON.parse(settings));
    }

    auth.onAuthStateChanged((user) => {
      if (user) {
        const settingsRef = doc(firestore, "users", user.uid);
        getDoc(settingsRef).then((doc) => {
          if (doc.exists()) {
            setSettings(doc.data() as any);
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    // update firestore if user is logged in
    if (auth.currentUser) {
      const settingsRef = doc(firestore, "users", auth.currentUser.uid);
      setDoc(settingsRef, {
        ...settings,
        displayName: auth.currentUser.displayName,
      });
    }
  }, [settings]);
  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSetting,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, useSettings };
