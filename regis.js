var LOG = [{
    login: 'Tolegen',
    password: '12345678',
}]

var i = 0;
function funcReg() {
if (true) {
    i++;
    LOG[i]={};
    LOG[i].login = document.getElementById('log').value;
    LOG[i].password = document.getElementById('parol').value;
}s
}
  function funcNewReg() {
            let NewLog = document.getElementById('login').value;
            let NewPassword = document.getElementById('password').value;
for(;i>=0;i--){
            if (NewLog == LOG[i].login && NewPassword == LOG[i].password) {
                location.href = "index.html";
           //     document.getElementById("div").innerHTML="Your nickname:"+login2;
            }
        }
  }





//////////////