const express = require("express");
const router = express.Router();
const multer = require("multer");
const Contact = require("./../models/Contact");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cd) {
    return cd(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Create Contact
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, number, company, service, budget, details, file } =
      req.body;

    const newContact = new Contact({
      name,
      email,
      number,
      company,
      service,
      budget,
      details,
      file: file || "",
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
});

// Show All Contacts
router.get("/", async (req, res) => {
  try {
    const contactItems = await Contact.find();
    console.log(contactItems);
    res.status(200).json({ contacts: contactItems });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Handle file uploads
router.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res
    .status(200)
    .json({ message: "File uploaded successfully", file: req.file });
});

module.exports = router;