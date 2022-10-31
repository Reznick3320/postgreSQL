const express = require('express');
const userRouter = require('./routes/user.router');
const postUser = require('./routes/post.router');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', postUser);
app.use('/api', userRouter);

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); })