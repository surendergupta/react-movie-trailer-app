import ReactPlayer from 'react-player'
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

const toCapitalize = (string) => 
    string
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

const ReactPlayerSimple = ({trailerUrl, movieTitle}) => {
    return (
        <div className='movie-trailer-container'>
            <h2>{movieTitle ? `${toCapitalize(movieTitle)} Movie Trailer` : 'Movie Trailer'}</h2>
            <ReactPlayer className="ReactPlayer" src={trailerUrl} controls={true} />
        </div>
    )
}

import './ReactPlayerBox.css';

const ReactPlayerCustomControls = ({trailerUrl, movieTitle}) => {
    return (
        <div className='movie-trailer-container'>
            <h2>{movieTitle ? `${toCapitalize(movieTitle)} Movie Trailer` : 'Movie Trailer'}</h2>
            <MediaController
            style={{
                width: "100%",
                aspectRatio: "16/9",
            }}
            >
            <ReactPlayer
                slot="media"
                src={trailerUrl}
                controls={false}
                className="ReactPlayer" 
                style={{"--controls": "none"}}
            ></ReactPlayer>
            <MediaControlBar>
                <MediaPlayButton />
                <MediaSeekBackwardButton seekOffset={10} />
                <MediaSeekForwardButton seekOffset={10} />
                <MediaTimeRange />
                <MediaTimeDisplay showDuration />
                <MediaMuteButton />
                <MediaVolumeRange />
                <MediaPlaybackRateButton />
                <MediaFullscreenButton />
            </MediaControlBar>
            </MediaController>
        </div>
        
    )
}

export {ReactPlayerSimple, ReactPlayerCustomControls};