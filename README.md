# nodejs-KAFKAJS
demonstration how kafka works in js  

- Create docker zookeeper: docker run  --name zookeeper -p 2181:2181 zookeeper 
- run kafka: docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=<pc-name>:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<pc-name>:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka  
- run: npm i 

DONE!!!
