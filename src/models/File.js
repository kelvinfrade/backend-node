const mongoose = require("mongoose");

const File = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    path: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

//campo virtual

File.virtual("url").get(function() {
  const url = process.env.URL || 'http://localhost:3333'
  //apostrofo para colocar variavel
  return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);
