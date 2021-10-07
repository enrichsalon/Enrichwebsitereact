import * as R from "ramda";

export const filterAlphaBetically = (data, alphabet) => {
    if(alphabet === "#"){
        return data;
    }
    console.log("test", R.filter(dataItem => dataItem.label.charAt(0).toLowerCase() === alphabet.toLowerCase()));
    return R.filter(dataItem => dataItem.label.charAt(0).toLowerCase() === alphabet.toLowerCase())(data);
}