import mongoose, { Schema } from "mongoose";

const subcriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // one who is subscibing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // one to whon "subscriber" is subscribing
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model("Subscription", subcriptionSchema);
