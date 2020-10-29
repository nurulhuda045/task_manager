const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
    }).catch((e) => {
        console.log("Not Connected to Database ERROR! ", e);
});







