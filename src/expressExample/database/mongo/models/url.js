const { model, Schema } = require('mongoose')
//model funcion / schema clase

const UrlSchema = new Schema(
    {
        id: {
            required: true,
            type: String,
            unique: true
        },
        link: {
            require: true,
            type: String
        },
        userId:{
            type: Schema.Types.ObjectId,
            require: true,
            ref: 'users'
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toObject: {
            transform: (_,ret) => {
                    delete ret._id
            }
        }
    }
)

const UrlModel = model('urls', UrlSchema)
module.exports = UrlModel