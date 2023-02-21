const login = (req, res) => {
  const { username, password } = req.body;
  if (!username)
    return res.status(400).json({ error: "Please fill all the fields" });

  if (
    username === process.env.USERNAMENA &&
    password === process.env.PASSWORD
  ) {
    return res.status(200).json({ user: username });
  } else if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.status(200).json({ user: username });
  } else {
    return res.status(400).json({ error: "Invalid credentials" });
  }
};

module.exports = login;
