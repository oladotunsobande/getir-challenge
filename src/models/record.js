const { Schema } = require('mongoose');

const RecordSchema = new Schema(
  {
    key: { 
      type: String, 
      required: true,
      unique: true,
    },
    createdAt: { type: Date, required: true },
    value: { type: String, required: true },
    counts: [{ type: Number, required: true }],
  },
);

RecordSchema.index({
  key: 'text',
  createdAt: 'date',
});

module.exports = { RecordSchema };