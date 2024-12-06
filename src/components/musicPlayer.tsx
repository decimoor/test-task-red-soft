import { useRef, useEffect } from "react";
import { useMusicPlayerStore } from "../store/musicPlayerStore"


export default function MusicPlayer() {

    const musicIsPlaying = useMusicPlayerStore((state) => state.musicIsPlaying);
    const musicPlayerRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!musicPlayerRef.current) return;
        if (musicIsPlaying) {
            musicPlayerRef.current.play();
            return;
        }

        musicPlayerRef.current.pause();

    }, [musicIsPlaying])

    return <div className="musicPlayer">
        <audio ref={musicPlayerRef} src={'background_music.mp3'} />
    </div>
}