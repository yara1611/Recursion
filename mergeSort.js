function merge(c,l,m,h){
    var n1 = m-l+1;
    var n2 = h-m;

    var L = new Array(n1);
    var R = new Array(n2);
    
    //initialize the arrays
    for (var i = 0; i < n1; i++) {
        L[i] = c[l + i];
    }
    for (var j = 0; j < n2; j++) {
        R[j] = c[m + 1 + j];
    }

    //Initialize the indicies
    var i=0
    var j=0
    var k=l;
    
    //compare
    while(i< n1&&j< n2){
        if(L[i]<R[j]){
            c[k++]=L[i++]
        }
        else{
            c[k++]=R[j++]
        }
    }

    //add the rest
    while(i<n1){
        c[k++]=L[i++]
    }
    
    while(j<n2){
        c[k++]=R[j++]
    }
}

function mergeSort(arr,l,h){
    
    if(l<h){
       var mid= Math.floor((l+h)/2)
        mergeSort(arr,l,mid)
        mergeSort(arr,mid+1,h)
        merge(arr,l,mid,h)
    }
    
}

var arr = [105, 79, 100, 110]
mergeSort(arr,0,arr.length-1)
console.log(arr)