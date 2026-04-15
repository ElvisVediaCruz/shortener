import Url from "../model/url.model.js"
import Base62 from "../utils/base62.js";
import getNextSequence from "../model/stance.model.js";

class UrlController {
    async createUrl(req, res) {
        const { url } = req.body;
        try {
            const id = await getNextSequence();
            const base62 = new Base62(process.env.ALPHABET);
            const encodedUrl = base62.encode(id);
            const newUrl = new Url({
                url: url,
                url_short: encodedUrl
            });
            await newUrl.save();
            res.json({
                "newUrl": `${process.env.url}/${encodedUrl}`
            });
        } catch (error) {
            return res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    }
    async getUrl(req, res){
        const {url} = req.params;
        try {
            const urlData = await Url.findOne({
                url_short: url
            });
            console.log("url", urlData)
            if(!urlData) return res.json("no url");
            res.redirect(302, urlData.url);
        } catch (error) {
            return res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    }
}

export default UrlController;