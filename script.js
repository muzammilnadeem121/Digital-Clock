function updatetime(){
    const clock = document.getElementById('time')
    const now = new Date;
    const hour = String(now.getHours()).padStart(2 ,0)
    const minutes = String(now.getMinutes()).padStart(2, 0)
    const seconds = String(now.getSeconds()).padStart(2 , 0)

    clock.textContent = `${hour} : ${minutes} : ${seconds}`
}

updatetime();
setInterval(updatetime , 1000)