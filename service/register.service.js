const bcrypt = require("bcrypt");
const {Customer} =require("../models")

class RegisService {
    async regisNewCustomer(payload){
        const { name, phone, email, password, date_born,user_image,ktp_image,role } = payload;
        try {
            if (!name || !phone || !email || !password ||!date_born ||!user_image||!ktp_image|| !role) {
                throw new Error("Data tidak lengkap");
              }
        
              const user = await Customer.findOne({ where: { email } });
              if (user) {
                throw new Error("Email sudah terdaftar");
              }
        
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(password, salt);
        
              const newCustomer = await Customer.create({
                name, 
                phone, 
                email, 
                password :hashedPassword, 
                date_born,
                user_image,
                ktp_image,
                role
              });
              return newCustomer;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = RegisService;