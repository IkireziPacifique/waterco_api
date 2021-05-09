import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Route = sequelize.define('routes',{
    RouteId:{
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    No_Plants:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    Status:{
        type: Sequelize.STRING(50),
        allowNull: false
    }
},{
    sequelize, 
    tableName: "routes",
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            {name: "RouteId"}
        ]
    }]    
})

export default Route;