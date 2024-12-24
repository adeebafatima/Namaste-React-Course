module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }], //Babel(transcompiler) helps testing library to convert jsx to html, inorder to read it
  ],
};