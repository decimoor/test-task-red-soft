import './App.css';
import MusicPlayer from './components/musicPlayer';
import Switch from './components/Switch';
import ThemeInitializer from './components/themeInitializer';
import useSwitches from './hooks/useSwitches';

function App() {
  const { switchesState, toggleSwitch } = useSwitches();

  return (
    <ThemeInitializer>
      <main className="App">
        <MusicPlayer />
        <div className="switches">
          <Switch
            label="Theme"
            checked={switchesState.theme}
            onCheckedChange={() => toggleSwitch('theme')}
          />
          <Switch
            label="Music"
            checked={switchesState.music}
            onCheckedChange={() => toggleSwitch('music')}
          />
          <Switch
            label="Reverse"
            checked={switchesState.reverse}
            onCheckedChange={() => toggleSwitch('reverse')}
          />
        </div>
      </main>
    </ThemeInitializer>
  );
}

export default App;