export const dark = {
    backgroundTopStop : "#212121",
    backgroundBelowStop : "#1a1a1a",
    regularText : "#ffffff",
    regularContainer : "#333333",
    regularContainerBorder : "black",
    regularContainerShadow : "rgba(0, 0, 0, 0.35)",
    emphasizedText : "#333333",
    emphasizedContainer : "#fafafa",
    emphasizedContainerBorder : "#555761",
    emphasizedContainerShadow : "rgba(255, 255, 255, 0.35)",
    unselectedBareText : "#333333",
    standaloneBorder : "#ffffff",
    scrollbarThumbFill : "#333333",
    scrollbarThumbBorder : "#000000",
    scrollbarThumbHoveredFill : "#666666",
    scrollbarThumbHoveredBorder : "#000000",
    scrollbarTrackFill : "rgba(0, 0, 0, 0)",
    scrollbarTrackBorder : "rgba(0, 0, 0, 0)",
    scrollbarTrackHoveredFill : "rgba(0, 0, 0, 0)",
    scrollbarTrackHoveredBorder : "rgba(0, 0, 0, 0)",
    


};

export const light = {
    backgroundTopStop : "#ffffff",
    backgroundBelowStop : "#d4d4d4",
    regularText : "#1a1a1a",
    regularContainer : "#d4d4d4",
    regularContainerBorder : "#abacae",
    regularContainerShadow : "rgba(0, 0, 0, 0.35)",
    emphasizedText : "#ffffff",
    emphasizedContainer : "#333333",
    emphasizedContainerBorder : "black",
    emphasizedContainerShadow : "rgba(0, 0, 0, 0.35)",
    unselectedBareText : "#95a3ab",
    standaloneBorder : "#000000",

};

export function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}