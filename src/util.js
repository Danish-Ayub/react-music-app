export const playAudio = (audioRef, isPlaying) => {
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.then((audio) => {
                audioRef.current.play();
            });
        }
    }
};