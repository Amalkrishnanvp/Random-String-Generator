const express = require("express");
const router = express.Router();

/* POST data */
router.post("/", (req, res, next) => {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrsuvwxyz";
  const length = 11;
  const finalResult = generateRandomString();
  res.status(200).json({ finalResult });

  function generateRandomString() {
    let result = "";
    const stringLength = str.length;
    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * stringLength);
      result += str[index];
    }

    return result;
  }
});

module.exports = router;
