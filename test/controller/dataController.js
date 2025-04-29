import Data from "../model/dataModel.js";

export const create = async(req,res)=>{
    try{
        const userData = new Data(req.body);
        if(!userData){
            return res.status(404).json({message:"invalid data"});
        }
        const saveData =await userData.save();
        res.status(200).json({saveData,message:"data save sucessfull"});


    }
    catch(error){
      res.status(500).json({message:error.message});
    }
};


export const getAllData =async (req,res)=>{
    try{
        const allData = await Data.find();
        if(!allData){
            res.status(404).json({message:"data not exite"});
        }
        res.status(202).json(allData);

    }
    catch(error){
res.status(500).json({message:error.message});
    }
};



export const user = async (req,res)=>{
try{
    const userid=req.params.id;
    const singleData= await Data.findOne({id:userid});
    if(!singleData){
        res.status(404).json({message:"data not exite"});
    }
    res.status(200).json(singleData);

}
catch(error){
   res.status(500).json({message:error.message});
}
};

export const updateuser=async (req,res)=>{
    try{
        const userid= req.params.id;
        const Userexit= await Data.findOne({id:userid});
        if(!Userexit){
            res.status(404).json({message:"data not exite"});
        }
        const updateData= await Data.findOneAndUpdate({id:userid},req.body,{new:true});
        res.status(200).json(updateData);

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

export const deleteuser= async (req,res)=>{
    try{
        const id =req.params.id;
        const userexit= await Data.findById(id);
        if(!userexit){
            res.status(404).json({message:"data not exite"});
        }
        const deleteData= await Data.findByIdAndDelete(id);
        res.status(200).json({message:"delete successfull"});

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}