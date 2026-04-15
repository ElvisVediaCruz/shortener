import mongose from 'mongoose';

const urlSchema = new mongose.Schema({
    url: {
        type: String,
        required: true
    },
    url_short:{
        type: String,
        required: true
    },
    time_fini:{
        type: Date,
        index: { expires: "30d"}
    }
})
const Url = mongose.model('url', urlSchema);

export default Url;