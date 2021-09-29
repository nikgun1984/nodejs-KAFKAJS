const { Kafka } = require("kafkajs");

run();
async function run() {
	try {
		const kafka = new Kafka({
			clientId: "myapp",
			brokers: ["Nikolays-MBP:9092"],
		});

		const admin = kafka.admin();
		console.log("Connecting...");
		await admin.connect();
		console.log("Connected!!!");
		admin.createTopics({
			topics: [
				{
					topic: "Users",
					numPartitions: 2,
				},
			],
		});
		console.log("Created successfully");
		await admin.disconnect();
	} catch (ex) {
		console.error(`Something bad happened ${ex}`);
	} finally {
		process.exit(0);
	}
}
