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
  //apostrofo para colocar variavel
  return `http://localhost:3333/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model("File", File);
