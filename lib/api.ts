const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://hypermedia-oasis-api.fly.dev';

export interface Song {
  id: string;
  title: string;
  artist_id: string;
  album?: string;
  duration_seconds?: number;
  genre?: string;
  release_date?: string;
  spotify_id?: string;
  preview_url?: string;
  image_url?: string;
  energy?: number;
  danceability?: number;
  valence?: number;
  tempo?: number;
  created_at: string;
  artist?: Artist;
}

export interface Artist {
  id: string;
  name: string;
  genre?: string;
  bio?: string;
  image_url?: string;
  spotify_id?: string;
  created_at: string;
  follower_count?: number;
  is_following?: boolean;
}

export interface Playlist {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  is_public: boolean;
  cover_image_url?: string;
  created_at: string;
  updated_at: string;
  song_count?: number;
  songs?: Song[];
}

export interface CreateSongData {
  title: string;
  artist_id: string;
  album?: string;
  duration_seconds?: number;
  genre?: string;
  release_date?: string;
  preview_url?: string;
  image_url?: string;
}

export interface CreateArtistData {
  name: string;
  genre?: string;
  bio?: string;
  image_url?: string;
}

export interface CreatePlaylistData {
  name: string;
  description?: string;
  is_public?: boolean;
}

class ApiClient {
  private baseUrl: string;
  private userId: string;

  constructor() {
    this.baseUrl = API_URL;
    this.userId = '00000000-0000-0000-0000-000000000001';
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'x-user-id': this.userId,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Songs
  async getSongs(params?: { genre?: string; search?: string }): Promise<Song[]> {
    const queryParams = new URLSearchParams();
    if (params?.genre) queryParams.append('genre', params.genre);
    if (params?.search) queryParams.append('search', params.search);
    
    const query = queryParams.toString();
    return this.request(`/api/songs${query ? `?${query}` : ''}`);
  }

  async getSong(id: string): Promise<Song> {
    return this.request(`/api/songs/${id}`);
  }

  async createSong(data: CreateSongData): Promise<Song> {
    return this.request('/api/songs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateSong(id: string, data: Partial<CreateSongData>): Promise<Song> {
    return this.request(`/api/songs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteSong(id: string): Promise<{ message: string }> {
    return this.request(`/api/songs/${id}`, {
      method: 'DELETE',
    });
  }

  async likeSong(songId: string): Promise<{ message: string }> {
    return this.request(`/api/songs/${songId}/like`, {
      method: 'POST',
    });
  }

  async unlikeSong(songId: string): Promise<{ message: string }> {
    return this.request(`/api/songs/${songId}/unlike`, {
      method: 'DELETE',
    });
  }

  async getLikedSongs(): Promise<Song[]> {
    return this.request('/api/songs/liked/list');
  }

  // Artists
  async getArtists(params?: { genre?: string; search?: string }): Promise<Artist[]> {
    const queryParams = new URLSearchParams();
    if (params?.genre) queryParams.append('genre', params.genre);
    if (params?.search) queryParams.append('search', params.search);
    
    const query = queryParams.toString();
    return this.request(`/api/artists${query ? `?${query}` : ''}`);
  }

  async getArtist(id: string): Promise<Artist> {
    return this.request(`/api/artists/${id}`);
  }

  async createArtist(data: CreateArtistData): Promise<Artist> {
    return this.request('/api/artists', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateArtist(id: string, data: Partial<CreateArtistData>): Promise<Artist> {
    return this.request(`/api/artists/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteArtist(id: string): Promise<{ message: string }> {
    return this.request(`/api/artists/${id}`, {
      method: 'DELETE',
    });
  }

  async followArtist(artistId: string): Promise<{ message: string }> {
    return this.request(`/api/artists/${artistId}/follow`, {
      method: 'POST',
    });
  }

  async unfollowArtist(artistId: string): Promise<{ message: string }> {
    return this.request(`/api/artists/${artistId}/unfollow`, {
      method: 'DELETE',
    });
  }

  async getFollowedArtists(): Promise<Artist[]> {
    return this.request('/api/artists/followed/list');
  }

  // Playlists
  async getPlaylists(): Promise<Playlist[]> {
    return this.request('/api/playlists');
  }

  async getPlaylist(id: string): Promise<Playlist> {
    return this.request(`/api/playlists/${id}`);
  }

  async createPlaylist(data: CreatePlaylistData): Promise<Playlist> {
    return this.request('/api/playlists', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updatePlaylist(id: string, data: Partial<CreatePlaylistData>): Promise<Playlist> {
    return this.request(`/api/playlists/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deletePlaylist(id: string): Promise<{ message: string }> {
    return this.request(`/api/playlists/${id}`, {
      method: 'DELETE',
    });
  }

  async addSongToPlaylist(playlistId: string, data: { song_id: string; position?: number }): Promise<any> {
    return this.request(`/api/playlists/${playlistId}/songs`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async removeSongFromPlaylist(playlistId: string, songId: string): Promise<{ message: string }> {
    return this.request(`/api/playlists/${playlistId}/songs/${songId}`, {
      method: 'DELETE',
    });
  }

  // Recommendations
  async getRecommendations(): Promise<Song[]> {
    return this.request('/api/recommendations');
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export const api = new ApiClient();
