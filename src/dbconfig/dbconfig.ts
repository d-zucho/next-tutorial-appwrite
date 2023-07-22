import mongoose from 'mongoose'

export async function connect() {
  try {
    mongoose.connect(process.env.MONGOO_URL!)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('MongoDB connected successfully')
    })
  } catch (err: any) {
    console.log('something went wrong!')
    console.log(err.message)
    process.exit()
  }
}
