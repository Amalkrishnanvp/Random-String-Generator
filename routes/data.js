const express = require("express");
const router = express.Router();

/* POST data */
router.post("/", (req, res, next) => {
  const { lengthOfString, numberOFStrings, checkedValues } = req.body;
  // console.log("lengthOfString: " + lengthOfString);
  // console.log("numberOFStrings: " + numberOFStrings);
  // console.log("checkedValues: " + checkedValues);

  function generateRandomString(str, length) {
    let result = "";
    const stringLength = str.length;
    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * stringLength);
      result += str[index];
    }

    return result;
  }

  if (
    checkedValues.includes("uppercase") &&
    checkedValues.includes("lowercase") &&
    checkedValues.includes("numbers") &&
    checkedValues.includes("special-characters")
  ) {
    const str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrsuvwxyz!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("uppercase") &&
    checkedValues.includes("lowercase") &&
    checkedValues.includes("numbers")
  ) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrsuvwxyz";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("uppercase") &&
    checkedValues.includes("lowercase") &&
    checkedValues.includes("special-characters")
  ) {
    const str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsuvwxyz!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("uppercase") &&
    checkedValues.includes("numbers") &&
    checkedValues.includes("special-characters")
  ) {
    const str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsuvwxyz!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("lowercase") &&
    checkedValues.includes("numbers") &&
    checkedValues.includes("special-characters")
  ) {
    const str =
      "0123456789abcdefghijklmnopqrsuvwxyz!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("uppercase") &&
    checkedValues.includes("lowercase")
  ) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsuvwxyz";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("uppercase") &&
    checkedValues.includes("numbers")
  ) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("uppercase") &&
    checkedValues.includes("special-characters")
  ) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("lowercase") &&
    checkedValues.includes("numbers")
  ) {
    const str = "0123456789abcdefghijklmnopqrsuvwxyz";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("lowercase") &&
    checkedValues.includes("special-characters")
  ) {
    const str = "abcdefghijklmnopqrsuvwxyz!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (
    checkedValues.includes("numbers") &&
    checkedValues.includes("special-characters")
  ) {
    const str = "0123456789!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (checkedValues.includes("uppercase")) {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (checkedValues.includes("lowercase")) {
    const str = "abcdefghijklmnopqrsuvwxyz";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (checkedValues.includes("numbers")) {
    const str = "0123456789";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  } else if (checkedValues.includes("special-characters")) {
    const str = "!@#$%^&*()_+-={}[];:<>,.?/~`|/°©®™★";
    const length = lengthOfString;
    const finalResult = [];

    for (let i = 1; i <= numberOFStrings; i++) {
      finalResult.push(generateRandomString(str, length));
    }

    res.status(200).json({ finalResult });
  }
});

module.exports = router;
