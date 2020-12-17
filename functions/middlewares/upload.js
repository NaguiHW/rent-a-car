const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, 'congar-' + Date.now() + path.extname(file.originalname));
  }
});

const filerFilter = (req, file, cb) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: filerFilter,
});

module.exports = upload.single('categoryImage');
