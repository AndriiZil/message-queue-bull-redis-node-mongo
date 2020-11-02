import { Schema, model } from 'mongoose';

const hitApiSchema = new Schema({
    api: {
        type: String,
    },
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

const HitApi = model('HitApi', hitApiSchema);

export default HitApi;