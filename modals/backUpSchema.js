const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const backUpSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "name should not be empty"],
      index: true,
    },
    companyName: String,
    process: [
      {
        processName: String,
      },
    ],

    backUpBatches: [
      {
        batchName: { type: String },
        progress: String,
        remaining: Number,
        completed: Number,
        issuedQuantityB: {
          type: Number,
          default: 0,
        },
        process: [
          {
            processName: String,
            accepted: Number,
            rejected: {
              type: Number,
              default: 0,
            },
            issuedQuantity: {
              type: Number,
              default: 0,
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Backup", backUpSchema);
