import client2 from "../client.js"

class Controls{
    create=async(req,res)=>{
        try{
            let body= req.body;
            let data=await client2.postData({...body})
            console.log(data)
            res.json(data)
        }catch(err){
            res.json(err)
        }
    }

    index=async(req,res)=>{
        try{
            let id=req.params.id
            let data=await client2.getData({id})
            res.json(data)
        }catch(err){
            res.json(err)
        }
    }

    update=async(req,res)=>{
        try{
            let datas= req.body
            let data=await client2.updateData({...datas})
            res.send(`data updated successfully with id=${datas.id}`)
        }catch(err){
            res.json(err)
        }
    }
    remove=async(req,res)=>{
        try{
            let id=req.query.id
            let data=client2.deleteData({id})
            res.send(`data deleted successfully with id=${id}`)
        }catch(err){
            res.json(err)
        }
    }
}

export default Controls
