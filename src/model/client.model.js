
// para mas adelante guardar la ip lugar de donde se realizo la solicitud
import mongoose from 'mongoose';

const Client = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    time_life:{
        type: Date,
        index: { expires: "60s"} // revisar si se quiere eliminar o mantener la informacion
    }
});

const ClientModel = mongoose.model("client", Client);

export default ClientModel;
