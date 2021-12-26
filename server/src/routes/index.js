const express = require("express");
const router = express.Router();

const {addUser,getUsers,getUser,updateUser,deleteUser} = require('../controller/user')
const {addfund,getfunds,getfund,updatefund,deletefund,updatefunddonate} = require('../controller/fund')
const {addDonate,getDonates,getDonate,updateDonate,deleteDonate} = require('../controller/donate')

const { uploadFile } = require("../middleware/uploadFile");
const { register, login,checkAuth} = require('../controller/auth');
const { auth,adminOnly } = require('../middleware/auth');

router.post("/user", addUser);
router.get("/users", auth,getUsers);
router.get("/user/:id",auth, getUser);
router.put("/user/:id",auth,uploadFile('image'), updateUser);
router.delete("/user/:id", deleteUser);

router.post("/fund",uploadFile('image'), addfund);
router.get("/funds",auth, getfunds);
router.get("/fund/:id",auth, getfund);
router.put("/fund/:id",auth, updatefund);
router.delete("/fund/:id",auth, deletefund);
router.put("/fund-donate/:id/:usersDonate", updatefunddonate);

router.post("/donate", addDonate);
router.get("/donates",auth,adminOnly, getDonates);
router.get("/donate/:id",auth, getDonate);
router.put("/donate/:id",auth,uploadFile('image'), updateDonate);
router.delete("/donate/:id",auth, deleteDonate);


router.post("/register", register);
router.post("/login", login);
router.get("/check-auth/:id", auth, checkAuth);

module.exports = router;