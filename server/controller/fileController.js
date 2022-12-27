const File = require("../models/fileModel");

//  Upload file
exports.uploadFile = async (req, res, next) => {
    try {
        const file = await File.create(req.body);

        res.status(201).json({
            status: "success",
            data: file,
        });
    } catch (err) {
        if(error.name === "validationError") {
            const messages = Object.values(err.errors).map((val) => val.message);
            return res.status(400).json({
                success: false,
                error: messages,
            });

        } else {
            return res.status(500).json({           
                success: false,
                error: "Server Error",
            });

        }
    }
}

//  Get all files
exports.getFiles = async (req, res, next) => {
    try {
        const files = await File.find();

        return res.status(200).json({
            success: true,
            count: files.length,
            data: files,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
}

//  Get single file
exports.getFile = async (req, res, next) => {

    try {
        const file = await File.findById(req.params.id);

        if(!file) {
            return res.status(404).json({
                success: false,
                error: "No file found",
            });
        }

        return res.status(200).json({
            success: true,
            data: file,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }

}

//  delete file
exports.deleteFile = async (req, res, next) => {

  try {
        const file = await File.findById(req.params.id);
        if(!file) {
            return res.status(404).json({
                success: false,
                error: "No file found",
            });
        }

        await file.remove();
        return res.status(200).json({
            success: true,
            data: {},
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }

}