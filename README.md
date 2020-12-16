# Rabbit MQ Example


## Installation rabbitMQ

Before installing make sure the taps are up-to-date:
```bash
$ brew update
```
Then, install RabbitMQ server with:
```bash
$ brew install rabbitmq
```
Run service:
```bash
$ brew services start rabbitmq
```
Open in your browser:
```bash
http://localhost:15672
```
Default credentials:
```bash
user: guest
password: guest
```

## Usage

```bash
$ node MQService.js
```