import grpc from "@grpc/grpc-js"
import protoloader from "@grpc/proto-loader"
import ShirtProduct from "./Model/dataModel.js";

const PROTO_FILE="./home/grpc/src/proto/service_def.proto";

import "./dbs/connection.js"

const option={
    keepCase:true,
    longs: String,
    enums: String,
    default:true,
    oneofs:true
};

const pkgDefs=protoloader.loadSync(PROTO_FILE, option);

const proto=grpc.loadPackageDefinition(pkgDefs);

const server=new grpc.Server();


server.addService(proto.DataService.service,{
    postData: async(input,callback)=>{
        try{
            const create= new ShirtProduct(input.request);
            const result= await create.save();
            // console.log(result)
            callback(null,result)
        }catch(error){
            // console.log(error)
            callback(error,null)

        }
        
    },
    getData:async(input, callback)=>{
        try {
            let data= await ShirtProduct.find({_id:input.request.id})

            // console.log(data[0])
            callback(null, data[0])
        }catch(error){
            console.log(error)
            callback(error,null)
        }


    },
    updateData: async(input, callback)=>{
        try{
            let data=await ShirtProduct.findOneAndUpdate({_id:input.request.id},{$set:{...input.request}})
            // console.log(data)
            callback(null, data)
        }catch(error){
            // console.log(error)
            callback(error,null)
        }
    },
    deleteData: async(input,callback)=>{
        try{
            let data=await ShirtProduct.findByIdAndDelete({_id:input.request.id})
            callback(null,data)
        }catch(error){
            // console.log(error)
            callback(error,null)
        }
    }
})


server.bindAsync("dns:grpc-server:3000",grpc.ServerCredentials.createInsecure(),(error,port)=>{
    console.log(`server listening on port ${port}`);
    server.start();
})

