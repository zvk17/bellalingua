module.exports = {
    index(req,res){
        let data;        
        switch (req.params.langId) {
            case "fr":
                data = ["ù", "û", "ü", "ÿ", "à", "â", "æ", "ç", "é", "è", "ê", "ë", "ï", "î", "ô", "œ"];
                break;
            default:
                data = [];
        }
        res.json(data);
    }
}
