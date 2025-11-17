
import React, { useState, useCallback } from 'react';
import { generatePlaylist } from './services/geminiService';
import type { Playlist, Song } from './types';
import PlaylistCard from './components/PlaylistCard';
import Spinner from './components/Spinner';
import { SparklesIcon, AlertTriangleIcon } from './components/icons';

const App: React.FC = () => {
  const [vibe, setVibe] = useState<string>('');
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlaylist = useCallback(async () => {
    if (!vibe.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setPlaylist(null);

    try {
      const generatedPlaylist = await generatePlaylist(vibe);
      setPlaylist(generatedPlaylist);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [vibe, isLoading]);
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleGeneratePlaylist();
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center p-8 flex flex-col items-center justify-center space-y-4">
          <Spinner />
          <p className="text-gray-400">Curating your vibe...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-900/20 border border-red-500/30 text-red-300 p-4 rounded-lg flex items-center space-x-3">
          <AlertTriangleIcon className="h-6 w-6 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Error</h3>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      );
    }

    if (playlist) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          {playlist.map((song, index) => (
            <PlaylistCard key={`${song.title}-${index}`} song={song} index={index} />
          ))}
        </div>
      );
    }

    return (
       <div className="text-center p-8 border-2 border-dashed border-gray-700 rounded-lg">
          <SparklesIcon className="mx-auto h-12 w-12 text-gray-500" />
          <h3 className="mt-2 text-lg font-medium text-gray-300">Your playlist awaits</h3>
          <p className="mt-1 text-sm text-gray-500">Describe a vibe to get started.</p>
        </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10" 
        style={{backgroundImage: 'url(https://picsum.photos/seed/vibes/1920/1080)'}}>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Vibe Code Playlist
          </h1>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            Let AI craft the perfect soundtrack for your coding session. Just tell us your vibe.
          </p>
        </header>

        <main>
          <div className="sticky top-4 z-10 bg-gray-900/70 backdrop-blur-lg p-4 rounded-xl shadow-2xl border border-gray-700/50 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="e.g., late night cyberpunk hacking..."
                className="flex-grow w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-200"
                disabled={isLoading}
              />
              <button
                onClick={handleGeneratePlaylist}
                disabled={!vibe.trim() || isLoading}
                className="flex items-center justify-center px-6 py-3 font-semibold text-white bg-purple-600 rounded-md shadow-lg hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              >
                <SparklesIcon className="h-5 w-5 mr-2" />
                <span>{isLoading ? 'Generating...' : 'Generate Playlist'}</span>
              </button>
            </div>
          </div>

          <div className="mt-6">
            {renderContent()}
          </div>
        </main>
        
        <footer className="text-center mt-12 text-gray-500 text-sm">
            <p>Powered by Gemini API. UI by a world-class React engineer.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

