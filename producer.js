const { Kafka } = require("kafkajs");
const msg = process.argv[2];
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
		//A-M partition 0,  N-Z partition 1
		const partition = msg[0] < "N" ? 0 : 1;
		const result = await producer.send({
			topic: "Users",
			messages: [
				{
					value: msg,
					partition: partition,
				},
			],
		});
		console.log(`Sent successfully ${JSON.stringify(result)}`);
		await producer.disconnect();
	} catch (ex) {
		console.error(`Something bad happened ${ex}`);
	} finally {
		console.log("DONE!!!");
		process.exit(0);
	}
}
