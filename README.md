# Number Classification API

A RESTful API that analyzes numbers and returns their mathematical properties along with interesting facts.

## Features

- Number classification (prime, perfect, Armstrong)
- Parity checking (odd/even)
- Digit sum calculation
- Integration with Numbers API for fun mathematical facts
- CORS enabled
- Error handling
- Input validation

## Technologies Used

- Node.js
- Express.js
- Axios
- CORS
- dotenv

## API Specification

### Endpoint

```curl
GET /api/classify-number?number={number}
```

### Success Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

```json
{
  "number": "invalid_input",
  "error": true
}
```

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/number-classification-api.git
```

2. Install dependencies:

```bash
cd number-classification-api
npm install
```

3. Create a `.env` file in the root directory:

```
PORT=8003
```

4. Start the server:

```bash
npm start
```

## Testing

You can test the API using cURL or Postman:

```bash
curl "http://localhost:8003/api/classify-number?number=371"
```

## Deployment

This API can be deployed to platforms like:

- Heroku
- Railway
- Render
- DigitalOcean

Make sure to set up the appropriate environment variables on your deployment platform.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
