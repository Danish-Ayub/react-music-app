import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faPause,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons"
// import Util
import { playAudio } from '../util';

const Player = ({
    currentSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    songs,
    setSongs,
    setCurrentSong }) => {
    //Use effect
    useEffect(() => {
        const selectedSong = songs.map((song) => {
            if (song.id === currentSong.id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(selectedSong);
    }, [currentSong]);
    //Functions
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };
    const skipTrackHandler = (direction) => {
        let currentIndex = songs.findIndex((songs) => songs.id === currentSong.id);
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % songs.length === -1) {
                setCurrentSong(songs[songs.length - 1]);
                playAudio(audioRef, isPlaying);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        // Check if the song is playing
        playAudio(audioRef, isPlaying);
    };
    // Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercantage}%)`,
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{ background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})` }} className="track">
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range"
                        onChange={dragHandler}
                    />
                    <div className="animate-track" style={trackAnim}></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
            </div>
            <div className="player-control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-back')}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="play"
                    size="2x"
                    icon={isPlaying ? faPause : faPlay}
                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skip-forward')}
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
        </div>
    )
}

export default Player;