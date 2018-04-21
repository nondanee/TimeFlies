var value = document.querySelector(".value")
var now = new Date()
var thisYearStart = new Date(now.getFullYear().toString()).getTime()
var thisYearEnd = new Date((now.getFullYear()+1).toString()).getTime()
var thisYearLength = thisYearEnd - thisYearStart
function refresh(){
	value.innerHTML = ((new Date().getTime() - thisYearStart) / thisYearLength * 100).toFixed(6)
}
refresh()
setInterval(refresh,1000)