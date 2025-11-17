
import { GoogleGenAI, Type } from "@google/genai";
import type { Playlist } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const playlistSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        title: {
          type: Type.STRING,
          description: "The title of the song.",
        },
        artist: {
          type: Type.STRING,
          description: "The artist of the song.",
        },
        album: {
          type: Type.STRING,
          description: "The album the song is from.",
        },
        reason: {
            type: Type.STRING,
            description: "A short, compelling reason why this song fits the requested vibe.",
        }
      },
      required: ["title", "artist", "album", "reason"],
    },
};


export const generatePlaylist = async (vibe: string): Promise<Playlist> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Generate a playlist of 10 songs that perfectly match this vibe for coding: "${vibe}". For each song, provide the title, artist, album, and a short reason it fits the vibe.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: playlistSchema,
            },
        });
        
        const responseText = response.text.trim();
        const playlist = JSON.parse(responseText);
        
        return playlist;
    } catch (error) {
        console.error("Error generating playlist:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate playlist from Gemini API: ${error.message}`);
        }
        throw new Error("An unknown error occurred while generating the playlist.");
    }
};
