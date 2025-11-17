
import React from 'react';
import type { Song } from '../types';
import { MusicNoteIcon } from './icons';

interface PlaylistCardProps {
  song: Song;
  index: number;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ song, index }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-lg border border-gray-700/50 transform transition-all duration-300 hover:bg-gray-700/70 hover:scale-[1.02]">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-600/20 rounded-md flex items-center justify-center border border-purple-500/30">
                <MusicNoteIcon className="h-6 w-6 text-purple-400" />
            </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white truncate">{song.title}</h3>
          <p className="text-sm text-purple-300 font-medium truncate">{song.artist}</p>
          <p className="text-xs text-gray-400 truncate">{song.album}</p>
          <p className="mt-3 text-sm text-gray-300">{song.reason}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
