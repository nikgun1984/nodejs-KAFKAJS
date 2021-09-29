const { Kafka } = require("kafkajs");

run();
async function run() {
	try {
		const kafka = new Kafka({
			clientId: "myapp",
			brokers: ["Nikolays-MBP:9092"],
		});

		const producer = kafka.producer();
		console.log("Connecting...");
		await producer.connect();
		console.log("Connected!!!");

		console.log("Created successfully");
		await producer.disconnect();
	} catch (ex) {
		console.error(`Something bad happened ${ex}`);
	} finally {
		process.exit(0);
	}
}
