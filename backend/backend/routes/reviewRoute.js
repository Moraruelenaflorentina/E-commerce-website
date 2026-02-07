import express from 'express';
import mongoose from 'mongoose';
import Review from '../models/reviewModel.js';

const router = express.Router();

// GET reviews for a product
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: 'Invalid productId' });
  }

  try {
    const reviews = await Review.find({ productId })
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (err) {
    console.error('GET REVIEWS ERROR:', err);
    res.status(500).json({ message: err.message });
  }
});

// POST a review
router.post('/', async (req, res) => {
  const { productId, name, comment, rating } = req.body;

  if (!productId || !name || !comment || rating < 1) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: 'Invalid productId' });
  }

  try {
    const review = await Review.create({
      productId, // ✅ let mongoose cast it
      name,
      comment,
      rating,
    });

    res.status(201).json(review);
  } catch (err) {
    console.error('SAVE REVIEW ERROR:', err);
    res.status(500).json({ message: err.message });
  }
});

export default router;
