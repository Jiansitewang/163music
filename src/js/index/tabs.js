{
  let view = {
    el:'#tabs',
    init(){
      this.$el = $(this.el)
    }
  }
  let model = {
  }
  let  controller = {
    init(view,model){
      this.view = view
      this.view.init()
      this.model = model
      this.bindEvents()
    },
    bindEvents(){
      this.view.$el.on('click', '.tabs-nav > li',(e)=>{
        let $li = $(e.currentTarget)
        let tabName = $li.attr('data-page-name')
        $li.addClass('active')
          .siblings().removeClass('active')
        window.eventHub.emit('selectedTab', tabName)
      })
    }
  }
  controller.init(view,model)
}