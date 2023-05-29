# Weather Telegram Bot

This is a Telegram bot developed using Node.js that provides weather information using the OpenWeatherMap API. It allows users to retrieve current weather data for a specific location and also provides a subscription feature to receive regular weather updates.

## Setup and Configuration

To set up and configure the Weather Telegram Bot, follow the steps below:

1. Clone the repository or download the source code.
2. Install the required dependencies by running the command `npm install` in the project directory.
3. Obtain an API key from OpenWeatherMap by creating an account on their website.
4. Rename the `config.example.json` file to `config.json` and replace the placeholder value for `"API_KEY"` with your actual OpenWeatherMap API key.
5. Set up a new bot on Telegram by following the instructions provided in the Telegram Bot API documentation.
6. Obtain the bot token from Telegram and update the `config.json` file by replacing the `"BOT_TOKEN"` placeholder with your bot's token.
7. Run the bot using the command `npm start`.

## Usage

Once the bot is up and running, open the Telegram app and search for your bot by its username. Start a conversation with the bot and use the following commands:

- `/subscribe `: First you have to login to the telegram channel then you can use weather command.
- `/weather [city]`: Retrieves the current weather information for the specified city. Replace `[city]` with the name of the desired city.



Please note that only one city can be subscribed to at a time. Subscribing to a new city will replace the previous subscription.

## Dependencies

The following dependencies are used in this project:

- `node-telegram-bot-api`: A Node.js wrapper for the Telegram Bot API.
- `axios`: A popular HTTP client for making API requests.
- `dotenv`: A module for loading environment variables from a `.env` file.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use the code for your own purposes.

## Acknowledgements

Special thanks to OpenWeatherMap for providing the weather data API, and to the Telegram team for their Bot API and documentation.

Please note that this bot is for educational and personal use only and should not be used for commercial purposes without proper authorization and adherence to the terms and conditions of the respective services used (OpenWeatherMap, Telegram).
