let co=[]

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
}

function draw(){
  background(230);
  unreached=[...co];
  reached=[];
  reached=[unreached[0]];
  unreached.splice(0,1);
while(unreached.length>0){
   let d=10000;
   let uj;
   let ri;
    for(let i=0;i<reached.length;i++){
    for(let j=0;j<unreached.length;j++)
      {
        let di=dist(reached[i].x,reached[i].y,unreached[j].x,unreached[j].y);
        if(di<d){
          d=di;
          uj=j;
          ri=i;
        }
      }
  }
    print("reached",reached.length);
    print("unreached",unreached.length);
    line(unreached[uj].x,unreached[uj].y,reached[ri].x,reached[ri].y);
    reached.push(unreached[uj]);
    unreached.splice(uj,1);

    
  }


  for(let i=0;i<co.length;i++)
    {
      ellipse(co[i].x,co[i].y,10,10);
    }
}

function mousePressed(){
  let v=createVector(mouseX,mouseY);
  co.push(v);
}