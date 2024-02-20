const errorHandler = (err, req, res, next) => {
   switch (err.name) {
      case "InvalidToken":
      case "JsonWebTokenError":
         res.status(401).json({ message: "Invalid Token" });
         break;
      case "SequelizeValidationError":
      case "SequelizeUniqueConstraintError":
         res.status(400).json({ message: err.errors[0].message });
         break;
      case "EmailRequired":
         res.status(400).json({ message: "Email is required" });
         break;
      case "forbidden":
         res.status(403).json({ message: "Only admin can do this" });
         break;
      case "PasswordRequired":
         res.status(400).json({ message: "Password is required" });
         break;
      case "InvalidUser":
         res.status(401).json({ message: "Invalid email/password" });
         break;
      case "InvalidToken":
         res.status(401).json({ message: "Invalid Token" });
         break;
      case "itemDuplicate":
         res.status(401).json({ message: "Item already added" });
         break;
      default:
         console.log(err);
         res.status(500).json({ message: "Internal Server Error" });
         break;
   }
};

module.exports = errorHandler;
