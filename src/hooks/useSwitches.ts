import { useState } from "react";
import { useThemeStore } from "../store/themeStore";
import { useMusicPlayerStore } from "../store/musicPlayerStore";

interface SwitchesState {
  music: boolean;
  theme: boolean;
  reverse: boolean;
}

export default function useSwitches() {
  const [switchesState, setSwitchesState] = useState<SwitchesState>({
    music: false,
    theme: localStorage.getItem("theme") === "dark",
    reverse: false,
  });

  const toggleMusic = useMusicPlayerStore((state) => state.toggleMusic);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const [oldestSwitch, setOldestSwitch] = useState<keyof SwitchesState | null>(
    null
  );

  const handleSideEffects = (newState: SwitchesState) => {
    // newState !== oldState значит произошли изменения в поле

    if (newState.music !== switchesState.music) {
      toggleMusic();
    }

    if (newState.theme !== switchesState.theme) {
      toggleTheme();
    }

    if (newState.reverse !== switchesState.reverse) {
      toggleTheme();
      toggleMusic();
    }
  };

  const toggleSwitch = (switchName: keyof SwitchesState) => {
    let newState: SwitchesState;

    // если переключатель уже включен то выключаем его
    if (switchesState[switchName]) {
      newState = {
        ...switchesState,
        [switchName]: false,
      };

      if (switchName === oldestSwitch) {
        setOldestSwitch(null);
      }
    } else {
      const activeSwitches = Object.entries(switchesState)
        .filter(([_, value]) => value)
        .map(([key]) => key as keyof SwitchesState);

      // если включены два свича то выключаем самый старый
      if (activeSwitches.length === 2 && oldestSwitch) {
        newState = {
          ...switchesState,
          [oldestSwitch]: false,
          [switchName]: true,
        };

        // находим новый самый старый переключатель (каламбур xd)
        const newOldestSwitch = activeSwitches.find(
          (item) => item !== oldestSwitch
        );

        setOldestSwitch(newOldestSwitch ?? null);
      } else {
        newState = {
          ...switchesState,
          [switchName]: true,
        };
      }
      if (!oldestSwitch) {
        setOldestSwitch(switchName);
      }
    }

    handleSideEffects(newState);
    setSwitchesState(newState);
  };

  return {
    switchesState,
    toggleSwitch,
  };
}
