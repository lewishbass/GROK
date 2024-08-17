svg = document.querySelector("svg");
pt = svg.createSVGPoint();
nx = -20;
ny = -20;
anilock = false;
console.log("test");
document.getElementById("grok").addEventListener("mousemove", (e) => {
    pt.x = e.clientX; pt.y = e.clientY;
    svg_pnt = pt.matrixTransform(svg.getScreenCTM().inverse());
    nx = svg_pnt.x;
    ny = svg_pnt.y;
    if(anilock == false){
        anilock = true;
        requestAnimationFrame(shif);
    }
})
function shif(timeStamp){
    ox = document.getElementById("halo").getAttribute("cx");
    oy = document.getElementById("halo").getAttribute("cy");
    document.getElementById("halo").setAttribute("cx", (nx*0.02+ox*0.98));
    document.getElementById("halo").setAttribute("cy", (ny*0.02+oy*0.98));
    console.log(anilock)
    if(Math.pow(ox-nx, 2) + Math.pow(oy-ny, 2) > 1){
        requestAnimationFrame(shif);
    }else{
        anilock = false
    }
}
