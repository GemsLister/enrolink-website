import express from 'express';
import Batch from '../models/Batch.js';

const router = express.Router();

// GET /api/batches - Get all batches with optional filtering
router.get('/', async (req, res) => {
  try {
    const { year, status, search } = req.query;
    
    // Build filter object
    let filter = {};
    
    if (year) {
      filter.year = parseInt(year);
    }
    
    if (status) {
      filter.status = status;
    }
    
    if (search) {
      // Search by year (if search is a number) or status
      const searchNum = parseInt(search);
      if (!isNaN(searchNum)) {
        filter.year = searchNum;
      } else {
        filter.status = { $regex: search, $options: 'i' };
      }
    }
    
    const batches = await Batch.find(filter).sort({ year: -1 });
    res.json(batches);
  } catch (error) {
    console.error('Error fetching batches:', error);
    res.status(500).json({ message: 'Error fetching batches' });
  }
});

// GET /api/batches/:id - Get a specific batch
router.get('/:id', async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    res.json(batch);
  } catch (error) {
    console.error('Error fetching batch:', error);
    res.status(500).json({ message: 'Error fetching batch' });
  }
});

// POST /api/batches - Create a new batch
router.post('/', async (req, res) => {
  try {
    const { year, totalStudents, status } = req.body;
    
    // Validate required fields
    if (!year || totalStudents === undefined) {
      return res.status(400).json({ 
        message: 'Year and totalStudents are required' 
      });
    }
    
    // Check if batch with same year already exists
    const existingBatch = await Batch.findOne({ year });
    if (existingBatch) {
      return res.status(400).json({ 
        message: 'A batch for this year already exists' 
      });
    }
    
    const newBatch = new Batch({
      year: parseInt(year),
      totalStudents: parseInt(totalStudents),
      status: status || 'Open'
    });
    
    const savedBatch = await newBatch.save();
    res.status(201).json(savedBatch);
  } catch (error) {
    console.error('Error creating batch:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error', 
        details: error.message 
      });
    }
    res.status(500).json({ message: 'Error creating batch' });
  }
});

// PUT /api/batches/:id - Update a batch
router.put('/:id', async (req, res) => {
  try {
    const { year, totalStudents, status } = req.body;
    
    const updateData = {};
    if (year !== undefined) updateData.year = parseInt(year);
    if (totalStudents !== undefined) updateData.totalStudents = parseInt(totalStudents);
    if (status !== undefined) updateData.status = status;
    
    // Check if updating year and if it conflicts with existing batch
    if (year) {
      const existingBatch = await Batch.findOne({ 
        year: parseInt(year), 
        _id: { $ne: req.params.id } 
      });
      if (existingBatch) {
        return res.status(400).json({ 
          message: 'A batch for this year already exists' 
        });
      }
    }
    
    const updatedBatch = await Batch.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedBatch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    
    res.json(updatedBatch);
  } catch (error) {
    console.error('Error updating batch:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation error', 
        details: error.message 
      });
    }
    res.status(500).json({ message: 'Error updating batch' });
  }
});

// DELETE /api/batches/:id - Delete a batch
router.delete('/:id', async (req, res) => {
  try {
    const deletedBatch = await Batch.findByIdAndDelete(req.params.id);
    if (!deletedBatch) {
      return res.status(404).json({ message: 'Batch not found' });
    }
    res.json({ message: 'Batch deleted successfully' });
  } catch (error) {
    console.error('Error deleting batch:', error);
    res.status(500).json({ message: 'Error deleting batch' });
  }
});

export default router;
