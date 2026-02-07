import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: String,
  comment: String,
  rating: { type: Number, min: 1, max: 5 },
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
