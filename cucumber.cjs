module.exports = {
  default: {
    paths: ["./features/*.feature"],
    require: ["./src/steps/*.js", "./src/support/*.js"],
    format: ["progress"]
  }
};

