// src/services/journalService.js
import axios from 'axios';

const API_URL = 'https://ai-powered-journal-app-2.onrender.com/journal'; 

export const getJournals = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching journals:', error);
    return [];
  }
};

export const addJournal = async (content) => {
  try {
    const response = await axios.post(API_URL, { content });
    return response.data; 
  } catch (error) {
    console.error('Error adding journal:', error);
    return null;
  }
};

export const deleteJournal = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting journal:', error);
  }
};

export const editJournal = async (id, content) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { content });
    return response.data; 
  } catch (error) {
    console.error('Error editing journal:', error);
    return null;
  }
};
