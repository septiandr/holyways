// import model here
const { donate } = require("../../models");

exports.addDonate = async (req, res) => {
  try {
    console.log(req.body)
    const dataDonate = await donate.create(req.body);
    
    res.send({
      status: "success",
      data:dataDonate,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.getDonates = async (req, res) => {
  try {
    const data = await donate.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getDonate = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await donate.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      data,
    });
   console.log(data)
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.updateDonate = async (req, res) => {
  try {
    const { id } = req.params;
    const{...data}=req.body
    const proofAttachment = req.file.filename
    const update ={
      ...data,
      proofAttachment
    }
    await donate.update(update, {
      where: {
        id,
      },
    });

    const updatedData = await donate.findOne({
      where: {
        id,
      },
    });
    res.send({
      status: "success",
      data: {
        user: updatedData,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
exports.deleteDonate = async (req, res) => {
  const { id } = req.params;
  try {
    await donate.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: "delete user success",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
