import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  // a schema is a blueprint of how the data will be stored in the database
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
  isVerified: {
    type: Boolean,
    default: false,
    // when a user is created, they are not verified by
    // default- would get email to verify the email address.
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  // these are tokens that are used to verify the user's email address and to reset their password
})

const User = mongoose.models.users || mongoose.model('users', userSchema) // the schema from above
// mongoose.models.users is the name of the model in the database
// this states that if the model already exists, use it, otherwise create a new model

export default User
