import path from "path";
import multer from "multer";

const uploadsPath = path.join(__dirname, "../uploads");

const newFileName = (file) => Date.now() +'.'+  file.originalname.split(".").pop();

const destinationRoute = (path) => (req, file, callback) => { callback(null, path) };
const filenameRoute = () => (req, file, callback) => { callback(null, newFileName(file))};

const storage = multer.diskStorage({
  destination: destinationRoute(uploadsPath),
  filename: filenameRoute(),
});

export const upload = multer({ storage });

export const uploadImage = (req, res) => res.send({ message: "Image received successfully" });
