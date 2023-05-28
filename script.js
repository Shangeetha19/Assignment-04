var names=new Array();
names[0]="Shangeetha";
names[1]="Sassy";
names[2]="Priya";
names[3]="Sara";
names[4]="Hannah";
names[5]="Rishi";
names[6]="Suganth";
names[7]="Shyam";
names[8]="Leena";
names[9]="Leah";
console.log(names[0].charAt(0))
for(var i=0;i<names.length;i++){
    if(names[i].charAt(0)=='J'||names[i].charAt(0)=='j'){
    console.log("Goodbye "+names[i]);
    }else{
        console.log("Hello "+names[i]);
    }
}