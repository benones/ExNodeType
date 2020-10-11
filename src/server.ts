import express, { request, response } from 'express';

const app = express();


app.get('/', (request, response) =>{
  return response.json({ message: 'hellow React'})
})
app.listen(3333, () => {
  console.log('Backend Started 3333 ^.^')
});
