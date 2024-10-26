import { Address } from "../Models/Address.js";

export const addAddress = async (req, res) => {
    const { fullName, address, city, state, country, pincode, phoneNumber } =
        req.body;

    let userId = req.user;

    let userAddress = await Address.create(
        {userId,
        fullName,
        address,
        city,
        state,
        country,
        pincode,
        phoneNumber}
    );
    res.json({ message: "Address added", userAddress});
};
