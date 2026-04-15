export function checkUrl(req, res, next){
    const url = req.params.url;
    if(!url) return res.json("no url or expided");
    next();
}
export function checkUrlCreate(req, res, next){
    const url = req.body.url;
    if(!url) return res.json("no url");
    next();
}
export function checkUrlValid(req, res, next){
    const url = req.body.url;
    if(!url.includes("https://www.")) return res.json("url no valid");
    next();
}
export function checkIp(req, res, next){
    const ip = req.ip;
}
export default {
    checkUrl,
    checkUrlCreate,
    checkUrlValid
}