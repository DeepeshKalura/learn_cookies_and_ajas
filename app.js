const express = require('express')
const ejs = require('ejs')
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

    let user_name = (req.cookies.name)
    console.log(user_name)
    if (user_name == undefined) {
        user_name = "My user";
    }
    res.render('index', { name: encodeURIComponent(user_name) });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});