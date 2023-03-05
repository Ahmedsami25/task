var img =document.getElementById('fire')
document.addEventListener('mousemove',function(e) {
    img.style.left = e.clientX + 'px'
    img.style.top = e.clientY + 'px'
    
    
})

document.addEventListener('click',function()
{
    var r = Math.round(Math.random() *255)
    var g = Math.round(Math.random() *255)
    var b = Math.round(Math.random() *255)
    document.body.style.backgroundColor ='rgb(' + r + ',' + g + ',' + b +')'

})
