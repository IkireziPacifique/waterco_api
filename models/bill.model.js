import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";
 
const Bill = sequelize.define('bills', {
    BillId:{
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    No_Zones:{
        type: Sequelize.STRING(50),
        allowNull: false
    }
},{
    sequelize, 
    tableName: "bills",
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            {name: "BillId"}
        ]
    }]    
})

export default Bill;