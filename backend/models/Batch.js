import mongoose from 'mongoose';

const batchSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
    unique: true,
    min: 2000,
    max: 2030
  },
  totalStudents: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    required: true,
    enum: ['Open', 'Closed'],
    default: 'Open'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
batchSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Batch = mongoose.model('Batch', batchSchema);

export default Batch;
