const multer = require('multer');
const path = require('path');
const { User } = require('../models/user');

const uploadFile = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/');
    },
    filename: function (req, file, cb) {
      // Retrieve userId from res.locals instead of req.user
      const userId = req.res.locals.user.id;
      if (!userId) {
        console.error('UserId is undefined');
        return cb(new Error('UserId is undefined'), false); // Handle undefined userId
      }
      const newFilename = `${userId}-profileimage-${file.originalname}`;
      cb(null, newFilename);
    }
  });

  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      cb(null, true);
    },
    limits: {
      fileSize: 1024 * 1024 * 5 // 5 MB
    }
  }).single('photo');

  return async (req, res) => {
    const userId = res.locals.user.id;
    if (!userId) {
      console.error('UserId is undefined');
      return res.status(400).send('UserId is undefined');
    }

    try {
      const user = await User.findById(userId);
      if (!user) {
        console.error('User not found');
        return res.status(404).send('User not found');
      }

      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          console.error('MulterError:', err);
          return res.status(500).send(err.message);
        } else if (err) {
          console.error('Unknown Error:', err);
          return res.status(500).send(err.message);
        }
        try {
          const filePath = `/public/uploads/${req.file.filename}`;
          await User.findByIdAndUpdate(userId, { imgPath: filePath });
          console.log('File uploaded and user updated successfully.');
          res.send('File uploaded and user updated successfully');
        } catch (updateError) {
          console.error('Error updating user:', updateError);
          return res.status(500).send(updateError.message);
        }
      });
    } catch (err) {
      console.error('Error finding user:', err);
      return res.status(500).send(err.message);
    }
  };
};

module.exports = { uploadFile };
