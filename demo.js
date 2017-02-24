
weex.requireModule('modal').alert({
  message: weex.config.bundleUrl,
  duration: 2
}, function() {
  console.log('DONE');
})
