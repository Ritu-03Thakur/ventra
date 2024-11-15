import { User } from "./../models/user.model.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    

    user.refreshToken = refreshToken;
    return { accessToken, refreshToken };
  } catch (error) {
    console.log(
      "Something went wrong while generating refresh and access token"
    );
  }
};

const registerUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if ([email, name, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Email already exist !" });
    }

    const user = await User.create({ email, name, password });
    const userWithoutPassword = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "User Registration Failed !!", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // console.log(req.body);
    const isExistUser = await User.findOne({ email });
    if (!isExistUser) {
      return res.status(400).json({ message: "Email does not exist !" });
    }
    const checkPassword = await isExistUser.isPasswordCorrect(password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Password is incorrect !" });
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      isExistUser._id
    );

    const isLogIn = await User.findById(isExistUser._id).select(
      "-password -refreshToken", );
    

    return res
      .status(200)
       .cookie("refreshToken", refreshToken )
       .cookie("accessToken", accessToken)
      .json({ isLogIn, accessToken, refreshToken });
  } catch (error) {
    return res
      .status(501)
      .json({ error: error.message, message: "Login User Error !!" });
  }
};

const logOutUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: { refreshToken: 1 },
      },
      { new: true }
    );

    const isOptions = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("refreshToken", isOptions)
      .clearCookie("accessToken", isOptions)
      .json({ message: "User Logout Successfully !!" });
  } catch (error) {
    return res
    .status(501)
    .json({
      message : "Logout Failure !!"
    })

  }
};

const getCurrentUser = async (req, res) => {
  return res.status(200).json({
    name: req.user.name,
  });
};

export { registerUser, loginUser, getCurrentUser, logOutUser };
