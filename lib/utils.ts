import { useEffect, useState } from 'react';

// Function to generate a unique video ID
export const generateVideoId = (): string => {
    return `vid-${Math.random().toString(36).substr(2, 9)}`; // Unique ID
};

// Hook to fetch video data
export const useFetchVideos = (url: string) => {
    const [videos, setVideos] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVideos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [url]);

    return { videos, loading, error };
};

// Function to format video duration
export const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`; // MM:SS format
};

// Default export
export default {
    generateVideoId,
    useFetchVideos,
    formatDuration,
};