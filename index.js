const express = require('express');
const multer = require('multer');
const app = express();


app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const storage = multer.diskStorage({
destination: ( req, file, cb)=> 
    cb(null, 'uploads/'),
filename:(req, file, cb)=>
    cb(null, file.originalname )

});

const upload = multer({storage: storage})

app.post('/upload',upload.single('file'),(req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(5000,()=> (console.log('app is running on 5000')));
