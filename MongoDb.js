import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected`);
    }catch (err) {
        console.log(err);
    }

};

export default connectDatabase;