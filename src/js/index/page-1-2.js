{
  let view = {
    el: 'section.songsList',
    init(){
      this.$el = $(this.el)
      console.log(this.$el)
    },
    render(data){
      let {songs} = data
      console.log(songs)
      console.log(1)
      songs.map((song)=>{
        let $li = $(`
            <li>
              <h3>${song.name}</h3>
              <p>
                <svg class="icon icon-sq">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-sq"></use>
                </svg>
                ${song.singer}
              </p>
              <a class="playButton" href="">
                <svg class="icon icon-play">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-play"></use>
                </svg>
              </a>
            </li>
       `)
        this.$el.find('ol.list').append($li)
      })
      console.log(2)
    }
  }


  let model = {
    data: {
      songs: []
    },
    find() {
      let query = new AV.Query('Song')
      return query.find().then((songs) => {
        this.data.songs = songs.map((song) => {
          return {id: song.id, ...song.attributes}
        })
        return songs
      })
    }
  }


  let controller = {
    init(view,model){
      this.view = view
      this.view.init()
      this.model = model
      this.model.find().then(()=>{
        this.view.render(this.model.data)
        })
    }
  }
  controller.init(view,model)
}