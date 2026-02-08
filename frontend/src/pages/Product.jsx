import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import RelatedProducs from '../components/RelatedProducs';
import StarRating from '../components/StarRating';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  // Reviews state
  const [reviews, setReviews] = useState([]);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);

  // Fetch product data
  useEffect(() => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/reviews/${productId}`);
        setReviews(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error('Fetch reviews error:', err);
        setReviews([]);
      }
    };

    if (productId) fetchReviews();
  }, [productId]);

  // Submit review
  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!reviewName || !reviewText || reviewRating < 1) return;

    try {
      const res = await axios.post(`http://localhost:4000/api/reviews`, {
        productId,
        name: reviewName,
        comment: reviewText,
        rating: reviewRating,
      });

      setReviews((prev) => [res.data, ...prev]);
      setReviewName('');
      setReviewText('');
      setReviewRating(0);
    } catch (err) {
      console.error('Submit review error:', err);
    }
  };

  // Average rating
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  if (!productData) return null;

  return (
    <div className="border-t-2 pt-10">
      {/* Product Info */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Images */}
        <div className="flex-1 flex flex-col gap-3">
          {/* Main image */}
          <img src={image} className="w-full" alt="" />

          {/* Thumbnails below */}
          <div className="flex gap-2 overflow-x-auto">
            {productData.image.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setImage(img)}
                className={`w-24 cursor-pointer border ${
                  image === img ? 'border-orange-500' : 'border-gray-300'
                }`}
                alt=""
              />
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium">{productData.name}</h1>
          <p className="mt-5 text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500">{productData.description}</p>

          <div className="flex gap-2 my-8">
            {productData.sizes.map((s, i) => (
              <button
                key={i}
                onClick={() => setSize(s)}
                className={`border px-4 py-2 ${
                  size === s ? 'border-orange-500' : ''
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-white text-black px-8 py-3 hover:bg-gray-300"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <RelatedProducs
        category={productData.category}
        subCategory={productData.subCategory}
      />

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold">Reviews</h2>

        <form onSubmit={handleReviewSubmit} className="flex flex-col gap-3 mt-4">
          <input
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
            placeholder="Your name"
            className="border px-3 py-2"
          />

          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review"
            className="border px-3 py-2"
          />

          <StarRating value={reviewRating} onChange={setReviewRating} />

          <button className="self-end bg-white px-4 py-2 hover:bg-gray-300 text-black">
            Submit Review
          </button>
        </form>

        {reviews.length > 0 && (
          <div className="mt-4 flex items-center gap-2">
            <span>Average Rating:</span>
            <StarRating value={Math.round(avgRating)} readonly />
            <span>({reviews.length})</span>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-4">
          {reviews.map((review) => (
            <div key={review._id} className="border-b pb-2">
              <strong>{review.name}</strong>
              <StarRating value={review.rating} readonly />
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
