import express from 'express';

import productsRoute from './routes/products';

const app = express();
const PORT = 4040;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


app.use('/products', productsRoute);