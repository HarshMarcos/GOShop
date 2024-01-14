const mongooose = require("mongoose");

const customerSchema = new mongooose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
    },
    role: {
      type: String,
      default: "Customer",
    },
  },
  { timestamps: true }
);

module.exports = mongooose.model("Customer", customerSchema);
