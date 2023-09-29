export const login = async (req, res, next) => {
  
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return next(createError(404, "User not found"));

  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
   
      if (!isPasswordCorrect)
        return next(createError(400, "Wrong password or username"));
  
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
  
      const { password, isAdmin, ...otherDetails } = user;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ ...otherDetails });
    } catch (err) {
      next(err);
    }
  };