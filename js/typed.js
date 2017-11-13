var headerTxt = new Typed('.headerTxt', {
    contentType: 'text',
    strings: ['We Are Building Communities', 'We Are Sustaining Initiatives', 'We Are Exploring Alternatives', 'We Are TIES', 'Technology, Innovation, Entrepreneurship, & Sustainability'],
    typeSpeed: 50,
    backSpeed: 10,
    smartBackspace: true,
    backDelay: 800,
    loop: false,
});

$('#searchTxt').hover(function(){
  var searchTxt = new Typed('#searchTxt', {
      strings: ['', 'Discover Interesting Problems', 'Generate New Ideas', 'Build Interdisciplinary Teams', 'Advance Innovative Projects', 'Support Local Organizations', 'Empower Sustainable Development', 'Discover'],
      typeSpeed: 30,
      backSpeed: 0,
      smartBackspace: true,
      backDelay: 500,
      loop: false,
      loopCount: Infinity,
      attr: 'placeholder',
      bindInputFocusEvents: true,
  });
  $('#searchTxt').removeData();
});
