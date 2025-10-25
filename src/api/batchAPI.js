import { axiosInstance } from '../api/axios.js';

// Batch API service functions
export const batchAPI = {
  // Get all batches with optional filtering
  getBatches: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      
      if (filters.year) params.append('year', filters.year);
      if (filters.status) params.append('status', filters.status);
      if (filters.search) params.append('search', filters.search);
      
      const response = await axiosInstance.get(`/batches?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching batches:', error);
      throw error;
    }
  },

  // Get a specific batch by ID
  getBatch: async (id) => {
    try {
      const response = await axiosInstance.get(`/batches/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching batch:', error);
      throw error;
    }
  },

  // Create a new batch
  createBatch: async (batchData) => {
    try {
      const response = await axiosInstance.post('/batches', batchData);
      return response.data;
    } catch (error) {
      console.error('Error creating batch:', error);
      throw error;
    }
  },

  // Update a batch
  updateBatch: async (id, batchData) => {
    try {
      const response = await axiosInstance.put(`/batches/${id}`, batchData);
      return response.data;
    } catch (error) {
      console.error('Error updating batch:', error);
      throw error;
    }
  },

  // Delete a batch
  deleteBatch: async (id) => {
    try {
      const response = await axiosInstance.delete(`/batches/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting batch:', error);
      throw error;
    }
  }
};
