module.exports = (error, response) => {
  console.log("Error_:", error);
  switch (error.code) {
    case 10001:
      response.status(404).json({
        error: {
          message: error.message,
          code: error.code
        }
      });
      break;
    default:
      response.status(500).json({
        error: {
          message: "Something was wrong, try later.",
          code: 999
        }
      });
      break;
  }
};
