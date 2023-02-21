const express = require("express");
const {
  createComponent,
  getAllComponents,
  updateProcess,
  updateBatch,
  deleteComponent,
  deleteBatch,
} = require("../controllers/componentsController");
const router = express.Router();

router.get("/", getAllComponents);
router.post("/create", createComponent);
router.put("/process/:batch/:name", updateProcess);
router.put("/batch/:name", updateBatch);
router.delete("/:component", deleteComponent);
router.delete("/:component/:batch",deleteBatch)

module.exports = router;
