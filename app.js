const exp=require('express');
const app = exp();

// Built-in middleware to parse incoming JSON payloads
app.use(exp.json());

// Basic GET route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Express server is running!' });
});

// Start listening for requests
app.listen(5000, () => {
  console.log(`Server running on 5000`);
});
