import caller from "grpc-caller"
const PROTO_FILE="./home/app/src/proto/service_def.proto"

const client2 = caller('dns:grpc-server:3000', PROTO_FILE, 'DataService')

export default client2

