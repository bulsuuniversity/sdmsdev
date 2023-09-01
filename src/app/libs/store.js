import { create } from 'zustand';
import axios from 'axios';
import { url, headers } from './api';

export const useProfileData = create((set) => ({
  profileData: {
    id: " ",
    idNumber: " ",
    name: " ",
    email: " ",
    phoneNumber: " ",
    address: " ",
    yearLevel: " ",
    profile: "",
    profilePublicId: "",
    college: " ",
  },
  getProfileData: async (session) => {
    try {
      const response = await axios.get(`${url}/api/studentAccount/${session}`, { headers });
      set((state) => ({
        profileData: response.data,
      }));
      console.log('store', response)
    } catch (err) {
      console.log(err);
    }
  }  
}));
