import mongoose from 'mongoose';

const Counter = mongoose.model('Counter', new mongoose.Schema({
  _id: String,
  seq: Number
}));

async function getNextSequence() {
  const counter = await Counter.findByIdAndUpdate(
    { _id: 'url_counter' },
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );

  return counter.seq;
}

export default getNextSequence;