fis.set('project.files', ['/page/**','/test/**','/assets/image/**','adapter/**','config.json']); // 按需编译。

//var appConfList = ['waimai','nuomi'];
var appName = fis.project.currentMedia();

// 采用 commonjs 模块化方案。
fis.hook('commonjs');

fis.match('*.es6', {
    parser: fis.plugin('babel-5.x', {
      sourceMaps: false
    }),
    rExt: '.js'
  })
  .match('*.less', {
    parser: fis.plugin('less-2.x'),
    rExt: '.css'
  })
  .match('/**/(*.{less,css})',{
    release:'/css/$1',
    useHash:true,
  })
  .match("/widget/**", {
    useSameNameRequire: true
  })

// 设置成是模块化 js
fis.match('/{adapter,widget}/**.{js,es6}', {
    isMod: true
  })



fis.match('/test/config/(**)',{
    release:'/config/$1'
})

fis.match('::package', {
    postpackager: fis.plugin('loader', {
      useInlineMap: true,
      processor: {
          ".jade": "html",    //预编译把jade模板当成是Html，这样在资源定位上会替换成功，不然资源定位会失效
          ".html": "html"
        }
    })
  })
  .match("**.jade", {
  　　parser: fis.plugin("jade", {
      　　pretty: false
  　　}),
  　　rExt: ".html"
  })
  .match('/page/**/(*.jade)',{
    release:'/page/$1'
  })


fis.media(appName)
    .match('/adapter/**',{
      release: false,
    })
    .match('/adapter/'+ appName +'/(**)',{
      release:'/adapter/'+ appName +'/$1',
    })
    .match('::package', {
      packager: fis.plugin('map', {
        "useTrack": false,
        "assets/js/adapter.js": [
          "adapter/"+ appName +"/**.es6",
        ]
      })
    })


//console.log()

fis.match('**', {
  deploy: [
    fis.plugin('replace', {
      from: 'adapter/waimai/', // 业务中统一使用占位符
      to: 'adapter/' + appName + '/'
    }),
    fis.plugin('skip-packed', {
      // 配置项
    }),
    fis.plugin('local-deliver', {
      to: 'output'
    })
  ]
})

