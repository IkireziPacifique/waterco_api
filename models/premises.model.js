import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";


const Premises = sequelize.define('premises', {
    PremisesId:{
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Meter_no:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    status:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
},{
    sequelize,
    tableName: "premises",
    timetamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            {name: "PremisesId"}
        ]
    }]
})

export default Premises;