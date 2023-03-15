let arr = ['ali', 'reza', 'alireza', 'muhammad', 'coshqun', 'eles'] 

const findLongestName = (arr) => {
    let maxName = arr[0]
    arr.forEach((ad) => {
        if (ad.lenght > maxName.lenght) { 
            maxName = ad
        }
    }
    )}
    
     console.log(maxName)

     findLongestName(arr)
