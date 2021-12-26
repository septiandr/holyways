// import model here
const { fund } = require("../../models");
const {donate} = require('../../models')
exports.addfund = async (req, res) => {
  try {
    console.log(req.file)
    const{...data}=req.body
    const add={
      ...data,
      thumbnail:req.file.filename

    }
    const addFund = await fund.create(add);
    res.send({
      status: "success",
      data:{
        addFund
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
exports.getfunds = async (req, res) => {
  try {
    const data = await fund.findAll({
      include:[{
        model:donate,
        as:"usersDonate",
        attributes:{
          exclude:["createdAt","updatedAt"],
        }
      }],
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

exports.getfund = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await fund.findOne({
      where: {
        id,
      },
      include:[{
        model:donate,
        as:"usersDonate",
        attributes:{
          exclude:['createdAt',"updatedAt"]
        }
      }],
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
exports.updatefund = async (req, res) => {
  try {
    const { id } = req.params;
    const{...data}=req.body
   console.log(req.body)
    const update ={
      ...data,
    
    }
    await fund.update(update, {
      where: {
        id,
      },
    });

    const updatedData = await fund.findOne({
      where: {
        id,
      },
    });
    res.send({
      status: "success",
      data: {
        updatedData,
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
exports.deletefund = async (req, res) => {
  const { id } = req.params;
  try {
    await fund.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      data:{
        id:id
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

exports.updatefunddonate = async (req, res) => {
  try {
    const { id } = req.params;
    const{...data}=req.body
   
    const update ={
      ...data,
    }
    await fund.update(update, {
      where: {
        id,
      },
    });

    const updatedData = await fund.findOne({
      where: {
        id,usersDonate
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
