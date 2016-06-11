import app from '/adapter/waimai/app.es6';

export default {
  init(){
    let me =this;
    app.ready((initData)=>{
      let dialogBtn = document.querySelector('.dialog-btn button');
      dialogBtn.addEventListener('click',(e)=>{
        me.showDialog();
      },false)
    })
  },
  showDialog(){
    app.ui.alert('I am a cross-platform dialog');
  }
}

