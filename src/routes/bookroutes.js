import { Router } from "express";
import Bookmodel from "../models/Bookmodel";
import multer from "multer";
const router = Router();
let imagename;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public/uploads')
    },
    filename: function (req, file, cb) {
      imagename = Date.now() + '-' + Math.round(Math.random() * 1E9) +
      "-" +
      file.originalname.trim();

      cb(null, imagename);
    }
  })
  
  const upload = multer({ storage: storage })


// router.get()
router.post("/add", upload.single("image"),async(req,res) => {
   const data = await Bookmodel.create(req.body);
   console.log(data);
   if (data) {
    res.json(data);

   }
   else res.json({success:false,message:"Error while adding the book"})

});



export default router;

