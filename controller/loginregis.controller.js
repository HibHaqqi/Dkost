const RegisService = require("../service/register.service");

const regisService = new RegisService;

class LoginRegisController{
    async regisCustomer(req,res){
        try {
            const payload = req.body;
            const newCustomer = await regisService.regisNewCustomer(payload);
            res.status(201).json({ message: "User berhasil dibuat", data: newCustomer });
        } catch (error) {
            if (error.message === "Data tidak lengkap") {
                res.status(400).json({ message: "Data tidak lengkap" });
            } else if (error.message === "Email sudah terdaftar") {
                res.status(409).json({ message: "Email sudah terdaftar" });
            } else {
                res.status(500).json({ message: error.message });
            }
        }
    }
}

module.exports = LoginRegisController