const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case value: //tinggal ganti dengan error name sesuai endpoint masing masing
      break;

    default:
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
};

module.exports = errorHandler;
