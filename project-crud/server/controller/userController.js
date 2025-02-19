import User from '../model/userModel.js';

//create data using post methot
export const create =async(req,res)=>{
    try {
        const userData =new User(req.body);
        if(!userData){
            return res.status(404).json({message:"Invalid data"});
        }
       const saveData= await userData.save();
       res.status(200).json(saveData,{mes:"Data saved successfully"});
        
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//get all data using get method

export const getAllData= async(req,res)=>{
    try {
        const allData = await User.find();
        if(!allData){
            return res.status(404).json({message:"Data not found"});
        }
        res.status(200).json(allData);


    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//get single data using get method

export const user = async(req,res)=>{
    try {
        const id= req.params.id;
        const singleData = await User.findById(id);
        if(!singleData){
            return res.status(404).json({message:"Data not found"});
        }
        res.status(200).json(singleData);
        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
};

export const updateuser =async (req,res)=>{
    try {
        const id =req.params.id;
         const  Userexit= await User.findById(id);
        if(!Userexit){
            return res.status(404).json({message:"Data not found"});
        }
        const updateData = await User.findByIdAndUpdate(id, req.body,{new:true});
        res.status(200).json(updateData);


    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
}


export const deleteuser= async (req,res)=> {
    try {
        const id =req.params.id;
        const Userexit= await User.findById(id);
        if(!Userexit){
            return res.status(404).json({message:"Data not found"});
        }
        const deleteuser = await User.findByIdAndDelete(id);
        res.status(200).json({message:"Data deleted successfully"});

        
    } catch (error) {
        res.status(500).json({message:error.message});

    }
}