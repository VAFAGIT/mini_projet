const express = require('express');

const router = express();
const {
    uploadFile,
    getFile,
    deleteFile,
    getFiles,
} = require('../controller/fileController');


router.post("/", uploadFile)
router.get("/files", getFiles);
router.get("/files/:id", getFile);
router.delete("/files/:id", deleteFile);

module.exports = router;
      
