import Role from '../Models/roleModles.js'

export const addRole = async (req, res) => {
    const {role,permissions} = req.body;
    const newRole = await Role({role,permissions})
    const isSaved = await newRole.save()

    if(isSaved){

        return res.send({ code: 200, message: "role added" });
    }else{
        return res.send({code:500, message:"server error"})
    }

};
export const deleteRole = (req, res) => {
  return res.send({ code: 200, message: "role added" });
};

