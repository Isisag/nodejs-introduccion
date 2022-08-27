const { model, Schema } = require('mongoose')
//model funcion / schema clase

const UserSchema = new Schema(
    {
        id: {
            required: true,
            type: String,
            unique: true
        },
        name: {
            require: true,
            type: String
        },
        lastName: {
            require: true,
            type: String
        },
        email: {
            require: true,
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toObject: {
            transform: (_,ret) => {
                    delete ret._id
            }
        },
        virtuals: {
            fullName: {
                get(){
                    return `${this.name} ${this.lastName}`
                }
            }
        }
    },
)

const UserModel = model('users', UserSchema)
module.exports = UserModel