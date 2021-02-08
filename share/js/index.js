$(window).load(function () {
  function setBtnOffset() {
    var viewH = $('#app').height()
    var viewW = $('#app').width()

    var baseW = 375
    var baseH = 1692
    var btnBaseW = 240
    var btnBaseH = 56
    var btnOffset = [375, 452, 250, 108]

    $('.btn').each(function (index, item) {
      $(item).css({
        width: (viewW * btnBaseW) / baseW,
        height: (viewH * btnBaseH) / baseH,
        marginLeft: -(viewW * btnBaseW) / baseW / 2,
      })
      if (index <= 1) {
        $(item).css({ top: (viewH * btnOffset[index]) / baseH })
      } else {
        $(item).css({ bottom: (viewH * btnOffset[index]) / baseH })
      }
    })
  }

  function lazyload(imgs, cb) {
    var load = {
      success: 0,
      error: 0,
    }

    var loadImg = function (img) {
      var newImg = new Image()

      $(newImg).attr('src', $(img).attr('data-src'))
      $(newImg).on('load', function () {
        load.success += 1
        $(img).attr('src', $(img).attr('data-src'))
        $(img).removeAttr('data-src')
        $(img).parent().removeClass('lazyload')
        if (load.success + load.error == imgs.length) {
          cb(load)
        }
      })
      $(newImg).on('error', function () {
        load.error += 1
        $(img).attr('src', '')
        if (load.success + load.error == imgs.length) {
          cb(load)
        }
      })
      // newImg.src = img.getAttribute('data-src')
      // newImg.addEventListener('load', function () {
      //   load.success += 1
      //   img.src = img.getAttribute('data-src')
      //   img.removeAttribute('data-src')
      //   img.parentNode.classList.remove('lazyload')
      //   if (load.success + load.error == imgs.length) {
      //     cb(load)
      //   }
      // })
      // newImg.addEventListener('error', function () {
      //   load.error += 1
      //   img.src = ''
      //   if (load.success + load.error == imgs.length) {
      //     cb(load)
      //   }
      // })
    }

    $(imgs).each(function (index, item) {
      loadImg(item)
    })
  }

  function OdinInstallFn() {
    try {
      var data = OdinInstall.parseUrlParams()
      var appKey = data.odinkey
      delete data.odinkey
      new OdinInstall(
        {
          appKey: '7e7887ffba474c98aff6ed1faf146ac6',
          server: 'https://www.odinanalysis.com',
          preferWakeup: true,
          onReady: function () {
            var m = this

            m.schemeWakeup()
            $('#android').on('click', function () {
              m.wakeupOrInstall()
              return false
            })

            var keystr = ''
            for (var i in data) {
              keystr += i + '=' + data[i] + '&'
            }
            if (keystr) {
              keystr = keystr.slice(0, keystr.length - 1)
            }

            $('#ios_a').attr('href', './tflight/index.html?' + keystr)

            // $('#ios').on('click', function () {
            //   console.log(123)
            //   location.href = '../tflight/index.html?' + keystr
            // })
          },
        },
        data,
      )
    } catch (error) {
      console.log(2)
    }
  }

  function GetRequest() {
    var url = location.search
    var theRequest = new Object()
    if (url.indexOf('?') != -1) {
      var str = url.substr(1)
      strs = str.split('&')
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
      }
    }
    return theRequest
  }

  var imgs = $('img')

  // $('.loading').remove()
  // $('#app').css({ display: 'block' })

  setBtnOffset()
  OdinInstallFn()
})
