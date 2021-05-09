import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const User = sequelize.define('users', {
    user_id: {
        autoincrement: true,
        type: Sequelize.INTEGER(11),
        allowNull: true,
        primaryKey: true
    },
    email_address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    full_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    tableName: "users",
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "user_id" }
        ]
    }]
})

export default User;