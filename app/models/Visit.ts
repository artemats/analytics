import mongoose from 'mongoose'

const visitSchema = new mongoose.Schema(
  {
    projectId: { type: String, required: true },
    number: { type: Number, required: true },
    href: { type: String, required: true },
    ip: { type: String },
    screenSize: { type: String },
    timestamp: { type: String, required: true },
    userAgent: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

const Visit = mongoose.models.Visit || mongoose.model('Visit', visitSchema)

export default Visit
