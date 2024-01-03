import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
    {
        task:{
            type: String,
            required: true,
            trim: true, // This trims whitespaces form the beginning and end of the string
            maxlength: 30,
        },

    },
    {
        timestamps: true
    }
)

export const TODO = mongoose.model("TODO", todoSchema)