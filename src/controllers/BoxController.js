const Box = require("../models/Box");
const File = require("../models/File");

class BoxController {
  async store(req, res) {
    //{title: req.body.title}
    const box = await Box.create(req.body);

    return res.json(box);
  }
  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } }
    });
    return res.json(box);
  }
}

module.exports = new BoxController();
