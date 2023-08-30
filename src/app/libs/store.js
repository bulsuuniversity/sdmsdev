import { create } from 'zustand';
import axios from 'axios';
import { url, headers } from './api';

export const useProfileData = create((set) => ({
  profileData: null,
  getProfileData: async (session) => {
    try {
      const response = await axios.get(`${url}/api/studentAccount/${session}`, { headers });
      const profileData = response.data;
      set({ profileData });
    } catch (err) {
      console.log(err);
    }
  }
}));
