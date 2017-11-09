module.exports.add = (a, b) => a + b;

module.exports.square = n => n * n;

module.exports.setName = (user, fullName) => {
  const names = fullName.split(" ");
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.asyncSquare = (n, callback) => {
  setTimeout(() => {
    callback(n * n);
  }, 1500);
};
